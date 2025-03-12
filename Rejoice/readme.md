# Master Git & GitHub | Part 1

## Video Tutorial

[![Master Git & GitHub | Part 1](https://img.youtube.com/vi/Oq6nxXD-MZc/hqdefault.jpg)](https://youtu.be/Oq6nxXD-MZc?si=S0Sqhs4rMPeBAR82)

- **Title:** Master Git & GitHub | Part 1
- **Link:** [Watch on YouTube](https://youtu.be/Oq6nxXD-MZc?si=S0Sqhs4rMPeBAR82)

# Master Git & GitHub | Part 2 | Fundamentals

## Video Tutorial

[![Master Git & GitHub | Part 2 | Fundamentals](https://img.youtube.com/vi/ylVQ_lBaqvY/hqdefault.jpg)](https://youtu.be/ylVQ_lBaqvY?si=9EHleiCcSrhse-Kv)

- **Title:** Master Git & GitHub | Part 2 | Fundamentals
- **Link:** [Watch on YouTube](https://youtu.be/ylVQ_lBaqvY?si=9EHleiCcSrhse-Kv)

# Master Git & GitHub | Part 3 | Branching

## Video Tutorial

[![Master Git & GitHub | Part 3 | Branching](https://img.youtube.com/vi/tsoa9wdSKAk/hqdefault.jpg)](https://youtu.be/tsoa9wdSKAk?si=6yNUQBi85j2Db_Jm)

- **Title:** Master Git & GitHub | Part 3 | Branching
- **Link:** [Watch on YouTube](https://youtu.be/tsoa9wdSKAk?si=6yNUQBi85j2Db_Jm)

# Master Git & GitHub | Part 4 | Collaboration

## Video Tutorial

[![Master Git & GitHub | Part 4 | Collaboration](https://img.youtube.com/vi/cn8l5bXhTBM/hqdefault.jpg)](https://youtu.be/cn8l5bXhTBM?si=iKzLIxu-0z9_uK9u)

- **Title:** Master Git & GitHub | Part 4 | Collaboration
- **Link:** [Watch on YouTube](https://youtu.be/cn8l5bXhTBM?si=iKzLIxu-0z9_uK9u)


# ***git installation***
## stages:

 * U - untracked
 * A- added or staged
 * C - commited
 * 
 * commands you need to know -
 * git status -s => to know the current status of unstaged and stagged files
 * git log --oneline  => to know the current status of saved points
 * 
 * git reset --hard Head~1
 * 
 * managing your own projects
 * making git available in our prject
 * making a check point or saved point
 * adding files
 * staging them 
 * commiting them
 * going back to some previous saved point
 * logging everything 
 * reverting back to the previous saved point
 * 
 * git config --global user.name "name"
 * git config --global user.email "sumanta2004@gmail.com"
 * git config --global core.editor "code --wait"
 * git config --global core.autocrlf "input"
 * git config --global -e
 * git status -s
   git log
 * git log --oneline
 * git log --oneline --graph
 * rm -rf .git
 * git branch main
 * git branch
 * git switch xyz
 * git merge xyx
 * be in main then merge it with the main
 * git branch -d branch_name
 * git swich -C branch_name
 * this will craete branch and switch to the  new branch
 * git stash
 * git stash apply
 * git stash clear
 * git checkout -b navbarFeature
 * git remote -v
 * 

 
# add collaborators 
`settings -> collaboration`
`git clone https://github.com/SumantaBhattacharya/Basic-java-Project.git`
`git switch -C newFeature`
`git branch`
`git add .`
`git commit -m "added some new feature`
`git push -u(upstream) origin newFeature`
leader fetch and then merge
git fetch
git branch
git switch newFeature
git swich main
git merge newFeature
git push origin main

invited person
git switch main
git fetch
git merge newFeature
git pull(fetch and merge)

PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB> git remote -v
origin  https://github.com/SumantaBhattacharya/SumantaBhattacharya.git (fetch)
origin  https://github.com/SumantaBhattacharya/SumantaBhattacharya.git (push) 

git status only those files which is untracked and those are modifies but not which are commited and not made any changes to it
git log provide commit histories

merging techniques - fast forward merge, three way merge , squash merging,recursive strategy merge, rebase and merge

* git config --global -e
.gitconfig
[user]
	name = Sumanta Bhattacharya
	email = sumanta2004@gmail.com
[core]
	editor = code --wait
	autocrlf = input

PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB> git log --oneline
b123020 (HEAD -> main) Clone of Rejoice website




 * C:\Users\SUDIP BHATTACHARYA>git config --global user.name "Sumanta Bhattacharya"

C:\Users\SUDIP BHATTACHARYA>git config --global user.email "sumanta2004@gmail.com"

C:\Users\SUDIP BHATTACHARYA>git config --global core.editor "code --wait"

C:\Users\SUDIP BHATTACHARYA>git config --global core.autocrlf "input"


 * PS C:\Users\SUDIP BHATTACHARYA\Desktop\Backend> git --version
git version 2.45.0.windows.1
PS C:\Users\SUDIP BHATTACHARYA\Desktop\Backend> git
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
 
