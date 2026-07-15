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
exports.CloudFrontStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const s3_1 = require("../Repository/s3");
const cloudfront_1 = require("../network/cloudfront");
class CloudFrontStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const s3 = new s3_1.S3Construct(this, 'S3', {
            BucketName: 's3bucket-test-27112005'
        });
        new cloudfront_1.CloudFrontConstruct(this, 'CloudFront', {
            bucket: s3.bucket
        });
    }
}
exports.CloudFrontStack = CloudFrontStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRGcm9udFN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRGcm9udFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUduQyx5Q0FBK0M7QUFDL0Msc0RBQTREO0FBRzVELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMxQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLE1BQU0sRUFBRSxHQUFHLElBQUksZ0JBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQ25DLFVBQVUsRUFBRSx3QkFBd0I7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFaRCwwQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuaW1wb3J0IHsgUzNDb25zdHJ1Y3QgfSBmcm9tICcuLi9SZXBvc2l0b3J5L3MzJztcbmltcG9ydCB7IENsb3VkRnJvbnRDb25zdHJ1Y3QgfSBmcm9tICcuLi9uZXR3b3JrL2Nsb3VkZnJvbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDbG91ZEZyb250U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2t7XG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcyl7XG4gICAgICAgIHN1cGVyKHNjb3BlLGlkLHByb3BzKTtcblxuICAgICAgICBjb25zdCBzMyA9IG5ldyBTM0NvbnN0cnVjdCh0aGlzLCAnUzMnLCB7XG4gICAgICAgICAgICBCdWNrZXROYW1lOiAnczNidWNrZXQtdGVzdC0yNzExMjAwNSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IENsb3VkRnJvbnRDb25zdHJ1Y3QodGhpcywgJ0Nsb3VkRnJvbnQnLCB7XG4gICAgICAgICAgICBidWNrZXQ6IHMzLmJ1Y2tldCAgIFxuICAgICAgICB9KTtcbiAgICB9XG59Il19