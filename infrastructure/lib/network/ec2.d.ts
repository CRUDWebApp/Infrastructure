import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
export interface EC2ConstructProps {
    vpc: ec2.IVpc;
}
export declare class EC2Construct extends Construct {
    readonly instance1: ec2.Instance;
    readonly instance2: ec2.Instance;
    readonly securityGroup: ec2.SecurityGroup;
    constructor(scope: Construct, id: string, props: EC2ConstructProps);
}
