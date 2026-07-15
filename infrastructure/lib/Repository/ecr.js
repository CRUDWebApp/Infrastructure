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
exports.ECRConstruct = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const ecr = __importStar(require("aws-cdk-lib/aws-ecr"));
const constructs_1 = require("constructs");
class ECRConstruct extends constructs_1.Construct {
    repository;
    constructor(scope, id) {
        super(scope, id);
        this.repository = new ecr.Repository(this, 'BackendRepository', {
            repositoryName: 'backendrepository',
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            emptyOnDelete: true
        });
        new cdk.CfnOutput(this, 'ECRRepositoryUri', {
            value: this.repository.registryUri,
            exportName: "ECRRepositoryUri"
        });
        new cdk.CfnOutput(this, 'ECRRepositoryName', {
            value: this.repository.repositoryName,
            exportName: 'ECRRepositoryName',
        });
        new cdk.CfnOutput(this, "ECRRegion", {
            value: cdk.Stack.of(this).region
        });
    }
}
exports.ECRConstruct = ECRConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWNyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUNuQyx5REFBMkM7QUFDM0MsMkNBQXVDO0FBRXZDLE1BQWEsWUFBYSxTQUFRLHNCQUFTO0lBQ3ZCLFVBQVUsQ0FBaUI7SUFFM0MsWUFBWSxLQUFnQixFQUFFLEVBQVU7UUFDcEMsS0FBSyxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUM7WUFDM0QsY0FBYyxFQUFFLG1CQUFtQjtZQUNuQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ3hDLGFBQWEsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1NBQ2pDLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYztZQUNyQyxVQUFVLEVBQUUsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ2pDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO1NBQ25DLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQXRCRCxvQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgKiBhcyBlY3IgZnJvbSBcImF3cy1jZGstbGliL2F3cy1lY3JcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBFQ1JDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAgIHB1YmxpYyByZWFkb25seSByZXBvc2l0b3J5OiBlY3IuUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsaWQpO1xuICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSBuZXcgZWNyLlJlcG9zaXRvcnkodGhpcywgJ0JhY2tlbmRSZXBvc2l0b3J5Jyx7XG4gICAgICAgICAgICByZXBvc2l0b3J5TmFtZTogJ2JhY2tlbmRyZXBvc2l0b3J5JyxcbiAgICAgICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG4gICAgICAgICAgICBlbXB0eU9uRGVsZXRlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRUNSUmVwb3NpdG9yeVVyaScsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJlcG9zaXRvcnkucmVnaXN0cnlVcmksXG4gICAgICAgICAgICBleHBvcnROYW1lOiBcIkVDUlJlcG9zaXRvcnlVcmlcIlxuICAgICAgICB9KTtcbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0VDUlJlcG9zaXRvcnlOYW1lJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucmVwb3NpdG9yeS5yZXBvc2l0b3J5TmFtZSxcbiAgICAgICAgICAgIGV4cG9ydE5hbWU6ICdFQ1JSZXBvc2l0b3J5TmFtZScsXG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkVDUlJlZ2lvblwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogY2RrLlN0YWNrLm9mKHRoaXMpLnJlZ2lvblxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=