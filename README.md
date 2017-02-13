# bmoor website seed
This is intended to save people time when setting up a new site / project.  Merely clone the project and commit back to your own repository.

It's also intended to act as an example and guide for how to set up angular projects.  Contributions are welcome, this will evolve over time.

### Clone this environment
First create a repo, this assumes the repo is `git@github.com:USERNAME/REPOSITORY.git`

```
git clone git@github.com:b-heilman/bmoor-website.git yourProject
cd yourProject
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
git push --set-upstream origin master
```

### To run server 
```
gulp serve
```

To pick an environment, or try minifying
```
gulp serve --env=server
```
