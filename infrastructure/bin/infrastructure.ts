import * as cdk from "aws-cdk-lib";

import { VPCStack } from "../lib/stacks/VPCStack";
import { EC2Stack } from "../lib/stacks/EC2Stack";
import { ALBStack } from "../lib/stacks/ALBStack";
import { ECRStack } from "../lib/stacks/ECRStack";
import { RDSStack } from "../lib/stacks/RDSStack";
import { EKSStack } from "../lib/stacks/EKSStack";
// import { CloudFrontStack } from "../lib/stacks/CloudFrontStack";

const app = new cdk.App();

// new CloudFrontStack(app, "CloudFrontStack");

const vpcStack = new VPCStack(app, "VPCStack");


const rdsStack = new RDSStack(app, "RDSStack", {
    vpcStack
});

new ECRStack(app, "ECRStack");

new EKSStack(app,'EKSStack',{
    vpc: vpcStack.vpc,
    rdsSG: rdsStack.rdsSG
});

app.synth();