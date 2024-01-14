# N.California
aws ec2 run-instances \
--image-id ami-02541b8af977f6cdd \
--count 1 \
--instance-type t2.micro \
--region us-west-1 > res-us-west-1.txt

# London
aws ec2 run-instances \
--image-id ami-0d729d2846a86a9e7 \
--count 1 \
--instance-type t2.micro \
--region eu-west-2 > res-eu-west-2.txt