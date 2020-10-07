---
title: "The global .gitignore"
excerpt: ""
emoji: ":earth_africa:"
isFeatured: true
---
In most teams, we’re free to choose whatever editors and tools we want to get our work done. Everybody uses the OS and editor of their choice, and we push everything to a shared repository. Some use VS Code on macOS, others use Sublime Text on Windows, yet others kick it oldschool with vim on Linux.

All these individual choices create file noise. Operating systems add files like `.DS_Store` to keep track of folder preferences. Editors keep your workspace settings in hidden files as well. We don’t normally want to add those system-specific files to our project repositories.

Let say Josh’s config file for VS Code says he likes to use two spaces for indentation. Becky uses the same editor, but she prefers four spaces for indentation. If both were to commit their configurations, they’d run into merge conflicts all the time.

To avoid this, we can add the troublesome files and directories to our project’s `.gitignore` file. Files and directories listed in there are not committed to the repository at all. Josh and Becky can keep using VS Code, but their settings never leave their computer.

This gets tedious when every developer’s individual settings end up in a project’s `.gitignore`. The entries that really matter get lost in a sea of one-off configuration files. Instead of this approach, every person can maintain their own global `.gitignore`. It works like a regular `.gitignore` in a project, but applies to this person’s machine globally. These settings apply system-wide, without having to list those files again per project.

If you happen to use VS Code, you can add its hidden files to your global `.gitignore`. That way, they will NEVER be added to any of the repositories you contribute to. That puts developers in charge of keeping their system-specific files out of repositories.

To set this up, create a global `.gitignore` file somewhere on your system. The name doesn’t matter; I call mine `.gitignore_global` so I can tell it apart from regular `.gitignore` files. You can then set that file to be your global “excludes file” with this command:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

In this snippet, replace `~/.gitignore_global` with the path to your system-wide `.gitignore`. Tada, you’re now happily ignoring things on your entire computer!

– Dom
