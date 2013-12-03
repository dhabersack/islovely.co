---
title: SML/NJ 110.74 on OS X 10.8 Mountain Lion
description: Additional configuration is required to make Mountain Lion and the version of SML/NJ currently being installed via Homebrew play together nicely again.
published: 2012-08-05
---
I previously went over [how to install SML on OS X via Homebrew](/#/posts/painless-installation-of-sml-on-os-x/ 'Painless installation of SML on OS X'), which currently installs version 110.74 of SML/NJ. Unfortunately, this version does not work with the recently released OS X 10.8 Mountain Lion out of the box.  If you are running both SML and OS X at these version numbers, some light additional tuning is required.

Note that this bug [will be fixed in SML/NJ 110.75](http://smlnj-gforge.cs.uchicago.edu/tracker/index.php?func=detail&aid=94&group_id=33&atid=215 'smlnj-gforge: SML/NJ Bugs: Detail: 94 Running on OS X Mountain Lion').  (<strong>Update:</strong> 110.75 is now available.)

When running version 110.74 on Mountain Lion, the command

```
$ sml
```

results in a not overly helpful but easily resolved error:

```
sml: unable to determine architecture/operating system
```

What happens here is that SML is unable to handle the operating system number of Mountain Lion, so we need to tell it how to interpret that. In order to do so, we first need to figure out which directory Homebrew installed SML to. Running

```
$ brew info smlnj
```

gives us an output similar to the following:

```
smlnj: stable 110.74
http://www.smlnj.org/
/usr/local/Cellar/smlnj/110.74 (3950 files, 69M) *
https://github.com/mxcl/homebrew/commits/master/Library/Formula/smlnj.rb
==> Caveats
This formula spews ML files all over lib, and puts hidden subfolders in bin.
Because of this, we’ve installed it to:
  /usr/local/Cellar/smlnj/110.74/libexec
and we haven’t linked it into /usr/local

You’ll need to add:
  /usr/local/Cellar/smlnj/110.74/libexec/bin
to your PATH.

Improvements are welcome.
```

From this, we can tell that SML has been installed to `/usr/local/Cellar/smlnj/110.74/libexec`.

Open the file `bin/.arch-n-opsys` located in this directory in your text editor of choice:

```
$ open -t /usr/local/Cellar/smlnj/110.74/libexec/bin/.arch-n-opsys
```

Inside, you will find the following instructions, starting at line 63:

```
case `uname -r` in
   8*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.4
   9*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.5
  10*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.6
  11*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.7
    *) exit 1;;
```

As you may have noticed, OS X version 10.8 is not listed here yet. Simply add a line covering version number _12_  (as returned by `uname -r`) to this list:

```
case `uname -r` in
   8*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.4
   9*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.5
  10*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.6
  11*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.7
  12*) OPSYS=darwin; HEAP_OPSYS=darwin ;; # MacOS X 10.8
    *) exit 1;;
```

When trying to save the change, your text editor is probably going to tell you that the file is read-only, but you will have to overwrite the contents here.

After that, running

```
$ sml
```

will once again greet you with the expected command prompt.