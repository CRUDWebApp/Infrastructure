#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";

import { VPCStack } from "../lib/stacks/VPCStack";
import { EC2Stack } from "../lib/stacks/EC2Stack";
import { ECRStack } from "../lib/stacks/ECRStack";
import { MonitorStack } from "../lib/stacks/MonitorStack";

const app = new cdk.App();

const vpcStack = new VPCStack(app, "VPCStack");

const ec2Stack = new EC2Stack(app, "EC2Stack", {
    vpc: vpcStack.vpc,
});

const ecrStack = new ECRStack(app, "ECRStack");

const monitorStack = new MonitorStack(app, "MonitorStack", {
    instanceId: ec2Stack.instanceId,
    repositoryName: ecrStack.repositoryName,
});