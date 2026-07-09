import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as cdk from 'aws-cdk-lib';
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";

export interface RDSConstructProps {
    vpc: ec2.IVpc;
    backendSecurityGroup: ec2.ISecurityGroup;
}

export class RDSConstruct extends Construct {

    public readonly database: rds.DatabaseInstance;

    public readonly secret: secretsmanager.ISecret;

    constructor(scope: Construct, id: string, props: RDSConstructProps) {
        super(scope, id);

        const rdsSecurityGroup = new ec2.SecurityGroup(this, "RDSSecurityGroup", {
            vpc: props.vpc,
            allowAllOutbound: true
        });

        rdsSecurityGroup.addIngressRule(
            props.backendSecurityGroup,
            ec2.Port.tcp(5432),
            "Allow PostgreSQL from Backend"
        );

        const credentials = new rds.DatabaseSecret(this, "DatabaseSecret", {
            username: "postgres"
        });

        this.secret = credentials;

        this.database = new rds.DatabaseInstance(this, "PostgresDatabase", {

            engine: rds.DatabaseInstanceEngine.postgres({
                version: rds.PostgresEngineVersion.VER_17
            }),

            vpc: props.vpc,

            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS
            },

            credentials: rds.Credentials.fromSecret(credentials),

            databaseName: "webapp",

            instanceType: ec2.InstanceType.of(
                ec2.InstanceClass.T4G,
                ec2.InstanceSize.MICRO
            ),

            allocatedStorage: 20,

            storageType: rds.StorageType.GP3,

            multiAz: false,

            publiclyAccessible: false,

            securityGroups: [rdsSecurityGroup],

            deletionProtection: false,

            deleteAutomatedBackups: true,

            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        new cdk.CfnOutput(this, "DatabaseEndpoint", {
            value: this.database.dbInstanceEndpointAddress
        });

        new cdk.CfnOutput(this, "DatabasePort", {
            value: this.database.dbInstanceEndpointPort
        });

        new cdk.CfnOutput(this, "DatabaseSecretArn", {
            value: this.secret.secretArn
        });
    }
}