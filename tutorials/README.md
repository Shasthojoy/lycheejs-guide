
# Tutorials

The lychee.js Tutorials are all available here. They are
fully compatible with the `lycheejs-breeder` workflow.


## Prerequisites

- You should have installed the lychee.js Engine already.
- You should know the `git` command syntax, how to use `git diff` and `git checkout`.


## Index

1.  [Create a Server](./01-server.md)
2.  [Create a Client](./02-client.md)
3.  Basic Debugging
4.  [Scene Graph](./04-scene-graph.md)
5.  [Event Graph](./05-event-graph.md)
6.  Integrate a Background
7.  Integrate a Sprite
8.  Integrate a UI Entity
9.  Integrate a UI Event
10. Integrate a UI Effect
11. Integrate a Network Service
12. Integrate a Network Event
13. Integrate an AI
14. Serialize your Project
15. Fertilize your Project


## Workflow

Every lychee.js Tutorial can be done after one another,
which means you start with the first, then you can do
the second, then the third and so on.

Each folder inside the `./tutorial` folder contains the
code state when the equivalent Tutorial was completed.

You can use `git diff` or similar tools to figure out
what went wrong or what needs to be changed to succeed.


## Usage

Each time you start with a lychee.js Tutorial, you can
also start it by copying the files from the previous
Tutorial, so that everything is completely in sync.

Each Tutorial folder in this Guide contains the complete
incremental progress that you need in order to compare
it to your own progress (using `git diff`) or to start
the next Tutorial directly.

If you want to directly start with the `02-client`
Tutorial, you can start by merging the data of the
`01-server` Tutorial:

```bash
cd /opt/lycheejs;


# Initialize the Tutorial Project
mkdir ./projects/tutorial;
cd ./projects/tutorial;
lycheejs-breeder init;


# Merge progress of previous Tutorial
cp -R /path/to/lycheejs-guide/tutorials/01-server/* ./;


#
# Follow instructions of current Tutorial now
#
```

