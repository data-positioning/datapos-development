# DataPos - Development Operations Library

A Javascript library of functions used to manage Data Positioning repositories.

## Installation

```
npm install --save-dev @datapos-dev-operations
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
| buildPublicDirectoryIndex |       |
| bumpVersion               |       |
| clearDirectory            |       |
| compilePresenter          |       |
| syncWithGitHub            |       |
| uploadPlugin              |       |

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | Key Code         | Notes                                                                                                                                                                                                                                                                              |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Use [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) to audit the project's dependencies for known security vulnerabilities.                                                                                                                                          |
| build              | alt+ctrl+shift+b | NOT implemented. The JavaScript is compatible with the latest ECMA version.                                                                                                                                                                                                        |
| bumpVersion        |                  |                                                                                                                                                                                                                                                                                    |
| check              | alt+ctrl+shift+c | Use [npx npm-check-updates](https://github.com/raineorshine/npm-check-updates) and [npm outdated](https://docs.npmjs.com/cli/v8/commands/npm-audit) to list the dependencies in the project that are outdated. They return different results.                                      |
| document           | alt+ctrl+shift+d | Use [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler) to identify the licenses of the project's direct production dependencies.                                                                                                                             |
| format             | alt+ctrl+shift+f | Use [prettier](https://prettier.io/) to format the code.                                                                                                                                                                                                                           |
| lint               | alt+ctrl+shift+l | Use [eslint](https://eslint.org/) to check the code for potential errors and enforces coding styles.                                                                                                                                                                               |
| publishToNPM       | alt+ctrl+shift+n | Use [npm publish](https://docs.npmjs.com/cli/v8/commands/npm-publish) to publish the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| release            | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                                                                                            |
| syncWithGitHub     | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                                                                                                  |
| test               | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                                                                                                   |
| updateDependencies | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                                                                                                   |

## The 'cors.json' File

Set CORS Policy on Firebase Storage Bucket (No-longer publishing to Firebase Storage)

See: https://firebase.google.com/docs/storage/web/download-files#cors_configuration
See: https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin/37765371

```
gsutil cors set cors.json gs://datapos-prod.appspot.com
```

To list:

```
gsutil cors get gs://datapos-prod.appspot.com
```
