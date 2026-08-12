import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { RDSConstruct } from "../database/rds";

export interface RDSStackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
}

export class RDSStack extends cdk.Stack {

    public readonly database;
    public readonly rdsSG;

    constructor(scope: Construct, id: string, props: RDSStackProps) {
        super(scope, id, props);

        const rds = new RDSConstruct(this, "RDS", {
            vpc: props.vpc,
        });

        this.database = rds.database;
        this.rdsSG = rds.rdsSecurityGroup
    }
}