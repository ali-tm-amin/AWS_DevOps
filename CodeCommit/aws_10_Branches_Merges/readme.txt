# after you've merged and deleted branches from the remote repo, on the local repo they may still show up
# in addition, deleting branches on the remote from the local repo may still result in branches appearing
# to exist on the remote repository when using the --all option
git branch --all

# to delete a branch locally
git branch -d <local branch>
eg: git branch -d feature2

# to delete a branch remotely
git push <remote> --delete <remote branch>
eg: git push origin --delete feature3

# if you get this type of error:
error: unable to delete 'feature3': remote ref does not exist
# you must synchronize your branch listing using the -p option to prune branches no longer on the remote
git fetch -p
