import * as cdk from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";

export interface EC2MonitorProps {
    instanceId: string;
}

export function EC2MonitorCreate(props: EC2MonitorProps): cloudwatch.IWidget[] {
    const CPU = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "CPUUltilization",
        dimensionsMap: {
            InstanceId: props.instanceId,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const NetworkInbound = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "NetworkIn",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const NetworkOutbound = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "NetworkOut",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const Status = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "StatusCheckFailed",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: cloudwatch.Stats.MAXIMUM,
        period: cdk.Duration.minutes(5)
    });
    return [
        new cloudwatch.GraphWidget({
            title: "EC2-CPU",
            left: [CPU]
        }),

        new cloudwatch.GraphWidget({
            title: "EC2-Network",
            left: [NetworkInbound, NetworkOutbound]
        }),

        new cloudwatch.GraphWidget({
            title: "EC2-Status",
            left: [Status]
        }),

    ];
}