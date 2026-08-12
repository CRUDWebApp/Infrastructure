import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib'
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import { domain_name,site_name } from "../variables";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { RemovalPolicy } from "aws-cdk-lib";

export interface Route53Props {
    distribution: cloudfront.IDistribution;
}

export class Route53Construct extends Construct {
    constructor(scope: Construct, id: string, props: Route53Props){
        super(scope,id)

        //find current zone
        const zone = route53.HostedZone.fromLookup(this, 'Zone', { 
            domainName: domain_name
        });
        new cdk.CfnOutput(this, 'Site', { value: 'https://' + site_name });
        console.log(zone);

        // Create a TLS/SSL certificate for HTTPS
        const certificate = new acm.Certificate(this, 'SiteCertificate', {
            domainName: domain_name,
            subjectAlternativeNames: [`*.${domain_name}`],
            validation: acm.CertificateValidation.fromDns(zone),
        });

        // The removal policy for the certificate
        certificate.applyRemovalPolicy(RemovalPolicy.DESTROY);
        new cdk.CfnOutput(this, 'Certificate', { value: certificate.certificateArn });

        // Add an 'A' record to Route 53 for 'www.example.com'
        new route53.ARecord(this, site_name, {
            zone: zone,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(props.distribution)),
            recordName: site_name
        })

        // Add an 'A' record to Route 53 for 'example.com'
        new route53.ARecord(this, domain_name, {
            zone: zone,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(props.distribution)),
            recordName: domain_name
        })

    }
}
