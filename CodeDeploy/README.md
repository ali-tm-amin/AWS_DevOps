# Configure EC2 Instance for Deploymnet 
## Created some policies and an EC2 instace
 SSMInstanceProfile with "AmazonSSMManagedInstanceCore" "CloudWatchAgentServerPolicy" attached to it, then created the EC2 instance and connect to it. 

## Run these comands after ssh to the ec2 instances
[ec2-user@ip-172-31-8-194 ~]$ history
    sudo yum update -y
    sudo yum install ruby -y wget
    wget https://aws-codedeploy-eu-west-2.s3.eu-west-2.amazonaws.com/latest/install
    chmod +x ./install
    sudo ./install auto
   
    sudo service codedeploy-agent status

#  COdepipeline

 aws codepipeline get-pipeline --name webapp > pipeline.jason
  