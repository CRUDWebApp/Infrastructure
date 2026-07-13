import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as targets from "aws-cdk-lib/aws-elasticloadbalancingv2-targets";

import { Construct } from "constructs";

export interface ALBProps {
    vpc: ec2.IVpc;
    instance: ec2.Instance;
}

export class ALBConstruct extends Construct {

    public readonly alb: elbv2.ApplicationLoadBalancer;

    constructor(scope: Construct, id: string, props: ALBProps) {

        super(scope, id);

        const albSecurityGroup = new ec2.SecurityGroup(this, "ALBSecurityGroup", {
            vpc: props.vpc,
            allowAllOutbound: true,
            description: "Security Group for Application Load Balancer",
        });

        albSecurityGroup.addIngressRule(
            ec2.Peer.anyIpv4(),
            ec2.Port.tcp(80),
            "Allow HTTP"
        );

        albSecurityGroup.addIngressRule(
            ec2.Peer.anyIpv4(),
            ec2.Port.tcp(443),
            "Allow HTTPS"
        );

        this.alb = new elbv2.ApplicationLoadBalancer(this, "ALB", {
            vpc: props.vpc,
            internetFacing: true,
            securityGroup: albSecurityGroup,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
        });


        const listener = this.alb.addListener("HttpListener", {
            port: 80,
            open: true,
        });

        listener.addTargets("BackendTargetGroup", {

            port: 30080,

            protocol: elbv2.ApplicationProtocol.HTTP,

            loadBalancingAlgorithmType: elbv2.TargetGroupLoadBalancingAlgorithmType.LEAST_OUTSTANDING_REQUESTS,

            targets: [
                new targets.InstanceTarget(props.instance),
            ],

            healthCheck: {
                path: "/health",
                healthyHttpCodes: "200",
                interval: cdk.Duration.seconds(30),
                timeout: cdk.Duration.seconds(5),
                healthyThresholdCount: 2,
                unhealthyThresholdCount: 2,
            },
        });

        new cdk.CfnOutput(this, "ALBDNSName", {
            value: this.alb.loadBalancerDnsName,
        });
    }
}