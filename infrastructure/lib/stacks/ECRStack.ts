import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { ECRConstruct } from "../Repository/ecr";

export class ECRStack extends cdk.Stack {

    public readonly repositoryName: string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const repo = new ECRConstruct(this, "ECR");

        this.repositoryName = repo.repository.repositoryName;
    }
}