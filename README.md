# Datapos - Operations Library

A Javascript library of functions used to manage Datapos repositories.

The 'commonHelpers.js' file includes helper functions that implement common tasks.

The 'connectorHelpers.js' file includes helper functions for uploading compiled connectors to the Data Positioning platform. All connector projects install the packaged release of this project as a development dependency and implement the 'uploadConnector' helper function package.json scripts.

The 'contextHelpers.js' ...

## Installation

```
npm install --save-dev @datapos-operations
```

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | Key Code         | Notes                                                                                                                                                                                                       |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                                                                                                                        |
| build              | alt+ctrl+shift+b | NOT implemented.                                                                                                                                                                                            |
| check              | alt+ctrl+shift+c | List the dependencies in the project that are outdated.                                                                                                                                                     |
| document           | alt+ctrl+shift+d | Identify the licenses of the project's dependencies.                                                                                                                                                        |
| format             | alt+ctrl+shift+f | NOT implemented.                                                                                                                                                                                            |
| lint               | alt+ctrl+shift+l | Check the code for potential errors and enforces coding styles.                                                                                                                                             |
| publishToNPM       | alt+ctrl+shift+n | Publishes the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| release            | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                     |
| syncWithGitHub     | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                           |
| test               | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
| updateDependencies | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
