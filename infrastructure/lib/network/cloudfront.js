"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFrontConstruct = void 0;
const constructs_1 = require("constructs");
const cdk = __importStar(require("aws-cdk-lib"));
const cloudfront = __importStar(require("aws-cdk-lib/aws-cloudfront"));
const origins = __importStar(require("aws-cdk-lib/aws-cloudfront-origins"));
class CloudFrontConstruct extends constructs_1.Construct {
    distribution;
    constructor(scope, id, props) {
        super(scope, id);
        this.distribution = new cloudfront.Distribution(this, "Distribution", {
            defaultRootObject: 'index.html',
            defaultBehavior: {
                origin: origins.S3BucketOrigin.withOriginAccessControl(props.bucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            },
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html'
                },
                {
                    httpStatus: 404,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html'
                },
            ]
        });
        new cdk.CfnOutput(this, "CloudFrontURL", {
            value: "https://" +
                this.distribution.distributionDomainName
        });
    }
}
exports.CloudFrontConstruct = CloudFrontConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkZnJvbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBQ3ZDLGlEQUFrQztBQUNsQyx1RUFBeUQ7QUFDekQsNEVBQThEO0FBTzlELE1BQWEsbUJBQW9CLFNBQVEsc0JBQVM7SUFDOUIsWUFBWSxDQUEwQjtJQUV0RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNsRSxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLGVBQWUsRUFBRTtnQkFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNwRSxvQkFBb0IsRUFBRSxVQUFVLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCO2FBQzFFO1lBQ0QsY0FBYyxFQUFFO2dCQUNaO29CQUNJLFVBQVUsRUFBQyxHQUFHO29CQUNkLGtCQUFrQixFQUFFLEdBQUc7b0JBQ3ZCLGdCQUFnQixFQUFDLGFBQWE7aUJBQ2pDO2dCQUNEO29CQUNJLFVBQVUsRUFBQyxHQUFHO29CQUNkLGtCQUFrQixFQUFFLEdBQUc7b0JBQ3ZCLGdCQUFnQixFQUFDLGFBQWE7aUJBQ2pDO2FBQ0o7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNyQyxLQUFLLEVBQ0QsVUFBVTtnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQjtTQUMvQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFoQ0Qsa0RBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYidcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuaW1wb3J0ICogYXMgb3JpZ2lucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJztcbmltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRGcm9udFByb3BzIHtcbiAgICBidWNrZXQ6IHMzLkJ1Y2tldDtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkRnJvbnRDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3R7XG4gICAgcHVibGljIHJlYWRvbmx5IGRpc3RyaWJ1dGlvbjogY2xvdWRmcm9udC5EaXN0cmlidXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ2xvdWRGcm9udFByb3BzKXtcbiAgICAgICAgc3VwZXIoc2NvcGUsaWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kaXN0cmlidXRpb24gPSBuZXcgY2xvdWRmcm9udC5EaXN0cmlidXRpb24odGhpcywgXCJEaXN0cmlidXRpb25cIiwge1xuICAgICAgICAgICAgZGVmYXVsdFJvb3RPYmplY3Q6ICdpbmRleC5odG1sJyxcbiAgICAgICAgICAgIGRlZmF1bHRCZWhhdmlvcjoge1xuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2lucy5TM0J1Y2tldE9yaWdpbi53aXRoT3JpZ2luQWNjZXNzQ29udHJvbChwcm9wcy5idWNrZXQpLFxuICAgICAgICAgICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZGZyb250LlZpZXdlclByb3RvY29sUG9saWN5LlJFRElSRUNUX1RPX0hUVFBTXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JSZXNwb25zZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBTdGF0dXM6NDAzLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUh0dHBTdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDonL2luZGV4Lmh0bWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBTdGF0dXM6NDA0LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUh0dHBTdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDonL2luZGV4Lmh0bWwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJDbG91ZEZyb250VVJMXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9cIiArXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRpb24uZGlzdHJpYnV0aW9uRG9tYWluTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG59Il19