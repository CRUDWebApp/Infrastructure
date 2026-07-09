#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";

import { VPCStack } from "../lib/stacks/VPCStack";
import { EC2Stack } from "../lib/stacks/EC2Stack";
import { ALBStack } from "../lib/stacks/ALBStack";
import { ECRStack } from "../lib/stacks/ECRStack";
import { RDSStack } from "../lib/stacks/RDSStack";
// import { CloudFrontStack } from "../lib/stacks/CloudFrontStack";

const app = new cdk.App();

// new CloudFrontStack(app, "CloudFrontStack");

const vpcStack = new VPCStack(app, "VPCStack");

const ec2Stack = new EC2Stack(app, "EC2Stack", {
    vpc: vpcStack.vpc,
});

const albStack = new ALBStack(app, "ALBStack", {
    vpc: vpcStack.vpc,
    instance: ec2Stack.instance,
});

// Cho phép ALB truy cập backend trên EC2
ec2Stack.instance.connections.allowFrom(
    albStack.alb,
    ec2.Port.tcp(3000),
    "Allow ALB to access backend"
);

new RDSStack(app, "RDSStack", {
    vpcStack,
    ec2Stack,
});

new ECRStack(app, "ECRStack");

app.synth();