# use this for creating your .ssh config file
Host git-codecommit.*.amazonaws.com
  User <SSH key ID>
  IdentityFile ~/.ssh/id_rsa

## Some commands
`ssh git-codecommit.eu-west-2.amazonaws.com`
`aws configure`
`aws codecommit list-repositories`
`aws codecommit get-repository --repository-name webapp`

 cd webapp
 git status
 1020  git clone https://git-codecommit.eu-west-2.amazonaws.com/v1/repos/webapp

 git status
 git add .
 git config --global core.safecrlf false
 git commit -m "pushing webapp v0.1 to repo"
 git push -u origin main
 git remote update origin
 git branch -all

Add repo ARN in the template deny policy to create it  