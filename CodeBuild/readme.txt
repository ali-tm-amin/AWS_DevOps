
### you can place all this in user data and have this installed as the instance is provisioned:
### make sure the first line in the user data is #!/bin/bash
### the top part of this readme explains the commands, the bottom section is for copy/paste to userdata

#!/bin/bash

# yum update will update the packages on your system
sudo yum update -y

# need java1.8
sudo yum install java-1.8.0 -y

# adding the Jenkins repo to the instance
sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo

# adding Jenkins-CI key file so we can install from the package
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key

# install Jenkins
sudo yum install jenkins -y

# start Jenkins service
sudo service jenkins start

# extract the initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword


### for userdata in EC2 instance

#!/bin/bash
sudo yum update -y
sudo yum install java-1.8.0 -y
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo yum install jenkins -y
sudo service jenkins start