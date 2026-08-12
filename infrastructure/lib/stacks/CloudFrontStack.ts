import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from 'aws-cdk-lib/aws-s3'
import { CloudFrontConstruct } from "../network/cloudfront";


export interface CloudFrontStackProps extends cdk.StackProps {
    bucket: s3.IBucket;
}

export class CloudFrontStack extends cdk.Stack {
        public readonly distribution;

    constructor(scope: Construct, id: string, props: CloudFrontStackProps) {
        super(scope, id);

        const cloudfront = new CloudFrontConstruct(this, "CloudFront", {
            bucket: props.bucket
        });
        this.distribution = cloudfront.distribution;
    }
}
