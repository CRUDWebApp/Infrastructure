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
exports.RDSStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const rds_1 = require("../database/rds");
class RDSStack extends cdk.Stack {
    database;
    constructor(scope, id, props) {
        super(scope, id, props);
        const rds = new rds_1.RDSConstruct(this, "RDS", {
            vpc: props.vpcStack.vpc,
            backendSecurityGroup: props.ec2Stack.securityGroup
        });
        this.database = rds.database;
    }
}
exports.RDSStack = RDSStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUkRTU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSRFNTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFJbkMseUNBQStDO0FBTy9DLE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRW5CLFFBQVEsQ0FBQztJQUV6QixZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQW9CO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ3RDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDdkIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhO1NBQ3JELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFkRCw0QkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBWUENTdGFjayB9IGZyb20gXCIuL1ZQQ1N0YWNrXCI7XG5pbXBvcnQgeyBFQzJTdGFjayB9IGZyb20gXCIuL0VDMlN0YWNrXCI7XG5pbXBvcnQgeyBSRFNDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vZGF0YWJhc2UvcmRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUkRTU3RhY2tQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcbiAgICB2cGNTdGFjazogVlBDU3RhY2s7XG4gICAgZWMyU3RhY2s6IEVDMlN0YWNrO1xufVxuXG5leHBvcnQgY2xhc3MgUkRTU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGFiYXNlO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJEU1N0YWNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgcmRzID0gbmV3IFJEU0NvbnN0cnVjdCh0aGlzLCBcIlJEU1wiLCB7XG4gICAgICAgICAgICB2cGM6IHByb3BzLnZwY1N0YWNrLnZwYyxcbiAgICAgICAgICAgIGJhY2tlbmRTZWN1cml0eUdyb3VwOiBwcm9wcy5lYzJTdGFjay5zZWN1cml0eUdyb3VwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSByZHMuZGF0YWJhc2U7XG4gICAgfVxufSJdfQ==