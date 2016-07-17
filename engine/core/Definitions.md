
# Definitions

The lychee.js Definition Format is a format that works cross-platform
and is defined in the lychee.js core. It consists of APIs that are
integrated with each platform (fertilizer) and each software bot.

The Definition format also allows built-in feature detection at
runtime which is an essential concept for later use cases, such as
environment serialization. It also has the big advantage that all
Definitions are drag and drop compatible and require zero glue code
to be integrated into a lychee.js Library or lychee.js Project.


## Serialization

All Definitions are serializable and have a `serialize()` and `deserialize(blob)`
method. That means all `attachments` of a Definition are serializable
[Assets](./Assets.md) and reusable in sandboxed [Environments](./Environments.md).


## Basic Layout

- `lychee.define('identifier')` returns an instance of `lychee.Definition(identifier)` while exporting the Definition to the currently active [Environment](./Environments.md)
- `.attaches({ name: Asset })` injects Assets as named `attachments`
- `.requires([ 'dependency' ])` injects requirements
- `.includes([ 'dependency' ])` injects inclusions (on the Composite's prototype chain)
- `.tags({ tag: 'value' })` tags a Definition (see [Feature Detection](./Feature-Detection.md))
- `.supports(function(lychee, global) {})` makes this runtime-injectable (see [Feature Detection](./Feature-Detection.md))
- `.exports(function(lychee, global, attachments) {})` exports an Implementation (can be a Composite, Module or Callback)


## Basic Example

A Definition consists of multiple files. These files always have a
`.js` file for the implementation itself. Each other file extension
with the same `identifier` is automatically mapped as an attachment
in an environment's `source` variant.

Filesystem Structure of a typical Definition:

```bash
/projects/example         - Project Root Folder
  /source
    /ui                   - UI namespace
      Definition.js       - Implementation
  	  Definition.png      - "png" Attachment (Texture instance)
  	  Definition.fnt      - "fnt" Attachment (Font instance)
  	  Definition.name.png - "name.png" Attachment (Texture instance)
```

Inside the implementation, all attachments with the same prefixing
identifier are mapped as an attachment. That means it allows to have
multiple named attachments, like in the above `Definition.name.png`
example that will be mapped as `attachments["name.png"]` in the
implementation.

In our example, the Definition inherits as a composite from
`lychee.ui.Layer` as its super "Class", but overrides the `setCustom`
method and inherits the `render()` method from `lychee.ui.Entity`.

That means lychee.js generally uses Composite Pattern and not ES6
Classes. The Composite Pattern allows flexible combinations of given
implementations and the efficient reusage of existing implementations
and their methods, properties and their behaviours.

File Contents of `/source/ui/Definition.js`:

```javascript
lychee.define('app.ui.Definition').requires([
	'lychee.ui.Entity'
]).includes([
	'lychee.ui.Layer'
]).tags({
	variant: 'example'
}).exports(function(lychee, global, attachments) {

	var _Entity = lychee.import('lychee.ui.Entity');
	var _Layer  = lychee.import('lychee.ui.Layer');

	var _config  = attachments["name.json"]; // instanceof Config
	var _texture = attachments["png"];       // instanceof Texture
	var _font    = attachments["fnt"];       // instanceof Font



	/*
	 * IMPLEMENTATION
	 */

	var Composite = function(data) {
	
		var settings = Object.assign({}, data);


		this.custom = null; // default value for Object instances

		this.setCustom(settings.custom);

		delete settings.custom;


		_Layer.call(this, settings); // Composite inherits from "Layer" (see includes)

		settings = null;

	};


	Composite.prototype = {

		render: function(renderer, offsetX, offsetY) {

			// Composite reuses "render()" method from "Entity" (see requires)
			_Entity.prototype.render.call(this, renderer, offsetX, offsetY);

			// Composite introduces "custom" property
			if (this.custom !== null) {
				this.custom.render(renderer, offsetX, offsetY);
			}

		},

		// Composite introduces "custom" property and "setCustom()" method
		setCustom: function(custom) {

			custom = lychee.interfaceof(_Entity, custom) ? custom : null;


			if (custom !== null) {

				this.custom = custom;

				return true;

			}

		}

	};


	return Composite;

});
```

