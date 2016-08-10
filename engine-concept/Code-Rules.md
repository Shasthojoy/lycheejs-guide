
# Code Rules

These rules apply to pretty much everything of the whole Engine stack and
all Projects and Libraries and guarantee best experience for both Humans
and our Software Bots.

If an Exception is made, it is subject for refactoring. So far every single
worst-case abstraction iteratively progressed into a clean state that
follows these rules.



## Rules

1. Composition Pattern over Inheritance.
2. Every Definition is serializable and deserializable.
3. Every Definition is simulateable and reproducible.
4. Every Definition is namespaced by behaviour.
5. Every Definition is a freely combinable Composite or a referencable Module.
6. Every Entity (Definition + Assets) is plug and play.
7. Every Layer can optionally add logic to third-party integrations.



## Explanations

1. Every Definition tries to be a freely combineable Composite with zero Dependencies.
2. Every instance-based property is recursively mapped via `serialize()` and `deserialize()`.
3. No platform-specific API allowed outside `/source/platform/<tag>`.
4. For example, every Definition in `lychee.ui.entity` behaves like a `lychee.ui.Entity`.
5. Composites abstract behaviour while Modules abstract logic.
6. Entities have no dependency to third-party static Modules that would introduce glue code.
7. For example, the layer `app.box2d.Layer` is the abstraction for a third-party `Box2D` engine.

