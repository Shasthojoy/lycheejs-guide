
# Environments

The lychee.js Engine stack always has multiple environments to
intelligently guess what platform it runs in. The Environment
concept is essential to have Feature Prediction, Simulation and
Analysis capabilities.

Each project and each library can have multiple environments, but
typically when you build and distribute them, they have only a single
Environment with the type `build`.


## Serialization

All Environments are serializable and have a `serialize()` and
`deserialize(blob)` method. That means all definitions, settings
and detected features of the current Environment instance are
reusable in a sandboxed Environment.


## Environment Types

The `source` type is an Environment that is built from the source
files (located in `/source` in the project or library) and is there
to actively work on the project. It intelligently guesses which
platform you are on (given the platform tags) and loads all
dependencies based on [Feature Detection](./Feature-Detection.md)
and [Feature Prediction](./Feature-Prediction.md).

The `export` type is an Environment similar to the `source` type,
but essentially ignores dependencies that can not run currently in
this runtime. But it caches the determined required Features for
the Environment to run in future.

So, for example, if the current runtime has no support for `WebSocket`,
but the exported Environment (`platform` set to `html`) requires it,
it will be serialized and added to the Environment snapshot. That way
lychee.js can predict when an Environment can run natively or needs
to be simulated with mockup APIs. This is an essential feature for
our Software Bots to help them understand the intension of the code.

The `build` type is an Environment snapshot. That means it is
typically defined in a single file (located in `/build` of the project
or library) and allows easy inclusion. As this code is really big
(talking MB size) it can also have advanced Timeline data or Event data
when being serialized on any peer-side. That helps our Software Bots
understand what went wrong and they can chunk the problem into small
problems and re-simulate it on any peer-side.


## Basic Concept

Any Environment is cross-platform and cross-portable. Every dependency
of each Environment can be replaced, as the [Fertilizers](./Fertilizers.md)
have identical APIs across all platforms.

Every Environment can be simulated everywhere, so no matter what Software
Bot runs in which runtime, it can reproduce a serialized Environment
snapshot `1:1` without any single difference. As UI events, NET events
and the Timeline are completely serializable, the simulating side can
also reproduce what exactly happened in your Application.

Every Environment can be built as a `library` or `application` variant.
As every Definition in lychee.js allows flexible Composites, you can export
projects as `variant` set to `library` and include them to create an A/B
test or fork to another project.


### Active Environments

All running Environments (in their deserialized form) are tracked in the
globally accessible `lychee.ENVIRONMENTS` constant. Injected Environments
that were loaded as `build` types are also tracked. This way each and every
dependency can be simulated, serialized and recreated on every peer-side.

The default Environment (accessible via `lychee.environment`) is used to
export Definitions automatically to. The `lychee.define()` method in each
Definition's Implementation will automatically dispatch itself to the
`environment.define(definition)` method. This way it is possible to have
multiple definitions with the same identifier for multiple (sandboxed)
environments for multiple platforms.

When using multiple Environments in parallel, it is heavily recommended to
sandbox it by setting `sandbox` to `true`. This ensures that nothing on
the `global` scope will leak out and accidentially influence other
environments.


## Basic Example

The typical usage of an Environment is either by using a `lychee.pkg`
file or by using a customized Environment instance on-the-fly. In both cases
the `build` property decides what to build. If the `variant` is set to
(defaulted) `application`, the `build` target is created with a `new` call
and gets the `profile` as a parameter.

Initializing an Environment with a `lychee.pkg` file uses the
`lychee.pkginit(identifier, settings, profile)` syntax where `settings` are
overriding the Environment settings in the `lychee.pkg` file. Use `profile`
to manually transfer additional settings to your `app.Main` instance.

```javascript
// Typically found in an index.html file
(function(lychee, global) {

	// Equivalent JSON in lychee.pkg > build > environments > "html/main"

	lychee.pkginit('html/main', {
		debug:   true,
		sandbox: true
	}, {
		custom: 'stuff' // app.Main(settings) has now the custom property
	});

})(lychee, typeof global !== 'undefined' ? global : this);
```

Initializing an Environment with a customized Environment instance uses the
`lychee.envinit(environment, profile)` syntax where `profile` is used to
manually transfer additional settings to your `app.Main` instance.

```javascript
(function(lychee, global) {

	var env = new lychee.Environment({
		build:    'app.Main',
		type:     'source',
		packages: [ new lychee.Package('app', './lychee.pkg') ],
		debug:    true,
		sandbox:  true,
		variant:  'application',
		tags:     {
			platform: [ 'html-nwjs', 'html' ]
		},
		profile:  {
			custom: 'foo'
		}
	});

	lychee.envinit('html/main', {
		custom: 'stuff' // overrides the environment's profile.custom property
	});

})(lychee, typeof global !== 'undefined' ? global : this);
```

