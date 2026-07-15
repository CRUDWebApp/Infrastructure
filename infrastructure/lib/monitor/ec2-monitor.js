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
exports.EC2MonitorCreate = EC2MonitorCreate;
const cdk = __importStar(require("aws-cdk-lib"));
const cloudwatch = __importStar(require("aws-cdk-lib/aws-cloudwatch"));
function EC2MonitorCreate(props) {
    const CPU = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "CPUUltilization",
        dimensionsMap: {
            InstanceId: props.instanceId,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const NetworkInbound = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "NetworkIn",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const NetworkOutbound = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "NetworkOut",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const Status = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "StatusCheckFailed",
        dimensionsMap: {
            InstanceId: props.instanceId
        },
        statistic: cloudwatch.Stats.MAXIMUM,
        period: cdk.Duration.minutes(5)
    });
    return [
        new cloudwatch.GraphWidget({
            title: "EC2-CPU",
            left: [CPU]
        }),
        new cloudwatch.GraphWidget({
            title: "EC2-Network",
            left: [NetworkInbound, NetworkOutbound]
        }),
        new cloudwatch.GraphWidget({
            title: "EC2-Status",
            left: [Status]
        }),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLW1vbml0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlYzItbW9uaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLDRDQXNEQztBQTdERCxpREFBbUM7QUFDbkMsdUVBQXlEO0FBTXpELFNBQWdCLGdCQUFnQixDQUFDLEtBQXNCO0lBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUM5QixTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLGFBQWEsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQjtRQUNELFNBQVMsRUFBRSxTQUFTO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3pDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLGFBQWEsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQjtRQUNELFNBQVMsRUFBRSxTQUFTO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQzFDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGFBQWEsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQjtRQUNELFNBQVMsRUFBRSxTQUFTO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsYUFBYSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CO1FBQ0QsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTztRQUNuQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLENBQUMsQ0FBQztJQUNILE9BQU87UUFDSCxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDdkIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ2QsQ0FBQztRQUVGLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN2QixLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1NBQzFDLENBQUM7UUFFRixJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDdkIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2pCLENBQUM7S0FFTCxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCAqIGFzIGNsb3Vkd2F0Y2ggZnJvbSBcImF3cy1jZGstbGliL2F3cy1jbG91ZHdhdGNoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRUMyTW9uaXRvclByb3BzIHtcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFQzJNb25pdG9yQ3JlYXRlKHByb3BzOiBFQzJNb25pdG9yUHJvcHMpOiBjbG91ZHdhdGNoLklXaWRnZXRbXSB7XG4gICAgY29uc3QgQ1BVID0gbmV3IGNsb3Vkd2F0Y2guTWV0cmljKHtcbiAgICAgICAgbmFtZXNwYWNlOiBcIkFXUy9FQzJcIixcbiAgICAgICAgbWV0cmljTmFtZTogXCJDUFVVbHRpbGl6YXRpb25cIixcbiAgICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGlzdGljOiBcIkF2ZXJhZ2VcIixcbiAgICAgICAgcGVyaW9kOiBjZGsuRHVyYXRpb24ubWludXRlcyg1KVxuICAgIH0pO1xuICAgIGNvbnN0IE5ldHdvcmtJbmJvdW5kID0gbmV3IGNsb3Vkd2F0Y2guTWV0cmljKHtcbiAgICAgICAgbmFtZXNwYWNlOiBcIkFXUy9FQzJcIixcbiAgICAgICAgbWV0cmljTmFtZTogXCJOZXR3b3JrSW5cIixcbiAgICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZFxuICAgICAgICB9LFxuICAgICAgICBzdGF0aXN0aWM6IFwiQXZlcmFnZVwiLFxuICAgICAgICBwZXJpb2Q6IGNkay5EdXJhdGlvbi5taW51dGVzKDUpXG4gICAgfSk7XG4gICAgY29uc3QgTmV0d29ya091dGJvdW5kID0gbmV3IGNsb3Vkd2F0Y2guTWV0cmljKHtcbiAgICAgICAgbmFtZXNwYWNlOiBcIkFXUy9FQzJcIixcbiAgICAgICAgbWV0cmljTmFtZTogXCJOZXR3b3JrT3V0XCIsXG4gICAgICAgIGRpbWVuc2lvbnNNYXA6IHtcbiAgICAgICAgICAgIEluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWRcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGlzdGljOiBcIkF2ZXJhZ2VcIixcbiAgICAgICAgcGVyaW9kOiBjZGsuRHVyYXRpb24ubWludXRlcyg1KVxuICAgIH0pO1xuICAgIGNvbnN0IFN0YXR1cyA9IG5ldyBjbG91ZHdhdGNoLk1ldHJpYyh7XG4gICAgICAgIG5hbWVzcGFjZTogXCJBV1MvRUMyXCIsXG4gICAgICAgIG1ldHJpY05hbWU6IFwiU3RhdHVzQ2hlY2tGYWlsZWRcIixcbiAgICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZFxuICAgICAgICB9LFxuICAgICAgICBzdGF0aXN0aWM6IGNsb3Vkd2F0Y2guU3RhdHMuTUFYSU1VTSxcbiAgICAgICAgcGVyaW9kOiBjZGsuRHVyYXRpb24ubWludXRlcyg1KVxuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBjbG91ZHdhdGNoLkdyYXBoV2lkZ2V0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVDMi1DUFVcIixcbiAgICAgICAgICAgIGxlZnQ6IFtDUFVdXG4gICAgICAgIH0pLFxuXG4gICAgICAgIG5ldyBjbG91ZHdhdGNoLkdyYXBoV2lkZ2V0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVDMi1OZXR3b3JrXCIsXG4gICAgICAgICAgICBsZWZ0OiBbTmV0d29ya0luYm91bmQsIE5ldHdvcmtPdXRib3VuZF1cbiAgICAgICAgfSksXG5cbiAgICAgICAgbmV3IGNsb3Vkd2F0Y2guR3JhcGhXaWRnZXQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRUMyLVN0YXR1c1wiLFxuICAgICAgICAgICAgbGVmdDogW1N0YXR1c11cbiAgICAgICAgfSksXG5cbiAgICBdO1xufSJdfQ==