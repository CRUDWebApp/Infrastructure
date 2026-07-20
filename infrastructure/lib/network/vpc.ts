import * as cdk from "aws-cdk-lib"
import { Values } from "aws-cdk-lib/aws-cloudwatch";
import * as ec2 from "aws-cdk-lib/aws-ec2"
import { Construct } from "constructs"

export interface VPCConstructProps {
    VPCName: string;
}

export class VPCConstruct extends Construct {
    public readonly vpc: ec2.Vpc;
    constructor(scope: Construct, id: string, props: VPCConstructProps) {
        super(scope, id);

        this.vpc = new ec2.Vpc(this, 'WebApp_VPC', {
            vpcName: props.VPCName,
            ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
            natGateways: 0,
            maxAzs: 2,
            subnetConfiguration: [
                {
                    name: 'eks-subnet',
                    subnetType: ec2.SubnetType.PUBLIC,
                    cidrMask: 24,
                    mapPublicIpOnLaunch: true,
                    
                },
                // {
                //     name: 'eks-subnet',
                //     subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
                //     cidrMask: 24,
                // },
                {
                    name: 'rds-subnet',
                    subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
                    cidrMask: 24,
                }
            ],
            enableDnsHostnames: true,
            enableDnsSupport: true,
        });

        const vpceSecurityGroup = new ec2.SecurityGroup(this, 'VpceSg', {
            vpc: this.vpc,
            allowAllOutbound: true,
            description: 'Security group for VPC Endpoints',
        });
        vpceSecurityGroup.addIngressRule(
            ec2.Peer.ipv4(this.vpc.vpcCidrBlock),
            ec2.Port.tcp(443),
            'Allow HTTPS traffic from within the VPC'
        );


        cdk.Tags.of(this.vpc).add('Environment', 'test');
        cdk.Tags.of(this.vpc).add('Project','testing')

        // need tag if use nlb
        this.vpc.publicSubnets.forEach(subnet => {
            cdk.Tags.of(subnet).add('kubernetes.io/role/elb', '1');
        });

        // this.vpc.isolatedSubnets.forEach(subnet => {
        //     cdk.Tags.of(subnet).add('kubernetes.io/role/internal-elb', '1');
        // });





        const outputs = [
            {exportName: 'vpcId', value: this.vpc.vpcId},
            {exportName: 'VPCPublicSubnetIds', value: this.vpc.publicSubnets.map(s => s.subnetId).join(',')},
            {exportName: 'VPCPrivateSubnetIds', value: this.vpc.isolatedSubnets.map(s => s.subnetId).join(",")},
            {exportName: 'VPCAZ', value: this.vpc.availabilityZones.join(",")},
        ]


        outputs.forEach((item) => {
            new cdk.CfnOutput(this, `${item.exportName}`,{
                value: item.value,
                exportName: item.exportName
            })
        })
    }
}