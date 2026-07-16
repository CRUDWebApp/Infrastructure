import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import {AutoScalingGroup} from 'aws-cdk-lib/aws-autoscaling'
import { Construct } from "constructs";

import { ALBConstruct } from "../network/alb";

export interface ALBStackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
    AutoScalingGroup: AutoScalingGroup;
}

export class ALBStack extends cdk.Stack {

    public readonly alb: elbv2.ApplicationLoadBalancer;

    constructor(scope: Construct, id: string, props: ALBStackProps) {

        super(scope, id, props);

        const albConstruct = new ALBConstruct(this, "ALBConstruct", {
            vpc: props.vpc,
            AutoScalingGroup: props.AutoScalingGroup
        });

        this.alb = albConstruct.alb;

        new cdk.CfnOutput(this, "ALBURL", {
            value: `http://${this.alb.loadBalancerDnsName}`,
        });
    }
}