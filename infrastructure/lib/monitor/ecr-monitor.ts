import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export interface ECRMonitorProps {
    repositoryName: string;
}

export function ECRMonitorCreate(props: ECRMonitorProps): cloudwatch.IWidget[]{
    const ImageCount = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "ImageCount",
        dimensionsMap: {
            RepositoryName: props.repositoryName,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });

    const Storage = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "StorageBytes",
        dimensionsMap: {
            RepositoryName: props.repositoryName,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });

    return [
        new cloudwatch.GraphWidget({
            title: "Repository Images",
            left: [ImageCount]
        }),
        new cloudwatch.GraphWidget({
            title: "Storage Size",
            left: [Storage]
        })
    ]

}