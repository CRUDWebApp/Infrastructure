import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
export interface S3BucketProps {
    BucketName: string;
}
export declare class S3Construct extends Construct {
    readonly bucket: s3.Bucket;
    constructor(scope: Construct, id: string, props: S3BucketProps);
}
