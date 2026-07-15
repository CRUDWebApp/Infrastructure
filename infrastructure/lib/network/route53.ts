import { Construct } from "constructs";

import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface Route53Props {
    hostedZoneName: string,
    recordName: string,
    distribution: cloudfront.Distribution;
}

export class Route53Construct extends Construct {
    constructor(scope: Construct, id: string, props: Route53Props){
        super(scope,id)

        const hostedzone = route53.HostedZone.fromLookup(this, 'HostedZone', {
            domainName: props.hostedZoneName
        });

        new route53.ARecord(this, 'AliasRecord',{
            zone: hostedzone,
            recordName: props.recordName,
            target: route53.RecordTarget.fromAlias(
                new targets.CloudFrontTarget(props.distribution)
            )
        });
    }
}
