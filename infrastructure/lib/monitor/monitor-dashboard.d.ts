import { Construct } from "constructs";
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
export interface MonitorProps {
    instanceID: string;
    repositoryName: string;
}
export declare class MonitorConstuct extends Construct {
    readonly Dashboard: cloudwatch.Dashboard;
    constructor(scope: Construct, id: string, props: MonitorProps);
}
