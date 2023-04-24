# App

A `just-web` `app` is a [context object](#context-object) that share functionalities and data (through [store](#store) or other means) within an application.

It is used to expose public API of each layer of the application,
allow each feature easily access the logic and utilities of other features.

manifest + main

manifest convention and customization

a cache key on manifest or main depends on option variations?

- register then dynamic load

- `load()`: load a plugin and its dependencies, and determine should it be loaded
- `init()`: initialize a plugin after it is loaded
- `start()`: when the plugin is needed

It should contain public API of each layer of every features.

It should contains any external dependencies (or their facades or adaptors),
and any public API on each layer of the application.

`just-web` relies on this custom context object instead of relying on existing context objects for a few reasons:

- supporting micro front-end (MFE) architecture
- maximize testability
- establish a common convention to simplify development

The `app` is accessible from the UI through a DOM-attached context.
For example, the Context API in [`react`](https://reactjs.org/docs/context.html) and [`Solid.js`](https://www.solidjs.com/docs/latest/api#createcontext).

## context object

A context object is a construct where, within a certain context,
a code can access for data or functionalities.

For example, the [global object][global-object] is a context object that lives in the global scope,
which a code can access.

Other examples are:

- module context: the implicit object that contains references to the variables and functions

```ts
import path from 'node:path'

let count = 0

export function foo() {}

// when you access `path`, `count`, or `foo` within the file,
// you are actually accessing `{module context}.path`, `{module context}.count`, `{module context}.foo`
```

- namespace object: [The object which contains all exports of a module][namespace-import]

```ts
// `myModule` is a namespace object
import * as myModule from './some-module.js'
```

- custom context: any user created object or constructs that is used as a context object.

```ts
import axios from 'axios'

const context = { a: 1, axios }

const contextMap = new Map()
```

## Store



## Features


[global-object]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[namespace-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import