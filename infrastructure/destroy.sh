echo "Deleting k8s resources..."
kubectl delete svc crud-app-service
kubectl delete deployment api-deployment
kubectl delete job prisma-migrate --ignore-not-found
kubectl delete secret backend-secret ecr-secret --ignore-not-found

echo "Waiting for Load Balancer to be deleted..."
while [ "$(aws elb describe-load-balancers --region us-east-1 \
  --query 'LoadBalancerDescriptions[?VPCId==`vpc-049bb3c340812237a`].LoadBalancerName' \
  --output text)" != "" ]; do
  echo "  still waiting..."
  sleep 10
done
cdk destroy --all --force
rm -rf outputs.json
