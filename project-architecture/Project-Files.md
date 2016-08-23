
# Project Files

Every lychee.js Project and Library has the
same setup of the Filesystem structure.

This allows to have a generic way of compiling,
analyzing, building, updating and injecting
Definitions across multiple machines running
on multiple platforms.

It is heavily recommended to always use the
same Filesystem structure as suggested in
the [Boilerplate](https://github.com/Artificial-Engineering/lycheejs/tree/development/projects/boilerplate).


## Filesystem Structure

Each file in the `/asset`, `/source` and `/build`
folder is completely integrated with the
[lychee.pkg](./Package-Format.md) file.

The [MAIN Architecture](./MAIN.md) explains how
all the structured Definitions are integrated in
a centralized `app.Main` instance.

```bash
/projects/example
	/source
		/entity           // Custom Entities
			Custom.js
			Custom.png
		/ui               // UI Entities
			Custom.js
			Custom.fnt
			Custom.json
			Custom.png
		/net              // Network Services, Client and Server
			/client
				Ping.js   // app.net.client.Ping
			/remote
				Ping.js   // app.net.remote.Ping
			Client.js     // app.net.Client
			Server.js     // app.net.Server
		/state
			Welcome.js    // app.state.Welcome
			Welcome.json
			Another.js    // app.state.Another
			Another.json
		Main.js           // MAIN (See MAIN Architecture)
	harvester.js          // app.Main (harvester integration / server mode)
	icon.png              // Application Icon (256x256)
	index.html            // Development (source) variant of Application
	lychee.pkg            // lychee.Package
	lychee.store          // lychee.Storage (synchronized across all peers)
```


## Harvester Integration (harvester.js)

The [lychee.js Harvester](../software-bots/lycheejs-harvester.md)
starts the `harvester.js` that extends the project
with features like live-updates, auto-fertilization
fuzz-testing, apidoc-generation and automatic
stash and storage synchronization across peers.

If you want to debug what is going on behind the scenes
you can always use the [lychee.js Helper](../software-bots/lycheejs-helper.md)
to start a manual server-side instance:

```bash
cd /opt/lycheejs;


cd ./projects/example;

# Parameter Syntax of harvester.js:
# ROOT PORT (HOST || null)

lycheejs-helper env:node ./harvester.js /opt/lycheejs 1337 localhost;
```


## Development Variant (index.html)

The `index.html` of each project is the URL that
you can use to develop the project in a Blink-based
Browser.

It is heavily recommended (I seriously can't stress
it enough) to use a Blink-based Browser like Chrome,
Chromium or Opera as a development environment.

If the project is named `/projects/example`, you can
open the Browser at `http://localhost:8080/projects/example`
to run the Development Variant of the project.

