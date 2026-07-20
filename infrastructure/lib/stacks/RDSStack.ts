import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VPCStack } from "./VPCStack";
import { EKSStack } from "./EKSStack";
import { RDSConstruct } from "../database/rds";

export interface RDSStackProps extends cdk.StackProps {
    vpcStack: VPCStack;
    eksStack: EKSStack
}

export class RDSStack extends cdk.Stack {

    public readonly database;
    public readonly rdsSG;

    constructor(scope: Construct, id: string, props: RDSStackProps) {
        super(scope, id, props);

        const rds = new RDSConstruct(this, "RDS", {
            vpc: props.vpcStack.vpc,
            cluster: props.eksStack.cluster
        });

        this.database = rds.database;
        this.rdsSG = rds.rdsSecurityGroup
    }
}