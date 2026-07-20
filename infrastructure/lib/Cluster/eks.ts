    import * as cdk from 'aws-cdk-lib'
    import * as eks from 'aws-cdk-lib/aws-eks';
    import * as ec2 from 'aws-cdk-lib/aws-ec2';
    import * as fs from 'fs';
    import { KubectlV35Layer } from '@aws-cdk/lambda-layer-kubectl-v35';
    import { Construct } from 'constructs';
    export interface EKSProps {
        vpc: ec2.IVpc;
        clustername: string;
    }

    export class EKSConstruct extends Construct {
        public readonly cluster: eks.Cluster;
        constructor(scope: Construct, id: string, props: EKSProps){
            super(scope, id)


            this.cluster = new eks.Cluster(this, 'EksCluster', {
                version: eks.KubernetesVersion.V1_35,
                clusterName: props.clustername,
                vpc: props.vpc,
                vpcSubnets: [{
                    subnetGroupName: 'eks-subnet',
                }],
                
                defaultCapacityType: eks.DefaultCapacityType.NODEGROUP,
                defaultCapacity: 0,

                endpointAccess: eks.EndpointAccess.PUBLIC_AND_PRIVATE,

                removalPolicy: cdk.RemovalPolicy.DESTROY,
                kubectlLayer: new KubectlV35Layer(this, 'kubectl'),

                authenticationMode: eks.AuthenticationMode.API,


            });
            const myCliPrincipalArn =  fs.readFileSync('Arn.txt','utf-8')

            this.cluster.grantAccess('CliAdminAccess', myCliPrincipalArn, [
                eks.AccessPolicy.fromAccessPolicyName('AmazonEKSClusterAdminPolicy', {
                    accessScopeType: eks.AccessScopeType.CLUSTER,
                }),
            ]);
            

            this.cluster.addNodegroupCapacity('NodeGroup', {
                instanceTypes: [new ec2.InstanceType('t3.small')],

                subnets: {
                    subnetGroupName: 'eks-subnet'
                },

                minSize: 1,

                desiredSize: 2,

                maxSize: 3,
                
            });

            new cdk.CfnOutput(this, 'EKSClusterName', {
                value: this.cluster.clusterName,
                exportName: 'EKSClusterName'
            });

            new cdk.CfnOutput(this, 'EKSNodeGroup', {
                value: eks.Nodegroup.name,
                exportName: 'EKSNodeGroup'
            })

        }
    }