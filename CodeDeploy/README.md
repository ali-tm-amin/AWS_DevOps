# Configure EC2 Instance for Deploymnet 
## Created some policies and an EC2 instace
 SSMInstanceProfile with "AmazonSSMManagedInstanceCore" "CloudWatchAgentServerPolicy" attached to it, then created the EC2 instance and connect to it. 

## Run these comands after ssh to the ec2 instances
[ec2-user@ip-172-31-8-194 ~]$ history
    1  sudo yum update -y
    2  sudo yum install ruby -y wget
    3  pwd
    4  wget https://aws-codedeploy-eu-west-2.s3.eu-west-2.amazonaws.com/latest/install
    5  ls
    6  chmod +x ./install
    7  sudo ./install auto
    8  clear
    9  sudo service codedeploy-agent status
   10  history