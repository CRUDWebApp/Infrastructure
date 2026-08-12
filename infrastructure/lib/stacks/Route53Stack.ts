import * as cdk from "aws-cdk-lib";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import { env } from "../variables";
import { Construct } from "constructs";
import { Route53Construct } from "../network/route53";

export interface CloudFrontStackProps extends cdk.StackProps {
    distribution: cloudfront.IDistribution
}


export class Route53Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: CloudFrontStackProps) {
        super(scope, id, props);

        // S3 bucket
        new Route53Construct(this, "Route53", {
            distribution: props.distribution
        })
        // new Route53Construct(this, "Route53",)
    }
}