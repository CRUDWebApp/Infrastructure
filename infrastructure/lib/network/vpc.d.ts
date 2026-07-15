import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
export interface VPCConstructProps {
    VPCName: string;
}
export declare class VPCConstruct extends Construct {
    readonly vpc: ec2.Vpc;
    constructor(scope: Construct, id: string, props: VPCConstructProps);
}
