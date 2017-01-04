
# lychee.js Strainer

The `lycheejs-strainer` is a Command-Line Wizard that helps
to lint, parse and understand Projects and Libraries and
their lychee.js Definitions.

It can be seen as a tool that automatically guesses how
your code works and that builds up a knowledge graph,
which in return is used by the Artificial Intelligence.

The workflow and how it is used is explained in the
[Workflow](../quickstart/Workflow.md) chapter.

The lychee.js Strainer uses `eslint` to parse the definition
files, so you have to install `eslint` globally before and
link it locally into your `/opt/lycheejs` installation.

```bash
# Preparations
sudo npm install -g eslint;
cd /opt/lycheejs;
npm link eslint;
```


## Checking a Project

The lychee.js Strainer can be started in the Terminal (bash)
via the `lycheejs-strainer` command.

The `check` action will lint, parse and try to understand the
Project's or Library's definition files. It will intelligently
only try to understand definitions in the lychee.js Definition
format. All other file formats are ignored.

```bash
cd /opt/lycheejs;

lycheejs-strainer; # show help


cd ./projects/my-project;

lycheejs-strainer check /projects/my-project; # check a project
```

![lycheejs-strainer-check](./asset/lycheejs-strainer-check.png)


## Staging a Project

If your Project or Library is ready and does not fire any
error messages, you can stage your Project to let the
Artificial Intelligence know that the Project is working
as intended.

This will help the Reinforcement Learning approach, so it's
recommended to stage often; whenever everything is stable
in the development process. Note that files that still fire
errors are ignored in the staging process to prevent
overfitting of false positives.

```bash
cd /opt/lycheejs;

cd ./projects/my-project;

lycheejs-strainer stage /projects/my-projects; # stage a project
```

