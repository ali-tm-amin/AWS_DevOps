# My Notes

### Some commands
After created a cluster, task definition and registered as ervice, connect to the instance and run the commands in the ecs files; boostraps 
Then create a repository on ECR then find PUSH commands for my websites its similar to this one
make sure to use the "sudo docker -u AWS -p" wrapper 
`sudo docker -u AWS -p $(aws ecr get-login-password --region eu-west-2) <id here>.dkr.ecr.eu-west-2.amazonaws.com`
This will login to docker
`sudo docker build -t my-website`
Then tag it
Then Push it to the repository