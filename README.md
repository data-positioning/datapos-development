# Data Positioning Operations

This repository contains helper functions used to manage other Data Positioning repositories.

The 'commonHelpers.js' file includes helper functions that implement [Grunt](https://gruntjs.com/) tasks across all Data Positioning repositories.

The 'connectorHelpers.js' file consists of helper functions for uploading compiled connectors to the Data Positioning registry. All connector repositories install this repository as a development dependency and implement the 'uploadConnector' helper function using a [Grunt](https://gruntjs.com/) task.

## Installation

```
npm install --save-dev @datapos-operations
```

## Repository Management Commands

The following list details the common repository management commands implementation for this repository. For more details, please refer to the [Grunt](https://gruntjs.com/) configuration file (gruntfile.js) in this repository.

| Name        | Key Code         | Notes                                                                                                                                                                                            |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Audit       | alt+ctrl+shift+a | Run 'npm audit' command against this repository.                                                                                                                                                         |
| Build       | alt+ctrl+shift+b | NOT implemented.                                                                                                                                                                                 |
| Check       | alt+ctrl+shift+c | Run 'npm outdated' command against this repository.                                                                                                                                                      |
| Document    | alt+ctrl+shift+d | Run 'license-checker' and 'nlf' packages to identify licenses for all dependencies.                                                                                                              |
| Format      | alt+ctrl+shift+f | NOT implemented.                                                                                                                                                                                 |
| Lint        | alt+ctrl+shift+l | Run [ESLint](https://eslint.org/) against this repository.                                                                                                                                       |
| Migrate     | alt+ctrl+shift+l | Run 'npx npm-check-updates -u' and 'npm install' to migrate all dependencies to their lasted version.                                                                                            |
| Publish     | alt+ctrl+shift+n | Publish this repository to [npm](https://www.npmjs.com/). This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| Release     | alt+ctrl+shift+r | Synchronise this repository with the main GitHub repository and publish it to [npm](https://www.npmjs.com/).                                                                                     |
| Synchronise | alt+ctrl+shift+s | Synchronise this repository with the main GitHub repository.                                                                                                                                     |
| Test        | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                 |
| Update      | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                 |
