import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
export interface EC2StackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
}
export declare class EC2Stack extends cdk.Stack {
    readonly instance1: ec2.Instance;
    readonly instance2: ec2.Instance;
    readonly securityGroup: ec2.SecurityGroup;
    constructor(scope: Construct, id: string, props: EC2StackProps);
}
