import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { S3Construct } from "../Repository/s3";

export class S3Stack extends cdk.Stack {
    public readonly bucket;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // S3 bucket
        const s3 = new S3Construct(this, "S3")
        this.bucket = s3.bucket;
    }
}