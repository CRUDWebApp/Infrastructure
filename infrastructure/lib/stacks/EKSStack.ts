import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { EKSConstruct } from "../Cluster/EKS";
import { Construct } from "constructs";

export interface EKSStackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
    rdsSG: ec2.ISecurityGroup;
}

export class EKSStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: EKSStackProps){
        super(scope,id)
        new EKSConstruct(this, 'EKSStack',{
            vpc: props.vpc,
            rdsSG: props.rdsSG
        });
    }
}


