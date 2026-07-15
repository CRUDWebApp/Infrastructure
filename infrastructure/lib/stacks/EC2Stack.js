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
exports.EC2Stack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const ec2_1 = require("../network/ec2");
class EC2Stack extends cdk.Stack {
    instance1;
    instance2;
    securityGroup;
    constructor(scope, id, props) {
        super(scope, id, props);
        const server = new ec2_1.EC2Construct(this, "EC2", {
            vpc: props.vpc,
        });
        this.instance1 = server.instance1;
        this.instance2 = server.instance2;
        this.securityGroup = server.securityGroup;
    }
}
exports.EC2Stack = EC2Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUMyU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFQzJTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFJbkMsd0NBQThDO0FBTTlDLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRW5CLFNBQVMsQ0FBZTtJQUN4QixTQUFTLENBQWU7SUFDeEIsYUFBYSxDQUFvQjtJQUVqRCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQW9CO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNqQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFqQkQsNEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCAqIGFzIGVjMiBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWVjMlwiO1xuXG5pbXBvcnQgeyBFQzJDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vbmV0d29yay9lYzJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFQzJTdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xuICAgIHZwYzogZWMyLklWcGM7XG59XG5cbmV4cG9ydCBjbGFzcyBFQzJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5zdGFuY2UxOiBlYzIuSW5zdGFuY2U7XG4gICAgcHVibGljIHJlYWRvbmx5IGluc3RhbmNlMjogZWMyLkluc3RhbmNlO1xuICAgIHB1YmxpYyByZWFkb25seSBzZWN1cml0eUdyb3VwOiBlYzIuU2VjdXJpdHlHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBFQzJTdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IG5ldyBFQzJDb25zdHJ1Y3QodGhpcywgXCJFQzJcIiwge1xuICAgICAgICAgICAgdnBjOiBwcm9wcy52cGMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UxID0gc2VydmVyLmluc3RhbmNlMTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZTIgPSBzZXJ2ZXIuaW5zdGFuY2UyO1xuICAgICAgICB0aGlzLnNlY3VyaXR5R3JvdXAgPSBzZXJ2ZXIuc2VjdXJpdHlHcm91cDtcbiAgICB9XG59Il19