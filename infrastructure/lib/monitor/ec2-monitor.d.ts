import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
export interface EC2MonitorProps {
    instanceId: string;
}
export declare function EC2MonitorCreate(props: EC2MonitorProps): cloudwatch.IWidget[];
