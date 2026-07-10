import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from "aws-cdk-lib/aws-iam";
import * as fs from 'fs'

import { Construct } from 'constructs';

export interface EC2ConstructProps {
    vpc: ec2.IVpc,
}

export class EC2Construct extends Construct {
    public readonly instance: ec2.Instance;
    public readonly securityGroup: ec2.SecurityGroup;

    constructor(scope: Construct, id:  string, props: EC2ConstructProps){
        super(scope, id)

        // security group
        const SecurityGroup = new ec2.SecurityGroup(this, 'EC2SecurityGroup', {
            vpc: props.vpc,
            allowAllOutbound: true,
            securityGroupName: 'EC2-Security-Group'
        });

        //SSH
        SecurityGroup.addIngressRule(
            ec2.Peer.anyIpv4(),
            ec2.Port.tcp(6443),
            'Allow k3s'
        );
        SecurityGroup.addIngressRule(
            ec2.Peer.anyIpv4(),
            ec2.Port.tcp(22),
            'Allow SSH'
        );
        SecurityGroup.addIngressRule(
            ec2.Peer.anyIpv4(),
            ec2.Port.tcp(30080),
            "K3s NodePort"
        );

        const keypair = new ec2.CfnKeyPair(this, 'KeyPair', {
            keyName: 'ec2-key',
            publicKeyMaterial: fs.readFileSync('ec2-key.pub','utf-8')
        })

        const role = new iam.Role(this, "EC2Role", {
            assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
        });

        role.addManagedPolicy(
            iam.ManagedPolicy.fromAwsManagedPolicyName(
                "AmazonSSMManagedInstanceCore"
            )
        );

        this.securityGroup = SecurityGroup;

        //EC2 instance
        this.instance = new ec2.Instance(this, 'WebServerInstance',{
            vpc: props.vpc,
            instanceType: new ec2.InstanceType('t3.small'),
            machineImage: ec2.MachineImage.latestAmazonLinux2023(),
            vpcSubnets: 
            {
                subnetType: ec2.SubnetType.PUBLIC
            },
            securityGroup: SecurityGroup,
            keyName: keypair.keyName!,
            role: role
        });


        new cdk.CfnOutput(this, 'EC2PublicIP', {
            value: this.instance.instancePublicIp,
            exportName: 'EC2PublicIP'
        });
        new cdk.CfnOutput(this, 'EC2ID', {
            value: this.instance.instanceId,
            exportName: 'EC2ID'
        }); 
    }
}