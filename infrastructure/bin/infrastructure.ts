import * as cdk from "aws-cdk-lib";

import { VPCStack } from "../lib/stacks/VPCStack";
import { ECRStack } from "../lib/stacks/ECRStack";
import { RDSStack } from "../lib/stacks/RDSStack";
import { EKSStack } from "../lib/stacks/EKSStack";
// import { Route53Stack } from "../lib/stacks/Route53Stack";
import { env } from "../lib/variables";
// import { S3Stack } from "../lib/stacks/S3Stack";
// import { CloudFrontStack } from "../lib/stacks/CloudFrontStack";
// import { FrontendStack } from "../lib/stacks/FrontendStack";

const app = new cdk.App();

// const frontendStack = new FrontendStack(app,'FrontendStack',{
//     env
// });
//  new Route53Stack(app, 'Route53Stack', {
//     env,
//     distribution: frontendStack.distribution
// }) 

const vpcStack = new VPCStack(app, "VPCStack",{
    env
});

const eksStack =  new EKSStack(app, 'EKSStack', {
    env,
    vpc: vpcStack.vpc
});


new RDSStack(app, "RDSStack", {
    env,
    vpc: vpcStack.vpc,
});

new ECRStack(app, "ECRStack",{
    env
});

// app.synth();
