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
exports.VPCConstruct = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const constructs_1 = require("constructs");
class VPCConstruct extends constructs_1.Construct {
    vpc;
    constructor(scope, id, props) {
        super(scope, id);
        this.vpc = new ec2.Vpc(this, 'WebApp_VPC', {
            vpcName: props.VPCName,
            ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
            natGateways: 0,
            maxAzs: 2,
            subnetConfiguration: [
                {
                    name: 'public_subnet',
                    subnetType: ec2.SubnetType.PUBLIC,
                    cidrMask: 24
                },
                {
                    name: 'private-subnet',
                    subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
                    cidrMask: 24,
                },
                {
                    name: 'isolated-subnet',
                    subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
                    cidrMask: 24,
                }
            ],
            enableDnsHostnames: true,
            enableDnsSupport: true,
        });
        cdk.Tags.of(this.vpc).add('Environment', 'test');
        cdk.Tags.of(this.vpc).add('Project', 'testing');
        new cdk.CfnOutput(this, 'vpcId', {
            value: this.vpc.vpcId,
            exportName: 'vpcID'
        });
        new cdk.CfnOutput(this, 'VPCPublicSubnetIds', {
            value: this.vpc.publicSubnets.map(s => s.subnetId).join(','),
        });
        new cdk.CfnOutput(this, 'VPCPrivateSubnetIds', {
            value: this.vpc.privateSubnets.map(s => s.subnetId).join(','),
        });
        new cdk.CfnOutput(this, 'VPCAZ', {
            value: cdk.Fn.join(', ', this.vpc.availabilityZones),
            exportName: 'VPCAZ'
        });
    }
}
exports.VPCConstruct = VPCConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFrQztBQUNsQyx5REFBMEM7QUFDMUMsMkNBQXNDO0FBTXRDLE1BQWEsWUFBYSxTQUFRLHNCQUFTO0lBQ3ZCLEdBQUcsQ0FBVTtJQUM3QixZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXdCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN2QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNoRCxXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsbUJBQW1CLEVBQUU7Z0JBQ2pCO29CQUNJLElBQUksRUFBRSxlQUFlO29CQUNyQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNO29CQUNqQyxRQUFRLEVBQUUsRUFBRTtpQkFDZjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUI7b0JBQzlDLFFBQVEsRUFBRSxFQUFFO2lCQUNmO2dCQUNEO29CQUNJLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtvQkFDM0MsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7YUFDSjtZQUNELGtCQUFrQixFQUFFLElBQUk7WUFDeEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsQ0FBQTtRQUU5QyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRTtZQUM1QixLQUFLLEVBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxPQUFPO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDMUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzdCLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxVQUFVLEVBQUUsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFsREQsb0NBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYlwiXG5pbXBvcnQgKiBhcyBlYzIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1lYzJcIlxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFZQQ0NvbnN0cnVjdFByb3BzIHtcbiAgICBWUENOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBWUENDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAgIHB1YmxpYyByZWFkb25seSB2cGM6IGVjMi5WcGM7XG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZQQ0NvbnN0cnVjdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgdGhpcy52cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCAnV2ViQXBwX1ZQQycsIHtcbiAgICAgICAgICAgIHZwY05hbWU6IHByb3BzLlZQQ05hbWUsXG4gICAgICAgICAgICBpcEFkZHJlc3NlczogZWMyLklwQWRkcmVzc2VzLmNpZHIoJzEwLjAuMC4wLzE2JyksXG4gICAgICAgICAgICBuYXRHYXRld2F5czogMCxcbiAgICAgICAgICAgIG1heEF6czogMixcbiAgICAgICAgICAgIHN1Ym5ldENvbmZpZ3VyYXRpb246IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwdWJsaWNfc3VibmV0JyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0VHlwZTogZWMyLlN1Ym5ldFR5cGUuUFVCTElDLFxuICAgICAgICAgICAgICAgICAgICBjaWRyTWFzazogMjRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaXZhdGUtc3VibmV0JyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0VHlwZTogZWMyLlN1Ym5ldFR5cGUuUFJJVkFURV9XSVRIX0VHUkVTUyxcbiAgICAgICAgICAgICAgICAgICAgY2lkck1hc2s6IDI0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaXNvbGF0ZWQtc3VibmV0JyxcbiAgICAgICAgICAgICAgICAgICAgc3VibmV0VHlwZTogZWMyLlN1Ym5ldFR5cGUuUFJJVkFURV9JU09MQVRFRCxcbiAgICAgICAgICAgICAgICAgICAgY2lkck1hc2s6IDI0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlbmFibGVEbnNIb3N0bmFtZXM6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVEbnNTdXBwb3J0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY2RrLlRhZ3Mub2YodGhpcy52cGMpLmFkZCgnRW52aXJvbm1lbnQnLCAndGVzdCcpO1xuICAgICAgICBjZGsuVGFncy5vZih0aGlzLnZwYykuYWRkKCdQcm9qZWN0JywndGVzdGluZycpXG5cbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywndnBjSWQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogIHRoaXMudnBjLnZwY0lkLFxuICAgICAgICAgICAgZXhwb3J0TmFtZTogJ3ZwY0lEJ1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnVlBDUHVibGljU3VibmV0SWRzJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudnBjLnB1YmxpY1N1Ym5ldHMubWFwKHMgPT4gcy5zdWJuZXRJZCkuam9pbignLCcpLFxuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnVlBDUHJpdmF0ZVN1Ym5ldElkcycsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZwYy5wcml2YXRlU3VibmV0cy5tYXAocyA9PiBzLnN1Ym5ldElkKS5qb2luKCcsJyksXG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnVlBDQVonLCB7XG4gICAgICAgICAgICB2YWx1ZTogY2RrLkZuLmpvaW4oJywgJywgdGhpcy52cGMuYXZhaWxhYmlsaXR5Wm9uZXMpLFxuICAgICAgICAgICAgZXhwb3J0TmFtZTogJ1ZQQ0FaJ1xuICAgICAgICB9KTtcbiAgICB9XG59Il19