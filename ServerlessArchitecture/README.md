# Used SAM CLI for deployment


which sam
sam --version
`sam init`
cd mydemoapp
`sam build`
`sam package --output-template-file package.yaml --s3-bucket webapp-ali --region eu-west-2`

`sam package --output-template-file packaged.yaml --s3-bucket webapp-build-log --region eu-west-2`
`sam package --output-template-file packaged.yaml --region eu-west-2`
`sam deploy --template-file packaged.yaml --capabilities CAPABILITY_IAM --stack-name aws-sam-getting-started --region eu-west-2`

## Clean up resources
aws cloudformation delete-stack --stack-name aws-sam-getting-started
aws cloudformation delete-stack --stack-name aws-sam-cli-managed-default