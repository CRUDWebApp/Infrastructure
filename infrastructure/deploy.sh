# ssh-keygen -t ed25519 -f ec2-key
cdk deploy --require-approval never --outputs-file outputs.json --all
cdk diff