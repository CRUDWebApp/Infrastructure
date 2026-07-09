import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface S3BucketProps{
    BucketName: string;
}

export class S3Construct extends Construct {
    public readonly bucket: s3.Bucket;;

    constructor(scope: Construct, id: string, props: S3BucketProps){
        super(scope,id);

        this.bucket = new s3.Bucket(this, 'S3Bucket', {
            bucketName: props.BucketName,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            versioned: false,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true
        });

        new cdk.CfnOutput(this, "BucketName", {
            value: this.bucket.bucketName
        });
        
    }
}