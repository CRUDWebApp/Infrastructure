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
exports.ECRMonitorCreate = ECRMonitorCreate;
const cdk = __importStar(require("aws-cdk-lib"));
const cloudwatch = __importStar(require("aws-cdk-lib/aws-cloudwatch"));
function ECRMonitorCreate(props) {
    const ImageCount = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "ImageCount",
        dimensionsMap: {
            RepositoryName: props.repositoryName,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    const Storage = new cloudwatch.Metric({
        namespace: "AWS/EC2",
        metricName: "StorageBytes",
        dimensionsMap: {
            RepositoryName: props.repositoryName,
        },
        statistic: "Average",
        period: cdk.Duration.minutes(5)
    });
    return [
        new cloudwatch.GraphWidget({
            title: "Repository Images",
            left: [ImageCount]
        }),
        new cloudwatch.GraphWidget({
            title: "Storage Size",
            left: [Storage]
        })
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNyLW1vbml0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlY3ItbW9uaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLDRDQWdDQztBQXZDRCxpREFBbUM7QUFDbkMsdUVBQXlEO0FBTXpELFNBQWdCLGdCQUFnQixDQUFDLEtBQXNCO0lBQ25ELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsWUFBWTtRQUN4QixhQUFhLEVBQUU7WUFDWCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkM7UUFDRCxTQUFTLEVBQUUsU0FBUztRQUNwQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsY0FBYztRQUMxQixhQUFhLEVBQUU7WUFDWCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkM7UUFDRCxTQUFTLEVBQUUsU0FBUztRQUNwQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLENBQUMsQ0FBQztJQUVILE9BQU87UUFDSCxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDdkIsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDckIsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN2QixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDbEIsQ0FBQztLQUNMLENBQUE7QUFFTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGNsb3Vkd2F0Y2ggZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3Vkd2F0Y2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVDUk1vbml0b3JQcm9wcyB7XG4gICAgcmVwb3NpdG9yeU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVDUk1vbml0b3JDcmVhdGUocHJvcHM6IEVDUk1vbml0b3JQcm9wcyk6IGNsb3Vkd2F0Y2guSVdpZGdldFtde1xuICAgIGNvbnN0IEltYWdlQ291bnQgPSBuZXcgY2xvdWR3YXRjaC5NZXRyaWMoe1xuICAgICAgICBuYW1lc3BhY2U6IFwiQVdTL0VDMlwiLFxuICAgICAgICBtZXRyaWNOYW1lOiBcIkltYWdlQ291bnRcIixcbiAgICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICAgICAgUmVwb3NpdG9yeU5hbWU6IHByb3BzLnJlcG9zaXRvcnlOYW1lLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0aXN0aWM6IFwiQXZlcmFnZVwiLFxuICAgICAgICBwZXJpb2Q6IGNkay5EdXJhdGlvbi5taW51dGVzKDUpXG4gICAgfSk7XG5cbiAgICBjb25zdCBTdG9yYWdlID0gbmV3IGNsb3Vkd2F0Y2guTWV0cmljKHtcbiAgICAgICAgbmFtZXNwYWNlOiBcIkFXUy9FQzJcIixcbiAgICAgICAgbWV0cmljTmFtZTogXCJTdG9yYWdlQnl0ZXNcIixcbiAgICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICAgICAgUmVwb3NpdG9yeU5hbWU6IHByb3BzLnJlcG9zaXRvcnlOYW1lLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0aXN0aWM6IFwiQXZlcmFnZVwiLFxuICAgICAgICBwZXJpb2Q6IGNkay5EdXJhdGlvbi5taW51dGVzKDUpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBuZXcgY2xvdWR3YXRjaC5HcmFwaFdpZGdldCh7XG4gICAgICAgICAgICB0aXRsZTogXCJSZXBvc2l0b3J5IEltYWdlc1wiLFxuICAgICAgICAgICAgbGVmdDogW0ltYWdlQ291bnRdXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgY2xvdWR3YXRjaC5HcmFwaFdpZGdldCh7XG4gICAgICAgICAgICB0aXRsZTogXCJTdG9yYWdlIFNpemVcIixcbiAgICAgICAgICAgIGxlZnQ6IFtTdG9yYWdlXVxuICAgICAgICB9KVxuICAgIF1cblxufSJdfQ==