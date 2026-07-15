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
exports.MonitorStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const monitor_dashboard_1 = require("../monitor/monitor-dashboard");
class MonitorStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new monitor_dashboard_1.MonitorConstuct(this, "Dashboard", {
            instanceID: props.instanceId,
            repositoryName: props.repositoryName,
        });
    }
}
exports.MonitorStack = MonitorStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uaXRvclN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9uaXRvclN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUduQyxvRUFBK0Q7QUFVL0QsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFdkMsWUFDSSxLQUFnQixFQUNoQixFQUFVLEVBQ1YsS0FBd0I7UUFHeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsSUFBSSxtQ0FBZSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7WUFFbkMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBRTVCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUV2QyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFwQkQsb0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcblxuaW1wb3J0IHsgTW9uaXRvckNvbnN0dWN0IH0gZnJvbSBcIi4uL21vbml0b3IvbW9uaXRvci1kYXNoYm9hcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNb25pdG9yU3RhY2tQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcblxuICAgIGluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIHJlcG9zaXRvcnlOYW1lOiBzdHJpbmc7XG5cbn1cblxuZXhwb3J0IGNsYXNzIE1vbml0b3JTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgcHJvcHM6IE1vbml0b3JTdGFja1Byb3BzXG4gICAgKSB7XG5cbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgbmV3IE1vbml0b3JDb25zdHVjdCh0aGlzLCBcIkRhc2hib2FyZFwiLCB7XG5cbiAgICAgICAgICAgIGluc3RhbmNlSUQ6IHByb3BzLmluc3RhbmNlSWQsXG5cbiAgICAgICAgICAgIHJlcG9zaXRvcnlOYW1lOiBwcm9wcy5yZXBvc2l0b3J5TmFtZSxcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdfQ==