import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { S3Construct } from '../Repository/s3';
import { CloudFrontConstruct } from '../network/cloudfront';


export class CloudFrontStack extends cdk.Stack{
    constructor(scope: Construct, id: string, props?: cdk.StackProps){
        super(scope,id,props);

        const s3 = new S3Construct(this, 'S3', {
            BucketName: 's3bucket-test-27112005'
        });

        new CloudFrontConstruct(this, 'CloudFront', {
            bucket: s3.bucket   
        });
    }
}