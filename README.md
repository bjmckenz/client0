
# Overview

Simple Svelte project to show how a Svelte site can easily consume an API. This is the client side.

## API server
API repo is https://github.com/bjmckenz/api0

This is accessed via SvelteKit.

## Database example

If you're looking for how to use a DB like SQLite3 via SvelteKit, check out https://github.com/bjmckenz/client_db.

*This repo used to include DB examples, but they have been removed*

## Joys of SMUI

SMUI seems to pollute a project. It's hard to remove, so this project has "Svelte-native" (HTML) tables and also SMUI. You can use either, but if you're not going to use SMUI, **do not** base your project on this one. Create a new Svelte project and copy over the appropriate files. You have been warned.

# How to Run

*(Start the API project first -- see that project)*


```
npm run dev -- --open
```

# Wut

This exposes the client on port 5173. You can access it with Postman as well your browser.
