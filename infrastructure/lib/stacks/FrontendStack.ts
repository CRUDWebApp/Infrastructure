import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3Construct } from "../Repository/s3";
import { CloudFrontConstruct } from "../network/cloudfront";

export class FrontendStack extends cdk.Stack {
    public readonly bucket;
    public readonly distribution;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // S3 bucket
        const s3 = new S3Construct(this, "S3")
        this.bucket = s3.bucket;

        // CloudFront distribution (trong cùng stack, không cross-stack dependency)
        const cloudfront = new CloudFrontConstruct(this, "CloudFront", {
            bucket: this.bucket
        });
        this.distribution = cloudfront.distribution;

        new cdk.CfnOutput(this, "S3BucketName", {
            value: this.bucket.bucketName,
            exportName: "FrontendS3BucketName"
        });

        new cdk.CfnOutput(this, "CloudFrontURL", {
            value: `https://${this.distribution.distributionDomainName}`,
            exportName: "FrontendCloudFrontURL"
        });
    }
}
