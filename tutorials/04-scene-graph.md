
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


## Scene Graph Queries

The `lychee.app.State` and `lychee.ui.State` both offer a 
`queryLayer(id, query)` API that allows flexible queries
on each Entity.

You can easily use that queryLayer API to inspect how Layers
and Entities are constructed and what properties influence
their behaviours.

Remember, every Entity is serializable any time and has a
`serialize()` method that returns a Serialization Object
with all information that is required to clone its state
representation _and_ behaviour.

Possible Query Identifiers:

- Index (`Number` index in the `entities[]` Array)
- Identifier (`String` id that was used in `setEntity(id, entity)`)
- Internal Identifier (`String` id that is prefixed with an `@`)

In the Browser console or node-inspector, you can do something
like this to inspect an Entity in the Scene Graph:

```javascript
let main   = lychee.environment.global.MAIN;
let entity = main.state.queryLayer('ui', 'menu > @select');

console.log(entity);
console.log(entity.serialize());
```


## App States

Each `lychee.app.State` and `lychee.ui.State` instance has
its own Scene Graph, that means all visible and non-visible
Layers and Entities are structured in `App States`.

The Serialization concept in lychee.js has a more effective
representation of the Scene Graph by offering a `deserialize(blob)`
API for each App State.

This `deserialize()` method is called by default with the
`attachments["json"]` of each App State, meaning that the
`/source/state/Welcome.json` represents all Layers and Entities
that are initially contained in the `/source/state/Welcome.js`
and the `MAIN.setState('welcome')` call.

Every App State has an `enter(oncomplete)` and `leave(oncomplete)`
method that is called when the MAIN changes its App State. By
default these enter/leave methods will bind/unbind every event
listeners that are relevant for User Interaction, meaning that
only active App States can be interacted with by the User.


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

