
# Filesystem

The lychee.js Engine is installed at `/opt/lycheejs`,
its folder structure looks like this:

- `/opt/lycheejs/bin/*` for Binaries and Helper Scripts.
- `/opt/lycheejs/libraries/*` for lychee.js Libraries.
- `/opt/lycheejs/projects/*` for lychee.js Projects.

As the lychee.js Engine can compile and package itself,
there's no other external folder that is relevant to
the Engine.

By default the `.gitignore` file does only explicitely
track the upstream-maintained core Libraries and core
Projects.

That means it is recommended to use explicitely `git init`
and an own git repository for each lychee.js Library
or Project that is not part of the lychee.js Engine already.



## Third-party Libraries and Projects

The lychee.js Engine completely supports the usage of
symbolic links, so that it is not necessary to maintain
a Fork of the Engine or a complicated submodule structure.

An external Library or Project can be easily integrated
with a symbolic link:

```bash
# Install a third-party Library

cd /home/$USER/Software;
git clone https://github.com/Artificial-Engineering/lycheejs-legacy.git;

# Track the Library via identifier "/libraries/legacy"

cd /opt/lycheejs/libraries;
ln -s /home/$USER/Software/lycheejs-legacy ./legacy;
```

