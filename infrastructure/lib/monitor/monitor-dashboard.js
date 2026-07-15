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
exports.MonitorConstuct = void 0;
const constructs_1 = require("constructs");
const cloudwatch = __importStar(require("aws-cdk-lib/aws-cloudwatch"));
const ec2_monitor_1 = require("./ec2-monitor");
const ecr_monitor_1 = require("./ecr-monitor");
class MonitorConstuct extends constructs_1.Construct {
    Dashboard;
    constructor(scope, id, props) {
        super(scope, id);
        this.Dashboard = new cloudwatch.Dashboard(this, id, {
            dashboardName: "WebappDashboard",
        });
        this.Dashboard.addWidgets(...(0, ec2_monitor_1.EC2MonitorCreate)({
            instanceId: props.instanceID
        }), ...(0, ecr_monitor_1.ECRMonitorCreate)({
            repositoryName: props.repositoryName
        }));
    }
}
exports.MonitorConstuct = MonitorConstuct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvci1kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25pdG9yLWRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUM7QUFFdkMsdUVBQXlEO0FBRXpELCtDQUFpRDtBQUNqRCwrQ0FBaUQ7QUFPakQsTUFBYSxlQUFnQixTQUFRLHNCQUFTO0lBQ2pDLFNBQVMsQ0FBdUI7SUFFekMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFtQjtRQUN6RCxLQUFLLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDaEQsYUFBYSxFQUFFLGlCQUFpQjtTQUNuQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDckIsR0FBRyxJQUFBLDhCQUFnQixFQUFDO1lBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixDQUFDLEVBQ0YsR0FBRyxJQUFBLDhCQUFnQixFQUFDO1lBQ2hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQWxCRCwwQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG5pbXBvcnQgKiBhcyBjbG91ZHdhdGNoIGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZHdhdGNoJztcblxuaW1wb3J0IHsgRUMyTW9uaXRvckNyZWF0ZSB9IGZyb20gXCIuL2VjMi1tb25pdG9yXCI7XG5pbXBvcnQgeyBFQ1JNb25pdG9yQ3JlYXRlIH0gZnJvbSBcIi4vZWNyLW1vbml0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNb25pdG9yUHJvcHN7XG4gICAgaW5zdGFuY2VJRDogc3RyaW5nLFxuICAgIHJlcG9zaXRvcnlOYW1lOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjbGFzcyBNb25pdG9yQ29uc3R1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3R7XG4gICAgcmVhZG9ubHkgRGFzaGJvYXJkOiBjbG91ZHdhdGNoLkRhc2hib2FyZDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNb25pdG9yUHJvcHMpe1xuICAgICAgICBzdXBlcihzY29wZSxpZCk7XG4gICAgICAgIHRoaXMuRGFzaGJvYXJkID0gbmV3IGNsb3Vkd2F0Y2guRGFzaGJvYXJkKHRoaXMsIGlkLCB7XG4gICAgICAgICAgICBkYXNoYm9hcmROYW1lOiBcIldlYmFwcERhc2hib2FyZFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkRhc2hib2FyZC5hZGRXaWRnZXRzKFxuICAgICAgICAgICAgLi4uRUMyTW9uaXRvckNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJRFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi5FQ1JNb25pdG9yQ3JlYXRlKHtcbiAgICAgICAgICAgICAgICByZXBvc2l0b3J5TmFtZTogcHJvcHMucmVwb3NpdG9yeU5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==