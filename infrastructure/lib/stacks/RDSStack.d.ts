import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VPCStack } from "./VPCStack";
import { EC2Stack } from "./EC2Stack";
export interface RDSStackProps extends cdk.StackProps {
    vpcStack: VPCStack;
    ec2Stack: EC2Stack;
}
export declare class RDSStack extends cdk.Stack {
    readonly database: cdk.aws_rds.DatabaseInstance;
    constructor(scope: Construct, id: string, props: RDSStackProps);
}
