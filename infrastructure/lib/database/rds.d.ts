import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";
export interface RDSConstructProps {
    vpc: ec2.IVpc;
    backendSecurityGroup: ec2.ISecurityGroup;
}
export declare class RDSConstruct extends Construct {
    readonly database: rds.DatabaseInstance;
    readonly secret: secretsmanager.ISecret;
    constructor(scope: Construct, id: string, props: RDSConstructProps);
}
