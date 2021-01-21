# Letterstori.es — Raoul Hausmann 
This interactive data visualisation highlights interesting letter exchanges between [Raoul Hausmann](https://en.wikipedia.org/wiki/Raoul_Hausmann) and other stakeholders. Based on the rich collection of the [Berlinische Galerie](https://berlinischegalerie.de/), the web-based app allows to discover the personal correspondence of the very know Dada artist. From love stories to professional communication, the letters contain many interesting and valuable information about Hausmann and its entourage.

## Run the project locally
**Clone the repository**:
```sh
git clone git@github.com:vogelino/letterstori.es-raoul-hausmann.git
cd letterstori.es-raoul-hausmann
```

**Install the NPM dependencies**:
```sh
npm install
```

**Develop / Run locally**:
```sh
npm run dev
```

**Develop / Run locally (Storybook)**:
```sh
npm run storybook
```

**Deploy it to the cloud with [vercel](https://vercel.com/)**
```sh
vercel
```

## Contribution

### Writing components

In React every piece of functionality is written as a “component”. Generally we distinguish these into three types:

1. **Presentational**
	- are small dump ui components
	- accept data/state via props that can be mocked e.g. for inclusion in React Storybook
	- can have internal state if it has no implications on the outside of the component
	- can use other presentational and utilitary components (but not smart components)
	- examples: *Button*, *Icon*, *Timeline*, *Header*
2. **Stateful**
	- connect and combine presentational components with app state and data providers like Apollo
	- examples: *Timeline* (takes presentational Timeline component an wires it up with state and data)
3. **Utilitary**
	- generic helper components that are not specific for this particular app
	- can theoretically be dragged and dropped into another project
	- examples: *LoadingSwitcher* (decides on loading between two components depending on a condition)

### Component naming and folder structure

We strictly stick to the rule “one component per file”. Except of type distinction a flat directory structure is preferred for components. If a *presentational* component depends on another conponent or is a child component it is aligned on the same folder level but gets its parent component’s name as a prefix:

- *Timeline* (parent component)
- *TimelineAxis* (is child of Timeline component)
- *TimelineAxisLabel* (is child of TimelineAxis)

*Presentational* components are structured in folders that have an index.js which exports the component along with a styling.js file in it. For all other types just a JavaScript file that is named after the component is needed.

```
…
├── components
|   ├── presentational
|   |   ├── Button // component folder
|   |   |   ├── index.js // exports the component
|   |   |   └── styles.js // component styling
|   |   OR
|   |   ├── Tooltip // component folder
|   |   |   ├── index.js // adds inner react state (eg. hovered) and exports the component
|   |   |   ├── Button.js // exports the pure/dump/presentational component
|   |   |   └── styles.js // component styling
|   |   ├── Timeline
|   |   ├── TimelineAxis
|   |   ├── TimelineAxisLabel
|   |   ├── ComponentName
|   |   └── …
|   ├── stateful
|   |   ├── Timeline.js // exports the component
|   |   ├── ComponentName.js
|   |   └── …
|   └── utilitary
|   |   ├── LoadingSwitcher.js // exports the component
|   |   ├── ComponentName.js
|   |   └── …
…
```

----

_Based on [adamsoffer/next-apollo-example](https://github.com/adamsoffer/next-apollo-example) repository_


# Data served via a GraphQL Server
An [Apollo Graphql](https://www.apollographql.com/) server is exposed as a serverless function at the route `/api/grapqhl` and serves the data of the visualisation. 
