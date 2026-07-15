import { Construct } from "constructs";
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
export interface Route53Props {
    hostedZoneName: string;
    recordName: string;
    distribution: cloudfront.Distribution;
}
export declare class Route53Construct extends Construct {
    constructor(scope: Construct, id: string, props: Route53Props);
}
