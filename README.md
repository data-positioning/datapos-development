# Datapos - Operations Library

A Javascript library of functions used to manage Datapos repositories.

## Installation

```
npm install --save-dev @datapos-operations
```

## Production Dependencies

The following packages are included in the production release. Please refer to 'package.json' and 'LICENSES.json' for version and license details.

| Name   | References                                                                               |
| ------ | ---------------------------------------------------------------------------------------- |
| dotenv | [GitHub](https://github.com/motdotla/dotenv) [NPM](https://www.npmjs.com/package/dotenv) |

## Helpers

The 'scriptHelpers.js' file exports the following helper functions.

| Name                      | Notes |
| ------------------------- | ----- |
| buildConfig               |       |
| buildContext              |       |
| buildPublicDirectoryIndex |       |
| bumpVersion               |       |
| syncWithGitHub            |       |
| UploadConnector           |       |
| UploadContext             |       |

## Common Repository Management Commands

The following list details the common repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | Key Code         | Notes                                                                                                                                                                                                       |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Use [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) to audit the project's dependencies for known security vulnerabilities.                                                                   |
| build              | alt+ctrl+shift+b | NOT implemented.                                                                                                                                                                                            |
| check              | alt+ctrl+shift+c | Use [npm outdated](https://docs.npmjs.com/cli/v8/commands/npm-audit) to list the dependencies in the project that are outdated.                                                                             |
| document           | alt+ctrl+shift+d | Use [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler) to identify the licenses of the project's direct production dependencies.                                                      |
| format             | alt+ctrl+shift+f | Use [prettier](https://prettier.io/) to format the code.                                                                                                                                                    |
| lint               | alt+ctrl+shift+l | Use [eslint](https://eslint.org/) to check the code for potential errors and enforces coding styles.                                                                                                        |
| publishToNPM       | alt+ctrl+shift+n | Publishes the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| release            | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                     |
| syncWithGitHub     | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                           |
| test               | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
| updateDependencies | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
