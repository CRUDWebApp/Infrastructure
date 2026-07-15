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
exports.ALBStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const alb_1 = require("../network/alb");
class ALBStack extends cdk.Stack {
    alb;
    constructor(scope, id, props) {
        super(scope, id, props);
        const albConstruct = new alb_1.ALBConstruct(this, "ALBConstruct", {
            vpc: props.vpc,
            instance1: props.instance1,
            instance2: props.instance2
        });
        this.alb = albConstruct.alb;
        new cdk.CfnOutput(this, "ALBURL", {
            value: `http://${this.alb.loadBalancerDnsName}`,
        });
    }
}
exports.ALBStack = ALBStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUxCU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBTEJTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFNbkMsd0NBQThDO0FBUTlDLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRW5CLEdBQUcsQ0FBZ0M7SUFFbkQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFvQjtRQUUxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFlBQVksR0FBRyxJQUFJLGtCQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4RCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztRQUU1QixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUM5QixLQUFLLEVBQUUsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFO1NBQ2xELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXBCRCw0QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgKiBhcyBlYzIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1lYzJcIjtcbmltcG9ydCAqIGFzIGVsYnYyIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtZWxhc3RpY2xvYWRiYWxhbmNpbmd2MlwiO1xuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG5pbXBvcnQgeyBBTEJDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vbmV0d29yay9hbGJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBTEJTdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xuICAgIHZwYzogZWMyLklWcGM7XG4gICAgaW5zdGFuY2UxOiBlYzIuSW5zdGFuY2U7XG4gICAgaW5zdGFuY2UyOiBlYzIuSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBBTEJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYWxiOiBlbGJ2Mi5BcHBsaWNhdGlvbkxvYWRCYWxhbmNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBTEJTdGFja1Byb3BzKSB7XG5cbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYWxiQ29uc3RydWN0ID0gbmV3IEFMQkNvbnN0cnVjdCh0aGlzLCBcIkFMQkNvbnN0cnVjdFwiLCB7XG4gICAgICAgICAgICB2cGM6IHByb3BzLnZwYyxcbiAgICAgICAgICAgIGluc3RhbmNlMTogcHJvcHMuaW5zdGFuY2UxLFxuICAgICAgICAgICAgaW5zdGFuY2UyOiBwcm9wcy5pbnN0YW5jZTJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbGIgPSBhbGJDb25zdHJ1Y3QuYWxiO1xuXG4gICAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiQUxCVVJMXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBgaHR0cDovLyR7dGhpcy5hbGIubG9hZEJhbGFuY2VyRG5zTmFtZX1gLFxuICAgICAgICB9KTtcbiAgICB9XG59Il19