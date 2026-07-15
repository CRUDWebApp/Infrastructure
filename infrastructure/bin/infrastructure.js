#!/usr/bin/env node
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
const cdk = __importStar(require("aws-cdk-lib"));
const VPCStack_1 = require("../lib/stacks/VPCStack");
const EC2Stack_1 = require("../lib/stacks/EC2Stack");
const ALBStack_1 = require("../lib/stacks/ALBStack");
const ECRStack_1 = require("../lib/stacks/ECRStack");
const RDSStack_1 = require("../lib/stacks/RDSStack");
// import { CloudFrontStack } from "../lib/stacks/CloudFrontStack";
const app = new cdk.App();
// new CloudFrontStack(app, "CloudFrontStack");
const vpcStack = new VPCStack_1.VPCStack(app, "VPCStack");
const ec2Stack = new EC2Stack_1.EC2Stack(app, "EC2Stack", {
    vpc: vpcStack.vpc,
});
const albStack = new ALBStack_1.ALBStack(app, "ALBStack", {
    vpc: vpcStack.vpc,
    instance1: ec2Stack.instance1,
    instance2: ec2Stack.instance2,
});
new RDSStack_1.RDSStack(app, "RDSStack", {
    vpcStack,
    ec2Stack,
});
new ECRStack_1.ECRStack(app, "ECRStack");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmFzdHJ1Y3R1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpREFBbUM7QUFFbkMscURBQWtEO0FBQ2xELHFEQUFrRDtBQUNsRCxxREFBa0Q7QUFDbEQscURBQWtEO0FBQ2xELHFEQUFrRDtBQUNsRCxtRUFBbUU7QUFFbkUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsK0NBQStDO0FBRS9DLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUU7SUFDM0MsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO0NBQ3BCLENBQUMsQ0FBQztBQUVILE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFO0lBQzNDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRztJQUNqQixTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVM7SUFDN0IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTO0NBQ2hDLENBQUMsQ0FBQztBQUdILElBQUksbUJBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFO0lBQzFCLFFBQVE7SUFDUixRQUFRO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsSUFBSSxtQkFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcblxuaW1wb3J0IHsgVlBDU3RhY2sgfSBmcm9tIFwiLi4vbGliL3N0YWNrcy9WUENTdGFja1wiO1xuaW1wb3J0IHsgRUMyU3RhY2sgfSBmcm9tIFwiLi4vbGliL3N0YWNrcy9FQzJTdGFja1wiO1xuaW1wb3J0IHsgQUxCU3RhY2sgfSBmcm9tIFwiLi4vbGliL3N0YWNrcy9BTEJTdGFja1wiO1xuaW1wb3J0IHsgRUNSU3RhY2sgfSBmcm9tIFwiLi4vbGliL3N0YWNrcy9FQ1JTdGFja1wiO1xuaW1wb3J0IHsgUkRTU3RhY2sgfSBmcm9tIFwiLi4vbGliL3N0YWNrcy9SRFNTdGFja1wiO1xuLy8gaW1wb3J0IHsgQ2xvdWRGcm9udFN0YWNrIH0gZnJvbSBcIi4uL2xpYi9zdGFja3MvQ2xvdWRGcm9udFN0YWNrXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbi8vIG5ldyBDbG91ZEZyb250U3RhY2soYXBwLCBcIkNsb3VkRnJvbnRTdGFja1wiKTtcblxuY29uc3QgdnBjU3RhY2sgPSBuZXcgVlBDU3RhY2soYXBwLCBcIlZQQ1N0YWNrXCIpO1xuXG5jb25zdCBlYzJTdGFjayA9IG5ldyBFQzJTdGFjayhhcHAsIFwiRUMyU3RhY2tcIiwge1xuICAgIHZwYzogdnBjU3RhY2sudnBjLFxufSk7XG5cbmNvbnN0IGFsYlN0YWNrID0gbmV3IEFMQlN0YWNrKGFwcCwgXCJBTEJTdGFja1wiLCB7XG4gICAgdnBjOiB2cGNTdGFjay52cGMsXG4gICAgaW5zdGFuY2UxOiBlYzJTdGFjay5pbnN0YW5jZTEsXG4gICAgaW5zdGFuY2UyOiBlYzJTdGFjay5pbnN0YW5jZTIsXG59KTtcblxuXG5uZXcgUkRTU3RhY2soYXBwLCBcIlJEU1N0YWNrXCIsIHtcbiAgICB2cGNTdGFjayxcbiAgICBlYzJTdGFjayxcbn0pO1xuXG5uZXcgRUNSU3RhY2soYXBwLCBcIkVDUlN0YWNrXCIpO1xuXG5hcHAuc3ludGgoKTsiXX0=