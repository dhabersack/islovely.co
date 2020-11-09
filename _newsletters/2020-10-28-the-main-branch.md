---
title: "The main branch"
excerpt: "You can rename your master branch to “main” in five quick steps."
issue: 60
---
Hey friends! As I am deep in business and financial planning, I missed that GitHub’s renaming efforts are now in place. If you, like me, are looking for a quick code-related distraction, this tip is for you.

GitHub now initializes new repositories with a branch called “main” instead of “master”. Existing repositories remain as they are. We can update old repositories to this naming to make working on many projects at once easier.

The name of the default branch was always arbitrary. There was never a technical need to give this branch a specific name. Everybody agreed on the name “master” based on a now outdated convention.

With this move by GitHub, it’s likely that soon everybody else will follow. Let’s train ourselves to type “git checkout main” now to be ready for this change.

Existing projects can move to a main branch in five steps:

1. Move the master branch to one called main with `git branch -m master main`. This moves the entire history of the branch over as well.
2. Push the new branch to GitHub with `git push -u origin main`.
3. Point your HEAD to the new branch with `git remote set-head origin main`.
4. Go to your repository’s settings on GitHub and change what it considers the “default branch”.
5. Delete the remote master branch with `git push origin --delete master`.

After renaming the branch, you’ll have to update all places you hardcoded it in. Check and update your aliases, deployment scripts, and CI pipelines. If you never set a particular name in those, you’re fine. When working in a team, make sure everybody else updates their references as well.

All in all, you can complete this process in a few minutes per project.

– Dom