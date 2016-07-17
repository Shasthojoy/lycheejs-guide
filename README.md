# lychee.js Guide

brought to you as libre lecture with joy and pride by [Artificial Engineering](http://artificial.engineering).

Support our libre Bot Cloud via BTC [1CamMuvrFU1QAMebPoDsL3JrioVDoxezY2](bitcoin:1CamMuvrFU1QAMebPoDsL3JrioVDoxezY2?amount=0.5&label=lychee.js%20Support).


## Basic Rules

These rules apply to pretty much everything of the whole Engine stack and
all Projects and Libraries and guarantee best experience for both Humans
and our Software Bots.

If an Exception is made, it is subject for refactoring. So far every single
worst-case abstraction iteratively progressed into a clean state that
follows these rules.



**Rules**

1. Composition Pattern over Inheritance.
2. Every Definition is serializable and deserializable.
3. Every Definition is simulateable and reproducible.
4. Every Definition is namespaced by behaviour.
5. Every Definition is a freely combinable Composite or a referencable Module.
6. Every Entity (Definition + Assets) is plug and play.
7. Every Layer can optionally add logic to third-party integrations.

**Explanations**

1. Every Definition tries to be a freely combineable Composite with zero Dependencies.
2. Every instance-based property is recursively mapped via `serialize()` and `deserialize()`.
3. No platform-specific API allowed outside `/source/platform/<tag>`.
4. For example, every Definition in `lychee.ui.entity` behaves like a `lychee.ui.Entity`.
5. Composites abstract behaviour while Modules abstract logic.
6. Entities have no dependency to third-party static Modules that would introduce glue code.
7. For example, the layer `app.box2d.Layer` is the abstraction for a third-party `Box2D` engine.



## Table of Contents

**Core**

The lychee.js Core consists of the Asset, Definition,
Package and Environment that allows isomorphic behaviour
via Feature Detection and Feature Prediction.

- [Assets](./engine/core/Assets.md)
- [Definitions](./engine/core/Definitions.md)
- Feature Detection
- Feature Prediction
- [Environments](./engine/core/Environments.md)
- Serialization
- Fertilizers

**Engine**

The lychee.js Engine (app / ui namespace) is the
underlying architecture for an Application. It also
offers default behaviours and integrations with all
platform adapters right out of the box.

- MAIN Architecture
- Fertilizer Adapters
- Timeline Graph
- Event Graph
- Scene Graph
- Network Graph
- AI Graph

**Projects and Libraries**

The lychee.js Engine can handle both Projects and
Libraries. All lychee.js Projects can be used as
Libraries and vice versa, due to the Definitions
and Environments serialization concept.

- Filesystem Structure
- Package Format
- Build System Integrations
- Software Bot Integrations

**Software Bots**

The lychee.js Software Bots allow easier cultivation
of lychee.js Projects by offering automation tools
and solutions, such as runtime compilation and
packaging and publishing, peer-cloud management,
automated code validation and refactoring or even
system-level integrations.

- lychee.js Helper
- lychee.js Harvester
- lychee.js Fertilizer
- lychee.js Editor
- lychee.js Ranger
- lychee.js Strainer

**Dev Ops / Maintenance**

The `/bin/maintenance` folder offers some shell
scripts that help automate all things around a
typical lychee.js Engine installation.

- Updates
- Releases
- OS Integration
- OS Separation
 


## License

lychee.js Guide is (c) 2016 Artificial-Engineering and this open source book is licensed under
[Creative Commons NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

