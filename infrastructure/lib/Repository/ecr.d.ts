import * as ecr from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";
export declare class ECRConstruct extends Construct {
    readonly repository: ecr.Repository;
    constructor(scope: Construct, id: string);
}
