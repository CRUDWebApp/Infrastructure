import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VPCStack } from "./VPCStack";
import { EC2Stack } from "./EC2Stack";
import { RDSConstruct } from "../database/rds";

export interface RDSStackProps extends cdk.StackProps {
    vpcStack: VPCStack;
    ec2Stack: EC2Stack;
}

export class RDSStack extends cdk.Stack {

    public readonly database;

    constructor(scope: Construct, id: string, props: RDSStackProps) {
        super(scope, id, props);

        const rds = new RDSConstruct(this, "RDS", {
            vpc: props.vpcStack.vpc,
            backendSecurityGroup: props.ec2Stack.securityGroup
        });

        this.database = rds.database;
    }
}