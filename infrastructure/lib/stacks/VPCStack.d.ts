import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
export declare class VPCStack extends cdk.Stack {
    readonly vpc: cdk.aws_ec2.Vpc;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
