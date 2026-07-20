import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { EKSConstruct } from "../Cluster/eks";
import { Construct } from "constructs";

export interface EKSStackProps extends cdk.StackProps {
    vpc: ec2.IVpc;
}

export class EKSStack extends cdk.Stack {
    public readonly cluster;
    constructor(scope: Construct, id: string, props: EKSStackProps){
        super(scope,id)
        const eks = new EKSConstruct(this, 'EKSStack',{
            vpc: props.vpc,
            clustername: 'EKSCluster'
        });
        this.cluster = eks.cluster;
    }
}


