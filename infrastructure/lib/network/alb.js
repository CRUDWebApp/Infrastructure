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
exports.ALBConstruct = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const elbv2 = __importStar(require("aws-cdk-lib/aws-elasticloadbalancingv2"));
const targets = __importStar(require("aws-cdk-lib/aws-elasticloadbalancingv2-targets"));
const constructs_1 = require("constructs");
class ALBConstruct extends constructs_1.Construct {
    alb;
    constructor(scope, id, props) {
        super(scope, id);
        const albSecurityGroup = new ec2.SecurityGroup(this, "ALBSecurityGroup", {
            vpc: props.vpc,
            allowAllOutbound: true,
            description: "Security Group for Application Load Balancer",
        });
        albSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), "Allow HTTP");
        albSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), "Allow HTTPS");
        this.alb = new elbv2.ApplicationLoadBalancer(this, "ALB", {
            vpc: props.vpc,
            internetFacing: true,
            securityGroup: albSecurityGroup,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PUBLIC,
            },
        });
        const listener = this.alb.addListener("HttpListener", {
            port: 80,
            open: true,
        });
        listener.addTargets("BackendTargetGroup", {
            port: 30080,
            protocol: elbv2.ApplicationProtocol.HTTP,
            loadBalancingAlgorithmType: elbv2.TargetGroupLoadBalancingAlgorithmType.LEAST_OUTSTANDING_REQUESTS,
            targets: [
                new targets.InstanceTarget(props.instance1),
                new targets.InstanceTarget(props.instance2),
            ],
            healthCheck: {
                path: "/health",
                healthyHttpCodes: "200",
                interval: cdk.Duration.seconds(30),
                timeout: cdk.Duration.seconds(5),
                healthyThresholdCount: 2,
                unhealthyThresholdCount: 2,
            },
        });
        new cdk.CfnOutput(this, "ALBDNSName", {
            value: this.alb.loadBalancerDnsName,
        });
    }
}
exports.ALBConstruct = ALBConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUNuQyx5REFBMkM7QUFDM0MsOEVBQWdFO0FBQ2hFLHdGQUEwRTtBQUUxRSwyQ0FBdUM7QUFRdkMsTUFBYSxZQUFhLFNBQVEsc0JBQVM7SUFFdkIsR0FBRyxDQUFnQztJQUVuRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWU7UUFFckQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDckUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixXQUFXLEVBQUUsOENBQThDO1NBQzlELENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGNBQWMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ2hCLFlBQVksQ0FDZixDQUFDO1FBRUYsZ0JBQWdCLENBQUMsY0FBYyxDQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDakIsYUFBYSxDQUNoQixDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ3RELEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGFBQWEsRUFBRSxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07YUFDcEM7U0FDSixDQUFDLENBQUM7UUFHSCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7WUFDbEQsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUU7WUFFdEMsSUFBSSxFQUFFLEtBQUs7WUFFWCxRQUFRLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUk7WUFFeEMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLDBCQUEwQjtZQUVsRyxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzNDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQzlDO1lBRUQsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxTQUFTO2dCQUNmLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3hCLHVCQUF1QixFQUFFLENBQUM7YUFDN0I7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7U0FDdEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBcEVELG9DQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCAqIGFzIGVjMiBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWVjMlwiO1xuaW1wb3J0ICogYXMgZWxidjIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1lbGFzdGljbG9hZGJhbGFuY2luZ3YyXCI7XG5pbXBvcnQgKiBhcyB0YXJnZXRzIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtZWxhc3RpY2xvYWRiYWxhbmNpbmd2Mi10YXJnZXRzXCI7XG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQUxCUHJvcHMge1xuICAgIHZwYzogZWMyLklWcGM7XG4gICAgaW5zdGFuY2UxOiBlYzIuSW5zdGFuY2U7XG4gICAgaW5zdGFuY2UyOiBlYzIuSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBBTEJDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGFsYjogZWxidjIuQXBwbGljYXRpb25Mb2FkQmFsYW5jZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQUxCUHJvcHMpIHtcblxuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IGFsYlNlY3VyaXR5R3JvdXAgPSBuZXcgZWMyLlNlY3VyaXR5R3JvdXAodGhpcywgXCJBTEJTZWN1cml0eUdyb3VwXCIsIHtcbiAgICAgICAgICAgIHZwYzogcHJvcHMudnBjLFxuICAgICAgICAgICAgYWxsb3dBbGxPdXRib3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNlY3VyaXR5IEdyb3VwIGZvciBBcHBsaWNhdGlvbiBMb2FkIEJhbGFuY2VyXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFsYlNlY3VyaXR5R3JvdXAuYWRkSW5ncmVzc1J1bGUoXG4gICAgICAgICAgICBlYzIuUGVlci5hbnlJcHY0KCksXG4gICAgICAgICAgICBlYzIuUG9ydC50Y3AoODApLFxuICAgICAgICAgICAgXCJBbGxvdyBIVFRQXCJcbiAgICAgICAgKTtcblxuICAgICAgICBhbGJTZWN1cml0eUdyb3VwLmFkZEluZ3Jlc3NSdWxlKFxuICAgICAgICAgICAgZWMyLlBlZXIuYW55SXB2NCgpLFxuICAgICAgICAgICAgZWMyLlBvcnQudGNwKDQ0MyksXG4gICAgICAgICAgICBcIkFsbG93IEhUVFBTXCJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFsYiA9IG5ldyBlbGJ2Mi5BcHBsaWNhdGlvbkxvYWRCYWxhbmNlcih0aGlzLCBcIkFMQlwiLCB7XG4gICAgICAgICAgICB2cGM6IHByb3BzLnZwYyxcbiAgICAgICAgICAgIGludGVybmV0RmFjaW5nOiB0cnVlLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cDogYWxiU2VjdXJpdHlHcm91cCxcbiAgICAgICAgICAgIHZwY1N1Ym5ldHM6IHtcbiAgICAgICAgICAgICAgICBzdWJuZXRUeXBlOiBlYzIuU3VibmV0VHlwZS5QVUJMSUMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5hbGIuYWRkTGlzdGVuZXIoXCJIdHRwTGlzdGVuZXJcIiwge1xuICAgICAgICAgICAgcG9ydDogODAsXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0ZW5lci5hZGRUYXJnZXRzKFwiQmFja2VuZFRhcmdldEdyb3VwXCIsIHtcblxuICAgICAgICAgICAgcG9ydDogMzAwODAsXG5cbiAgICAgICAgICAgIHByb3RvY29sOiBlbGJ2Mi5BcHBsaWNhdGlvblByb3RvY29sLkhUVFAsXG5cbiAgICAgICAgICAgIGxvYWRCYWxhbmNpbmdBbGdvcml0aG1UeXBlOiBlbGJ2Mi5UYXJnZXRHcm91cExvYWRCYWxhbmNpbmdBbGdvcml0aG1UeXBlLkxFQVNUX09VVFNUQU5ESU5HX1JFUVVFU1RTLFxuXG4gICAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICAgICAgbmV3IHRhcmdldHMuSW5zdGFuY2VUYXJnZXQocHJvcHMuaW5zdGFuY2UxKSxcbiAgICAgICAgICAgICAgICBuZXcgdGFyZ2V0cy5JbnN0YW5jZVRhcmdldChwcm9wcy5pbnN0YW5jZTIpLFxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgaGVhbHRoQ2hlY2s6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9oZWFsdGhcIixcbiAgICAgICAgICAgICAgICBoZWFsdGh5SHR0cENvZGVzOiBcIjIwMFwiLFxuICAgICAgICAgICAgICAgIGludGVydmFsOiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMCksXG4gICAgICAgICAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXG4gICAgICAgICAgICAgICAgaGVhbHRoeVRocmVzaG9sZENvdW50OiAyLFxuICAgICAgICAgICAgICAgIHVuaGVhbHRoeVRocmVzaG9sZENvdW50OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJBTEJETlNOYW1lXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmFsYi5sb2FkQmFsYW5jZXJEbnNOYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG59Il19