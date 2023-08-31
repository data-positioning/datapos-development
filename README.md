# Datapos - Operations

Implements a Javascript library of functions used to manage Datapos projects and repositories.

The 'commonHelpers.js' file includes helper functions that implement common tasks.

The 'connectorHelpers.js' file includes helper functions for uploading compiled connectors to the Data Positioning platform. All connector projects install the packaged release of this project as a development dependency and implement the 'uploadConnector' helper function package.json scripts.

The 'contextHelpers.js' ...

## Installation

```
npm install --save-dev @datapos-operations
```

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the package.json file in this project.

| Name        | Key Code         | Notes                                                                                                                                                                                                       |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audit       | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                                                                                                                        |
| Build       | alt+ctrl+shift+b | NOT implemented.                                                                                                                                                                                            |
| Check       | alt+ctrl+shift+c | List the dependencies in the project that are outdated.                                                                                                                                                     |
| Document    | alt+ctrl+shift+d | Identify the licenses of the project's dependencies.                                                                                                                                                        |
| Format      | alt+ctrl+shift+f | NOT implemented.                                                                                                                                                                                            |
| Lint        | alt+ctrl+shift+l | Check the code for potential errors and enforces coding styles.                                                                                                                                             |
| Publish     | alt+ctrl+shift+n | Publishes the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| Release     | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                     |
| Synchronise | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                           |
| Test        | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
| Update      | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
