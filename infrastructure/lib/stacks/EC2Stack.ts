import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

import { EC2Construct } from "../network/ec2";

export interface EC2StackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
}

export class EC2Stack extends cdk.Stack {

    public readonly instance: ec2.Instance;

    constructor(scope: Construct, id: string, props: EC2StackProps) {
        super(scope, id, props);

        const server = new EC2Construct(this, "EC2", {
            vpc: props.vpc,
        });

        this.instance = server.instance;
    }
}