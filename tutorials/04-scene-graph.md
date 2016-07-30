
# Scene Graph

The lychee.js Engine integrates a Scene Graph that
allows clean interaction between Entities and a
graphical representation that is layered and buffered
for better performance.


## Prerequisites

- No Prerequisites necessary


## Entities

The lychee.js Scene Graph uses an Entity/Component
concept. Entities are described as `plug and play`
renderable Instances that have close to no external
dependencies.

A custom Entity can look like this in the filesystem:

```bash
/source
  /ui
    Button.js
	Button.png
	Button.json
	Button.msc.ogg
	Button.msc.mp3
```

All files follow a naming scheme, so that it is easier
for automated tools to create/fork/modify Entities. The
above Entity creates the `app.ui.Button` Entity that
(probably) renders a custom Sprite in its `render()`
method as you can judge by the `png` and `json`
attachment.


## App Entities vs. UI Entities vs. Verlet Entities

The lychee.js Scene Graph respects two different basic
interfaces that every Entity should inherit from.

The `lychee.app.Entity` is made for custom usage and
velocity-based behaviours:

- can receive no `events`
- has `collision` with other Entities
- has `effects`
- has `velocity`

The `lychee.ui.Entity` can receive UI events and is made for
UI interaction and visible/hidden state-changes:

- can receive `events` (via `lychee.event.Emitter`)
- has no `collision` with other Entities
- has `effects`
- can be `visible` or hidden

The `lychee.verlet.Entity` inherits from `lychee.app.Entity`
and is made for physics-based simulations. It is tightly
integrated with the `lychee.math` stack, so it has support
for `Matrix` and `Quaternion` based translations, rotations
and projections.


## Layers

The lychee.js Scene Graph uses Layers and a delegation
pattern to fire events. Each layer can either trigger an event
on a child inside the `entities[]` Array or decide to receive
an event for itself when an event was `bind()` on the Layer
before.


## App Layers vs. UI Layers vs. Verlet Layers

The lychee.js Scene Graph respects two different basic
interfaces that every Layer should inherit from.

The `lychee.app.Layer` is made for custom usage:

- can receive `events`
- can `relayout` on relayout event
- has `projections` for its entities
- can be `visible` or hidden

The `lychee.ui.Layer` can receive and delegate UI events and
is made for UI interaction:

- can receive `events`
- can `relayout` on relayout event
- can delegate UI events (`touch`, `key`)
- has `projections` for its entities
- can be `visible` or hidden

The `lychee.verlet.Layer` inherits from `lychee.app.Layer`
and is made for physics-based simulations. It is tightly
integrated with the `lychee.math` stack, so it has support
for `gravity` and `friction`.


## Flexible Customization

The lychee.js Scene Graphs allows a very flexible integration
of third-party custom logic and foreign libraries.

A use case could be that of training an AI, but its update
cycles and epoches for evaluation are different from the scene
graph. In that case it's possible to simply create something
like a `lychee.ai.Layer` that can be placed in the scene graph
to integrate its `lychee.ai.Entity` or `lychee.ai.Agent`
instances as `entities[]`.

Another example for a use case is that of `Box2D`, a very
popular physics simulation engine made for Games. In that case
it's possible to simply create a `app.box2d.Layer` that
integrates the custom simulations with the update cycles of the
lychee.js Scene Graph.

