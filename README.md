# simple job application tracker

Deployed here: https://simple-job-applications-tracker.now.sh/

## features

- add/edit/delete items
- seed page with some dummy items
- routing using React
- stores entries in the browser using IndexedDB
- 100% responsive layout using Tachyons CSS framework

## libraries/frameworks used

- React
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for storage
- [Dexie.js](https://dexie.org/) wrapper for IndexedDB
- [Tachyons](https://tachyons.io/) for CSS

## svelte app

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