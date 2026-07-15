import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface CloudFrontProps {
    bucket: s3.Bucket;
}

export class CloudFrontConstruct extends Construct{
    public readonly distribution: cloudfront.Distribution;

    constructor(scope: Construct, id: string, props: CloudFrontProps){
        super(scope,id);
        
        this.distribution = new cloudfront.Distribution(this, "Distribution", {
            defaultRootObject: 'index.html',
            defaultBehavior: {
                origin: origins.S3BucketOrigin.withOriginAccessControl(props.bucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            },
            errorResponses: [
                {
                    httpStatus:403,
                    responseHttpStatus: 200,
                    responsePagePath:'/index.html'
                },
                {
                    httpStatus:404,
                    responseHttpStatus: 200,
                    responsePagePath:'/index.html'
                },
            ]
        });

        new cdk.CfnOutput(this, "CloudFrontURL", {
            value:
                "https://" +
                this.distribution.distributionDomainName
        });
    }
}