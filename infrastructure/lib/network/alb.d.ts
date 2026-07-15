import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { Construct } from "constructs";
export interface ALBProps {
    vpc: ec2.IVpc;
    instance1: ec2.Instance;
    instance2: ec2.Instance;
}
export declare class ALBConstruct extends Construct {
    readonly alb: elbv2.ApplicationLoadBalancer;
    constructor(scope: Construct, id: string, props: ALBProps);
}
