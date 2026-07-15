import { Construct } from "constructs";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
export interface CloudFrontProps {
    bucket: s3.Bucket;
}
export declare class CloudFrontConstruct extends Construct {
    readonly distribution: cloudfront.Distribution;
    constructor(scope: Construct, id: string, props: CloudFrontProps);
}
