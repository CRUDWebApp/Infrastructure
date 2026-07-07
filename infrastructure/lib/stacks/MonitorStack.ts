import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { MonitorConstuct } from "../monitor/monitor-dashboard";

export interface MonitorStackProps extends cdk.StackProps {

    instanceId: string;

    repositoryName: string;

}

export class MonitorStack extends cdk.Stack {

    constructor(
        scope: Construct,
        id: string,
        props: MonitorStackProps
    ) {

        super(scope, id, props);

        new MonitorConstuct(this, "Dashboard", {

            instanceID: props.instanceId,

            repositoryName: props.repositoryName,

        });

    }

}