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
exports.VPCStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const vpc_1 = require("../network/vpc");
class VPCStack extends cdk.Stack {
    vpc;
    constructor(scope, id, props) {
        super(scope, id, props);
        const vpcConstruct = new vpc_1.VPCConstruct(this, "VPC", {
            VPCName: "WebAppVPC",
        });
        this.vpc = vpcConstruct.vpc;
    }
}
exports.VPCStack = VPCStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVlBDU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWUENTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsd0NBQThDO0FBRTlDLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRW5CLEdBQUcsQ0FBQztJQUVwQixZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sWUFBWSxHQUFHLElBQUksa0JBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQy9DLE9BQU8sRUFBRSxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUFiRCw0QkFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBWUENDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vbmV0d29yay92cGNcIjtcblxuZXhwb3J0IGNsYXNzIFZQQ1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcblxuICAgIHB1YmxpYyByZWFkb25seSB2cGM7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHZwY0NvbnN0cnVjdCA9IG5ldyBWUENDb25zdHJ1Y3QodGhpcywgXCJWUENcIiwge1xuICAgICAgICAgICAgVlBDTmFtZTogXCJXZWJBcHBWUENcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52cGMgPSB2cGNDb25zdHJ1Y3QudnBjO1xuICAgIH1cbn0iXX0=