### commands for manually configuring CodeDeploy agent on EC2 instance

# first ensure we are at the ec2-user home directory
cd /home/ec2-user

# update packages on the instance and install ruby, wget
sudo yum update -y
sudo yum install -y ruby
sudo yum install -y wget

# download CodeDeploy resource kit files for the region
# format for URL https://<bucket-name>.s3.<region-identifier>.amazonaws.com/latest/install
wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install

# make the install script executable and run it with the 'auto' option for the latest agent version
chmod +x ./install
sudo ./install auto

# let's check to see that the agent is now running
sudo service codedeploy-agent status

# if not started, you can try to start it, but generally it should be running
sudo service codedeploy-agent start

### cleaned up for user data
#!/bin/bash
cd /home/ec2-user
sudo yum update -y
sudo yum install -y ruby wget
wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto