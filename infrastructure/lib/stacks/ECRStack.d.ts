import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
export declare class ECRStack extends cdk.Stack {
    readonly repositoryName: string;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
