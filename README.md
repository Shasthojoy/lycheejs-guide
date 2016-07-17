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

0. Composition Pattern over Inheritance.
1. Every Definition is serializable and deserializable.
2. Every Definition is simulateable everywhere.
3. Every Definition is namespaced by behaviour.
4. Every Definition is a freely combinable Composite or a referencable Module.
5. Every Entity (Definition + Assets) is plug and play.
6. Every Layer can optionally add logic to third-party integrations.

**Explanations**

0. Every Definition tries to be a freely combineable Composite with zero Dependencies.
1. Every instance-based property is recursively mapped via `serialize()` and `deserialize()`.
2. No platform-specific API allowed outside `/source/platform/<tag>`.
3. For example, every Definition in `lychee.ui.entity` behaves like a `lychee.ui.Entity`.
4. Composites abstract behaviour while Modules abstract logic.
5. Entities have no dependency to third-party static Modules that would introduce glue code.
6. For example, the layer `app.box2d.Layer` is the abstraction for a third-party `Box2D` engine.



## Table of Contents

**Engine Core**

 - [Assets](./engine/core/Assets.md)
 - [Definitions](./engine/core/Definitions.md)
 - Feature Detection
 - Feature Prediction
 - [Environments](./engine/core/Environments.md)
 - Serialization
 - Fertilizers

**Engine Architecture**

 - Timeline (Loop)
 - Event Graph
 - Scene Graph
 - Network Graph
 - AI Graph

**Engine Maintenance**

 - Updates
 - Releases
 - OS Integration
 - OS Separation

**Projects and Libraries**

 - Filesystem Structure
 - Package Format
 - Software Bot Integrations

**Software Bots**

 - lychee.js Helper
 - lychee.js Harvester
 - lychee.js Fertilizer
 - lychee.js Editor
 - lychee.js Ranger
 - lychee.js Strainer



## License

lychee.js Guide is (c) 2016 Artificial-Engineering and this open source book is licensed under
[Creative Commons NonCommercial-ShareAlike 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

