import * as cdk from 'aws-cdk-lib'
import * as iam from 'aws-cdk-lib/aws-iam';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { KubectlV35Layer } from '@aws-cdk/lambda-layer-kubectl-v35';
export interface EKSProps {
    vpc: ec2.IVpc;
    rdsSG: ec2.ISecurityGroup;
}

export class EKSConstruct extends Construct {
    // public readonly eks: eks.Cluster;
    constructor(scope: Construct, id: string, props: EKSProps){
        super(scope, id)

        const eksnodeSG = new ec2.SecurityGroup(this, 'eksnodeSG',{
            vpc: props.vpc,
        });

        props.rdsSG.addIngressRule(eksnodeSG, ec2.Port.tcp(5432));

        const cluster = new eks.Cluster(this, 'EksCluster', {
            version: eks.KubernetesVersion.V1_35,

            kubectlLayer: new KubectlV35Layer(this,'kubectl'),

            vpc: props.vpc,

            defaultCapacity: 0,

            endpointAccess: eks.EndpointAccess.PRIVATE,

            securityGroup: eksnodeSG,

            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        cluster.addNodegroupCapacity('NodeGroup', {
            instanceTypes: [new ec2.InstanceType('t3.small')],

            minSize: 1,

            desiredSize: 2,

            maxSize: 3
        });
    }
}