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
exports.RDSConstruct = void 0;
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const cdk = __importStar(require("aws-cdk-lib"));
const rds = __importStar(require("aws-cdk-lib/aws-rds"));
const constructs_1 = require("constructs");
class RDSConstruct extends constructs_1.Construct {
    database;
    secret;
    constructor(scope, id, props) {
        super(scope, id);
        const rdsSecurityGroup = new ec2.SecurityGroup(this, "RDSSecurityGroup", {
            vpc: props.vpc,
            allowAllOutbound: true
        });
        rdsSecurityGroup.addIngressRule(props.backendSecurityGroup, ec2.Port.tcp(5432), "Allow PostgreSQL from Backend in EC2");
        const credentials = new rds.DatabaseSecret(this, "DatabaseSecret", {
            username: "postgres"
        });
        this.secret = credentials;
        this.database = new rds.DatabaseInstance(this, "PostgresDatabase", {
            engine: rds.DatabaseInstanceEngine.postgres({
                version: rds.PostgresEngineVersion.VER_17
            }),
            vpc: props.vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_ISOLATED
            },
            credentials: rds.Credentials.fromSecret(credentials),
            databaseName: "webapp",
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
            allocatedStorage: 20,
            storageType: rds.StorageType.GP3,
            multiAz: false,
            publiclyAccessible: false,
            securityGroups: [rdsSecurityGroup],
            deletionProtection: false,
            deleteAutomatedBackups: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });
        new cdk.CfnOutput(this, "DatabaseEndpoint", {
            value: this.database.dbInstanceEndpointAddress
        });
        new cdk.CfnOutput(this, "DatabasePort", {
            value: this.database.dbInstanceEndpointPort
        });
        new cdk.CfnOutput(this, "DatabaseSecretArn", {
            value: this.secret.secretArn
        });
    }
}
exports.RDSConstruct = RDSConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUMzQyxpREFBbUM7QUFDbkMseURBQTJDO0FBRTNDLDJDQUF1QztBQU92QyxNQUFhLFlBQWEsU0FBUSxzQkFBUztJQUV2QixRQUFRLENBQXVCO0lBRS9CLE1BQU0sQ0FBeUI7SUFFL0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF3QjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUNyRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLGNBQWMsQ0FDM0IsS0FBSyxDQUFDLG9CQUFvQixFQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDbEIsc0NBQXNDLENBQ3pDLENBQUM7UUFHRixNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQy9ELFFBQVEsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBRS9ELE1BQU0sRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU07YUFDNUMsQ0FBQztZQUVGLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUVkLFVBQVUsRUFBRTtnQkFDUixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0I7YUFDOUM7WUFFRCxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBRXBELFlBQVksRUFBRSxRQUFRO1lBRXRCLFlBQVksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FDN0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQ3BCLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUN6QjtZQUVELGdCQUFnQixFQUFFLEVBQUU7WUFFcEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRztZQUVoQyxPQUFPLEVBQUUsS0FBSztZQUVkLGtCQUFrQixFQUFFLEtBQUs7WUFFekIsY0FBYyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFFbEMsa0JBQWtCLEVBQUUsS0FBSztZQUV6QixzQkFBc0IsRUFBRSxJQUFJO1lBRTVCLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDM0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUI7U0FDakQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDcEMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCO1NBQzlDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztTQUMvQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUE3RUQsb0NBNkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZWMyIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtZWMyXCI7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgcmRzIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtcmRzXCI7XG5pbXBvcnQgKiBhcyBzZWNyZXRzbWFuYWdlciBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNlY3JldHNtYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJEU0NvbnN0cnVjdFByb3BzIHtcbiAgICB2cGM6IGVjMi5JVnBjO1xuICAgIGJhY2tlbmRTZWN1cml0eUdyb3VwOiBlYzIuSVNlY3VyaXR5R3JvdXA7XG59XG5cbmV4cG9ydCBjbGFzcyBSRFNDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGFiYXNlOiByZHMuRGF0YWJhc2VJbnN0YW5jZTtcblxuICAgIHB1YmxpYyByZWFkb25seSBzZWNyZXQ6IHNlY3JldHNtYW5hZ2VyLklTZWNyZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUkRTQ29uc3RydWN0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByZHNTZWN1cml0eUdyb3VwID0gbmV3IGVjMi5TZWN1cml0eUdyb3VwKHRoaXMsIFwiUkRTU2VjdXJpdHlHcm91cFwiLCB7XG4gICAgICAgICAgICB2cGM6IHByb3BzLnZwYyxcbiAgICAgICAgICAgIGFsbG93QWxsT3V0Ym91bmQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmRzU2VjdXJpdHlHcm91cC5hZGRJbmdyZXNzUnVsZShcbiAgICAgICAgICAgIHByb3BzLmJhY2tlbmRTZWN1cml0eUdyb3VwLFxuICAgICAgICAgICAgZWMyLlBvcnQudGNwKDU0MzIpLFxuICAgICAgICAgICAgXCJBbGxvdyBQb3N0Z3JlU1FMIGZyb20gQmFja2VuZCBpbiBFQzJcIlxuICAgICAgICApO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IG5ldyByZHMuRGF0YWJhc2VTZWNyZXQodGhpcywgXCJEYXRhYmFzZVNlY3JldFwiLCB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJwb3N0Z3Jlc1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VjcmV0ID0gY3JlZGVudGlhbHM7XG5cbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyByZHMuRGF0YWJhc2VJbnN0YW5jZSh0aGlzLCBcIlBvc3RncmVzRGF0YWJhc2VcIiwge1xuXG4gICAgICAgICAgICBlbmdpbmU6IHJkcy5EYXRhYmFzZUluc3RhbmNlRW5naW5lLnBvc3RncmVzKHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiByZHMuUG9zdGdyZXNFbmdpbmVWZXJzaW9uLlZFUl8xN1xuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIHZwYzogcHJvcHMudnBjLFxuXG4gICAgICAgICAgICB2cGNTdWJuZXRzOiB7XG4gICAgICAgICAgICAgICAgc3VibmV0VHlwZTogZWMyLlN1Ym5ldFR5cGUuUFJJVkFURV9JU09MQVRFRFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHJkcy5DcmVkZW50aWFscy5mcm9tU2VjcmV0KGNyZWRlbnRpYWxzKSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF0YWJhc2VOYW1lOiBcIndlYmFwcFwiLFxuXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IGVjMi5JbnN0YW5jZVR5cGUub2YoXG4gICAgICAgICAgICAgICAgZWMyLkluc3RhbmNlQ2xhc3MuVDMsXG4gICAgICAgICAgICAgICAgZWMyLkluc3RhbmNlU2l6ZS5NSUNST1xuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgYWxsb2NhdGVkU3RvcmFnZTogMjAsXG5cbiAgICAgICAgICAgIHN0b3JhZ2VUeXBlOiByZHMuU3RvcmFnZVR5cGUuR1AzLFxuXG4gICAgICAgICAgICBtdWx0aUF6OiBmYWxzZSxcblxuICAgICAgICAgICAgcHVibGljbHlBY2Nlc3NpYmxlOiBmYWxzZSxcblxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cHM6IFtyZHNTZWN1cml0eUdyb3VwXSxcblxuICAgICAgICAgICAgZGVsZXRpb25Qcm90ZWN0aW9uOiBmYWxzZSxcblxuICAgICAgICAgICAgZGVsZXRlQXV0b21hdGVkQmFja3VwczogdHJ1ZSxcblxuICAgICAgICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWVxuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkRhdGFiYXNlRW5kcG9pbnRcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YWJhc2UuZGJJbnN0YW5jZUVuZHBvaW50QWRkcmVzc1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkRhdGFiYXNlUG9ydFwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhYmFzZS5kYkluc3RhbmNlRW5kcG9pbnRQb3J0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiRGF0YWJhc2VTZWNyZXRBcm5cIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc2VjcmV0LnNlY3JldEFyblxuICAgICAgICB9KTtcbiAgICB9XG59Il19