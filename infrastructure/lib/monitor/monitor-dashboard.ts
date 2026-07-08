import { Construct } from "constructs";

import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

import { EC2MonitorCreate } from "./ec2-monitor";
import { ECRMonitorCreate } from "./ecr-monitor";

export interface MonitorProps{
    instanceID: string,
    repositoryName: string,
}

export class MonitorConstuct extends Construct{
    readonly Dashboard: cloudwatch.Dashboard;

    constructor(scope: Construct, id: string, props: MonitorProps){
        super(scope,id);
        this.Dashboard = new cloudwatch.Dashboard(this, id, {
            dashboardName: "WebappDashboard",
        });

        this.Dashboard.addWidgets(
            ...EC2MonitorCreate({
                instanceId: props.instanceID
            }),
            ...ECRMonitorCreate({
                repositoryName: props.repositoryName
            })
        );
    }
}