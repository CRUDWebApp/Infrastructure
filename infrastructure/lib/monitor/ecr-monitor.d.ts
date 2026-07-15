import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
export interface ECRMonitorProps {
    repositoryName: string;
}
export declare function ECRMonitorCreate(props: ECRMonitorProps): cloudwatch.IWidget[];
