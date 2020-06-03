# Simple job application tracker (Svelte)

Deployed here: https://svelte-job-application-tracker.now.sh/

## Features

- add/edit/delete items
- seed page with some dummy items
- routing using `svelte-routing`
- stores entries in the browser using IndexedDB
- 100% responsive layout using Tachyons CSS framework

## Libraries/frameworks used

- Svelte
- [svelte-routing](https://github.com/EmilTholin/svelte-routing)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for storage
- [Dexie.js](https://dexie.org/) wrapper for IndexedDB
- [Tachyons](https://tachyons.io/) for CSS

## Svelte app

Project was bootstrapped with [Svelte](https://github.com/sveltejs/template).

### Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.
