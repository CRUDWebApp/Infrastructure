import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from 'aws-cdk-lib/aws-eks'
import * as cdk from 'aws-cdk-lib';
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";

export interface RDSConstructProps {
    vpc: ec2.IVpc;
    cluster: eks.ICluster
}

export class RDSConstruct extends Construct {

    public readonly database: rds.DatabaseInstance;
    public readonly secret: secretsmanager.ISecret;
    public readonly rdsSecurityGroup: ec2.SecurityGroup;

    constructor(scope: Construct, id: string, props: RDSConstructProps) {
        super(scope, id);

        this.rdsSecurityGroup = new ec2.SecurityGroup(this, "RDSSecurityGroup", {
            vpc: props.vpc,
            allowAllOutbound: true
        });

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
                subnetGroupName: 'rds-subnet'
            },

            credentials: rds.Credentials.fromSecret(credentials),
            
            databaseName: "webapp",

            instanceType: ec2.InstanceType.of(
                ec2.InstanceClass.T3,
                ec2.InstanceSize.MICRO
            ),

            allocatedStorage: 20,

            storageType: rds.StorageType.GP3,

            multiAz: false,

            publiclyAccessible: false,

            securityGroups: [this.rdsSecurityGroup],

            deletionProtection: false,

            deleteAutomatedBackups: true,

            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        this.database.connections.allowFrom(
            props.cluster,
            ec2.Port.tcp(5432),
            "Allow EKS Cluster to connect to RDS",
        )

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