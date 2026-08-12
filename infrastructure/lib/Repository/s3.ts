import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { site_name } from '../variables';
import { Construct } from 'constructs';

export class S3Construct extends Construct {
    public readonly bucket: s3.Bucket;

    constructor(scope: Construct, id: string, props?: cdk.Stack){
        super(scope,id);

        this.bucket = new s3.Bucket(this, 'S3Bucket', {
            bucketName: site_name,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            versioned: false,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });

        new cdk.CfnOutput(this, "BucketName", {
            value: this.bucket.bucketName
        });
        
    }
}