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
exports.Route53Construct = void 0;
const constructs_1 = require("constructs");
const route53 = __importStar(require("aws-cdk-lib/aws-route53"));
const targets = __importStar(require("aws-cdk-lib/aws-route53-targets"));
class Route53Construct extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const hostedzone = route53.HostedZone.fromLookup(this, 'HostedZone', {
            domainName: props.hostedZoneName
        });
        new route53.ARecord(this, 'AliasRecord', {
            zone: hostedzone,
            recordName: props.recordName,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(props.distribution))
        });
    }
}
exports.Route53Construct = Route53Construct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlNTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVDO0FBRXZDLGlFQUFtRDtBQUNuRCx5RUFBMkQ7QUFTM0QsTUFBYSxnQkFBaUIsU0FBUSxzQkFBUztJQUMzQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQW1CO1FBQ3pELEtBQUssQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFFZixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ2pFLFVBQVUsRUFBRSxLQUFLLENBQUMsY0FBYztTQUNuQyxDQUFDLENBQUM7UUFFSCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUNwQyxJQUFJLEVBQUUsVUFBVTtZQUNoQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUNsQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQ25EO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBaEJELDRDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmltcG9ydCAqIGFzIHJvdXRlNTMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXJvdXRlNTMnO1xuaW1wb3J0ICogYXMgdGFyZ2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtcm91dGU1My10YXJnZXRzJztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlNTNQcm9wcyB7XG4gICAgaG9zdGVkWm9uZU5hbWU6IHN0cmluZyxcbiAgICByZWNvcmROYW1lOiBzdHJpbmcsXG4gICAgZGlzdHJpYnV0aW9uOiBjbG91ZGZyb250LkRpc3RyaWJ1dGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlNTNDb25zdHJ1Y3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3V0ZTUzUHJvcHMpe1xuICAgICAgICBzdXBlcihzY29wZSxpZClcblxuICAgICAgICBjb25zdCBob3N0ZWR6b25lID0gcm91dGU1My5Ib3N0ZWRab25lLmZyb21Mb29rdXAodGhpcywgJ0hvc3RlZFpvbmUnLCB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiBwcm9wcy5ob3N0ZWRab25lTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgcm91dGU1My5BUmVjb3JkKHRoaXMsICdBbGlhc1JlY29yZCcse1xuICAgICAgICAgICAgem9uZTogaG9zdGVkem9uZSxcbiAgICAgICAgICAgIHJlY29yZE5hbWU6IHByb3BzLnJlY29yZE5hbWUsXG4gICAgICAgICAgICB0YXJnZXQ6IHJvdXRlNTMuUmVjb3JkVGFyZ2V0LmZyb21BbGlhcyhcbiAgICAgICAgICAgICAgICBuZXcgdGFyZ2V0cy5DbG91ZEZyb250VGFyZ2V0KHByb3BzLmRpc3RyaWJ1dGlvbilcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19