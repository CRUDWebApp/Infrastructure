import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
export interface MonitorStackProps extends cdk.StackProps {
    instanceId: string;
    repositoryName: string;
}
export declare class MonitorStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: MonitorStackProps);
}
