# use aws deploy to push the source and appspec to S3 bucket

aws deploy push \
--application-name webapp \
--s3-location s3://webapp-codedeploy-bucket1/webapp/webapp.zip \
--ignore-hidden-files \
--region eu-west-2