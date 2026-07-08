import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VPCConstruct } from "../network/vpc";

export class VPCStack extends cdk.Stack {

    public readonly vpc;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpcConstruct = new VPCConstruct(this, "VPC", {
            VPCName: "WebAppVPC",
        });

        this.vpc = vpcConstruct.vpc;
    }
}