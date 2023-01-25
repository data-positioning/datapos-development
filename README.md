# Data Positioning Operations

This repository contains helpers and associated utilities used to manage other Data Positioning repositories.

The 'connectorHelpers.js' file contains helpers for uploading compiled connectors to Firebase Storage and registering them in Firestore. These helpers also upload connector documentation to the Sanity Content Lake. All connector repositories install this repository as a development dependency and implement the 'uploadConnector' helper as a [Grunt](https://gruntjs.com/) task.

## Installation

```
npm install @datapos-operations --save-dev
```

## IDE Setup

[Visual Studio Code](https://code.visualstudio.com/) with the following extensions: [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Repository Management Commands

The following commands are available for repository management. For implementation details, see the [Grunt](https://gruntjs.com/) configuration file (gruntfile.js).

| Name                    | Key Code    | Notes                                                                                                                                                    |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identify Licenses       | cmd+shift+i | Identify licenses for all dependencies.                                                                                                                  |
| Lint                    | cmd+shift+l | Run [ESLint](https://eslint.org/) against the local repository.                                                                                          |
| Publish to NPM          | cmd+shift+n | Publish to [npm](https://www.npmjs.com/). Requires prior synchronisation. Use the command line command 'npm publish' when publishing for the first time. |
| Release                 | cmd+shift+r | Synchronise the local repository with the GitHub repository and publish to [npm](https://www.npmjs.com/).                                                |
| Synchronise with GitHub | cmd+shift+s | Synchronise the local repository with the GitHub repository.                                                                                             |
