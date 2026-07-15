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
exports.EC2Construct = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const iam = __importStar(require("aws-cdk-lib/aws-iam"));
const fs = __importStar(require("fs"));
const constructs_1 = require("constructs");
class EC2Construct extends constructs_1.Construct {
    instance1;
    instance2;
    securityGroup;
    constructor(scope, id, props) {
        super(scope, id);
        // security group
        const SecurityGroup = new ec2.SecurityGroup(this, 'EC2SecurityGroup', {
            vpc: props.vpc,
            allowAllOutbound: true,
            securityGroupName: 'EC2-Security-Group'
        });
        //SSH
        SecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(6443), 'Allow k3s');
        SecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH');
        SecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(30080), "K3s NodePort");
        const keypair = new ec2.CfnKeyPair(this, 'KeyPair', {
            keyName: 'ec2-key',
            publicKeyMaterial: fs.readFileSync('ec2-key.pub', 'utf-8')
        });
        const role = new iam.Role(this, "EC2Role", {
            assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
        });
        role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"));
        this.securityGroup = SecurityGroup;
        const publicSubnets = props.vpc.selectSubnets({
            subnetType: ec2.SubnetType.PUBLIC,
        }).subnets;
        //EC2 instance
        this.instance1 = new ec2.Instance(this, 'WebServerInstance1', {
            vpc: props.vpc,
            instanceType: new ec2.InstanceType('t3.small'),
            machineImage: ec2.MachineImage.latestAmazonLinux2023(),
            vpcSubnets: {
                subnets: [publicSubnets[0]],
            },
            securityGroup: SecurityGroup,
            keyName: keypair.keyName,
            role: role
        });
        this.instance2 = new ec2.Instance(this, 'WebServerInstance2', {
            vpc: props.vpc,
            instanceType: new ec2.InstanceType('t3.small'),
            machineImage: ec2.MachineImage.latestAmazonLinux2023(),
            vpcSubnets: {
                subnets: [publicSubnets[1]],
            },
            securityGroup: SecurityGroup,
            keyName: keypair.keyName,
            role: role
        });
        new cdk.CfnOutput(this, 'EC2-1PublicIP', {
            value: this.instance1.instancePublicIp,
            exportName: 'EC2-1PublicIP'
        });
        new cdk.CfnOutput(this, 'EC2-1ID', {
            value: this.instance1.instanceId,
            exportName: 'EC2-1ID'
        });
        new cdk.CfnOutput(this, 'EC2-2PublicIP', {
            value: this.instance2.instancePublicIp,
            exportName: 'EC2-2PublicIP'
        });
        new cdk.CfnOutput(this, 'EC2-2ID', {
            value: this.instance2.instanceId,
            exportName: 'EC2-2ID'
        });
    }
}
exports.EC2Construct = EC2Construct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUNuQyx5REFBMkM7QUFDM0MseURBQTJDO0FBQzNDLHVDQUF3QjtBQUV4QiwyQ0FBdUM7QUFNdkMsTUFBYSxZQUFhLFNBQVEsc0JBQVM7SUFDdkIsU0FBUyxDQUFlO0lBQ3hCLFNBQVMsQ0FBZTtJQUN4QixhQUFhLENBQW9CO0lBRWpELFlBQVksS0FBZ0IsRUFBRSxFQUFXLEVBQUUsS0FBd0I7UUFDL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVoQixpQkFBaUI7UUFDakIsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUNsRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLG9CQUFvQjtTQUMxQyxDQUFDLENBQUM7UUFFSCxLQUFLO1FBQ0wsYUFBYSxDQUFDLGNBQWMsQ0FDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ2xCLFdBQVcsQ0FDZCxDQUFDO1FBQ0YsYUFBYSxDQUFDLGNBQWMsQ0FDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ2hCLFdBQVcsQ0FDZCxDQUFDO1FBQ0YsYUFBYSxDQUFDLGNBQWMsQ0FDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ25CLGNBQWMsQ0FDakIsQ0FBQztR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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGVjMiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWMyJztcbmltcG9ydCAqIGFzIGlhbSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWlhbVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVDMkNvbnN0cnVjdFByb3BzIHtcbiAgICB2cGM6IGVjMi5JVnBjLFxufVxuXG5leHBvcnQgY2xhc3MgRUMyQ29uc3RydWN0IGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2UxOiBlYzIuSW5zdGFuY2U7XG4gICAgcHVibGljIHJlYWRvbmx5IGluc3RhbmNlMjogZWMyLkluc3RhbmNlO1xuICAgIHB1YmxpYyByZWFkb25seSBzZWN1cml0eUdyb3VwOiBlYzIuU2VjdXJpdHlHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiAgc3RyaW5nLCBwcm9wczogRUMyQ29uc3RydWN0UHJvcHMpe1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpXG5cbiAgICAgICAgLy8gc2VjdXJpdHkgZ3JvdXBcbiAgICAgICAgY29uc3QgU2VjdXJpdHlHcm91cCA9IG5ldyBlYzIuU2VjdXJpdHlHcm91cCh0aGlzLCAnRUMyU2VjdXJpdHlHcm91cCcsIHtcbiAgICAgICAgICAgIHZwYzogcHJvcHMudnBjLFxuICAgICAgICAgICAgYWxsb3dBbGxPdXRib3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBOYW1lOiAnRUMyLVNlY3VyaXR5LUdyb3VwJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1NTSFxuICAgICAgICBTZWN1cml0eUdyb3VwLmFkZEluZ3Jlc3NSdWxlKFxuICAgICAgICAgICAgZWMyLlBlZXIuYW55SXB2NCgpLFxuICAgICAgICAgICAgZWMyLlBvcnQudGNwKDY0NDMpLFxuICAgICAgICAgICAgJ0FsbG93IGszcydcbiAgICAgICAgKTtcbiAgICAgICAgU2VjdXJpdHlHcm91cC5hZGRJbmdyZXNzUnVsZShcbiAgICAgICAgICAgIGVjMi5QZWVyLmFueUlwdjQoKSxcbiAgICAgICAgICAgIGVjMi5Qb3J0LnRjcCgyMiksXG4gICAgICAgICAgICAnQWxsb3cgU1NIJ1xuICAgICAgICApO1xuICAgICAgICBTZWN1cml0eUdyb3VwLmFkZEluZ3Jlc3NSdWxlKFxuICAgICAgICAgICAgZWMyLlBlZXIuYW55SXB2NCgpLFxuICAgICAgICAgICAgZWMyLlBvcnQudGNwKDMwMDgwKSxcbiAgICAgICAgICAgIFwiSzNzIE5vZGVQb3J0XCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBrZXlwYWlyID0gbmV3IGVjMi5DZm5LZXlQYWlyKHRoaXMsICdLZXlQYWlyJywge1xuICAgICAgICAgICAga2V5TmFtZTogJ2VjMi1rZXknLFxuICAgICAgICAgICAgcHVibGljS2V5TWF0ZXJpYWw6IGZzLnJlYWRGaWxlU3luYygnZWMyLWtleS5wdWInLCd1dGYtOCcpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgcm9sZSA9IG5ldyBpYW0uUm9sZSh0aGlzLCBcIkVDMlJvbGVcIiwge1xuICAgICAgICAgICAgYXNzdW1lZEJ5OiBuZXcgaWFtLlNlcnZpY2VQcmluY2lwYWwoXCJlYzIuYW1hem9uYXdzLmNvbVwiKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm9sZS5hZGRNYW5hZ2VkUG9saWN5KFxuICAgICAgICAgICAgaWFtLk1hbmFnZWRQb2xpY3kuZnJvbUF3c01hbmFnZWRQb2xpY3lOYW1lKFxuICAgICAgICAgICAgICAgIFwiQW1hem9uU1NNTWFuYWdlZEluc3RhbmNlQ29yZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZWN1cml0eUdyb3VwID0gU2VjdXJpdHlHcm91cDtcbiAgICAgICAgY29uc3QgcHVibGljU3VibmV0cyA9IHByb3BzLnZwYy5zZWxlY3RTdWJuZXRzKHtcbiAgICAgICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBVQkxJQyxcbiAgICAgICAgfSkuc3VibmV0cztcblxuICAgICAgICAvL0VDMiBpbnN0YW5jZVxuICAgICAgICB0aGlzLmluc3RhbmNlMSA9IG5ldyBlYzIuSW5zdGFuY2UodGhpcywgJ1dlYlNlcnZlckluc3RhbmNlMScse1xuICAgICAgICAgICAgdnBjOiBwcm9wcy52cGMsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IG5ldyBlYzIuSW5zdGFuY2VUeXBlKCd0My5zbWFsbCcpLFxuICAgICAgICAgICAgbWFjaGluZUltYWdlOiBlYzIuTWFjaGluZUltYWdlLmxhdGVzdEFtYXpvbkxpbnV4MjAyMygpLFxuICAgICAgICAgICAgdnBjU3VibmV0czogXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VibmV0czogW3B1YmxpY1N1Ym5ldHNbMF1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXA6IFNlY3VyaXR5R3JvdXAsXG4gICAgICAgICAgICBrZXlOYW1lOiBrZXlwYWlyLmtleU5hbWUhLFxuICAgICAgICAgICAgcm9sZTogcm9sZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlMiA9IG5ldyBlYzIuSW5zdGFuY2UodGhpcywgJ1dlYlNlcnZlckluc3RhbmNlMicse1xuICAgICAgICAgICAgdnBjOiBwcm9wcy52cGMsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IG5ldyBlYzIuSW5zdGFuY2VUeXBlKCd0My5zbWFsbCcpLFxuICAgICAgICAgICAgbWFjaGluZUltYWdlOiBlYzIuTWFjaGluZUltYWdlLmxhdGVzdEFtYXpvbkxpbnV4MjAyMygpLFxuICAgICAgICAgICAgdnBjU3VibmV0czogXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VibmV0czogW3B1YmxpY1N1Ym5ldHNbMV1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXA6IFNlY3VyaXR5R3JvdXAsXG4gICAgICAgICAgICBrZXlOYW1lOiBrZXlwYWlyLmtleU5hbWUhLFxuICAgICAgICAgICAgcm9sZTogcm9sZVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdFQzItMVB1YmxpY0lQJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaW5zdGFuY2UxLmluc3RhbmNlUHVibGljSXAsXG4gICAgICAgICAgICBleHBvcnROYW1lOiAnRUMyLTFQdWJsaWNJUCdcbiAgICAgICAgfSk7XG4gICAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdFQzItMUlEJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaW5zdGFuY2UxLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBleHBvcnROYW1lOiAnRUMyLTFJRCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0VDMi0yUHVibGljSVAnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5pbnN0YW5jZTIuaW5zdGFuY2VQdWJsaWNJcCxcbiAgICAgICAgICAgIGV4cG9ydE5hbWU6ICdFQzItMlB1YmxpY0lQJ1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0VDMi0ySUQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5pbnN0YW5jZTIuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGV4cG9ydE5hbWU6ICdFQzItMklEJ1xuICAgICAgICB9KTsgXG4gICAgfVxufSJdfQ==