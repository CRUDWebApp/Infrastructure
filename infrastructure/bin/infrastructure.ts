#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";

import { VPCStack } from "../lib/stacks/VPCStack";
import { EC2Stack } from "../lib/stacks/EC2Stack";
import { ECRStack } from "../lib/stacks/ECRStack";
import { CloudFrontStack } from "../lib/stacks/CloudFrontStack";
import { RDSStack } from "../lib/stacks/RDSStack";

const app = new cdk.App();

// new CloudFrontStack(app, 'CloudFrontStack');

const vpcStack = new VPCStack(app, "VPCStack");

const ec2Stack = new EC2Stack(app, "EC2Stack", {
    vpc: vpcStack.vpc,
});

const ecrStack = new ECRStack(app, "ECRStack");



new RDSStack(app, 'RDSStack', {vpcStack, ec2Stack});
