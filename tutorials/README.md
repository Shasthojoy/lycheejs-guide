
# Tutorials

The lychee.js Tutorials are all available here. They are
fully compatible with the `lycheejs-breeder` workflow.


## Prerequisites

- You should have installed the lychee.js Engine already.
- You should know the `git` command syntax, how to `git diff` and how to `git checkout`.


## Index

1.  [Create a Server](./01-server.md)
2.  Create a Client
3.  Basic Debugging
4.  Integrate a Background
5.  Modify the UI Graph
6.  Integrate a Sprite
7.  Integrate a UI Entity
8.  Integrate UI Events
9.  Integrate a Chat Services
10. Integrate UI Effects
11. Integrate an AI
12. Serialize and Debug your Project
13. Fertilize your Project


## Workflow

Every lychee.js Tutorial can be done after one another,
which means you start with the first, then you can do
the second, then the third and so on.

Each folder inside the `./tutorial` folder contains the
code state when the equivalent Tutorial was completed.

You can use `git diff` or similar tools to figure out
what went wrong or what needs to be changed to succeed.

Each time you start with a lychee.js Tutorial, you can
also start it by copying the files from the previous
Tutorial, so that everything is completely in sync.

For example, if you want to directly start with the
`02-client` Tutorial, you can do the following:

```bash
cd /opt/lycheejs;

mkdir ./projects/temporary;

cd ./projects/temporary;


# Initialize a new Project
lycheejs-breeder init;

# Merge files from previous Tutorial
# In our case this was "01-server"
cp -R /path/to/lycheejs-guide/tutorials/01-server/* ./;

#
# Follow instructions of the Tutorial now
#
```

