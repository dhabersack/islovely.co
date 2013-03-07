---
date: 2012-07-30
layout: post
summary: The official installation process for SML/NJ on a Mac is a hassle and may leave hard to remove files on your system. The Homebrew package manager takes the pain out of this process if you follow a few easy steps.
title: Painless installation of SML on OS X
---

Studying Computer Science of any kind, you'll be asked to install a wide range of software you'll use for one semester and are unlikely to ever need again afterwards.

[SML/NJ](http://smlnj.org/ "Standard ML of New Jersey") is a popular choice in functional programming lectures, but since it is not incredibly widespread, installing it can be a hassle. You could follow their [official installation instructions](http://smlnj.org/install/index.html "Installation instructions for SML/NJ"), but you'll end up with bits and pieces of it scattered throughout your entire system with little hope of ever getting rid of the entire thing.

### Installing SML/NJ through Homebrew

The [Homebrew package manager](http://mxcl.github.com/homebrew/ "Homebrew package manager for OS X") makes installing SML/NJ on OS X not only much easier, but it will also uninstall all of SML when you are done with it, leaving no dead files on your system.

To install SML/NJ through Homebrew, just follow these steps.

#### Install/update Homebrew

Installing Homebrew is a one-liner, which you can find in [their GitHub wiki](https://github.com/mxcl/homebrew/wiki/installation "Installation instructions on the Homebrew GitHub-wiki"). The command you need to run is:

    $ ruby <(curl -fsSk https://raw.github.com/mxcl/homebrew/go)

(Check their wiki if this command fails for you in case they changed it since.)

If you already have Homebrew installed on your system, make sure it is up to date:

    $ brew update

#### Install/update Xcode

Install Xcode or make sure you are running at least Xcode 4.3.3. Both installation and update are available through the [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835 "Xcode on the Mac App Store"). Xcode is a free download.

#### Install Command Line Tools

Start Xcode, then go to "Preferences&hellip; - Downloads - Components" and install the "Command Line Tools".

#### Install SML/NJ

Now you're all set and can install SML/NJ through Homebrew:

    $ brew install smlnj

#### Update your `PATH`

Once SML is installed, you need to tell the operating system where to look for it. Edit your `PATH` to include `/usr/local/Cellar/smlnj/110.74/libexec/bin`. (Note that the exact path to use has been given to you after the installation, so yours might be slightly different from this one.)

First, open your profile in your text editor of choice:

    $ open -t ~/.bash_profile

If this file does not include an `export PATH`-directive yet, simply add this line:

    export PATH=/usr/local/Cellar/smlnj/110.74/libexec/bin:$PATH

If an `export PATH`-directive does exist, just add the path to SML after it. So if you have something like:

    export PATH=/opt/local/bin:/opt/local/sbin:$PATH

just add the new path after it like so:

    export PATH=/opt/local/bin:/opt/local/sbin:/usr/local/Cellar/smlnj/110.74/libexec/bin:$PATH

Mind the `:` after `/opt/local/sbin`, which is required to separate two paths.

You can now reload your profile with:

    $ source ~/.bash_profile

Your new `PATH` will also be loaded every time you open a new terminal session.

Now that you're all done, you can start SML/NJ by typing:

    $ sml

or

    $ sml path/to/your/file.sml

Wasn't that painless.
