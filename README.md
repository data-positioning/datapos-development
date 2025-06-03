# DataPos Development Library

A library of JavaScript operations for managing the DataPos repositories.

## Requirements

Ensure your environment meets the following prerequisites before using this library:

- **Node.js** version `>=18.0.0`
- **npm** version `>=9.0.0`
- A Unix-like shell (for command shortcuts, e.g., `bash`, `zsh`, or Git Bash on Windows)
- Access to the [npm registry](https://www.npmjs.com/) and [GitHub](https://github.com/) for publishing and syncing

## Installation

```
npm install -D @datapos-development
```

## Dependencies

| Name     | Use | References         |
| -------- | --- | ------------------ |
| eslint   | dev | [GitHub]() [NPM]() |
| nanoid   | dev | [GitHub]() [NPM]() |
| prettier | dev | [GitHub]() [NPM]() |
| run      | dev | [GitHub]() [NPM]() |

Refer to package.json and LICENSES.json for detailed versions and licenses.

## Operations

The 'index.js' file exposes the following operations:

| Name                      | Notes |
| ------------------------- | ----- |
| buildConfig               |       |
| buildPublicDirectoryIndex |       |
| bumpVersion               |       |
| clearDirectory            |       |
| sendDeploymentNotice      |       |
| syncWithGitHub            |       |
| uploadDirectoryToR2       |       |
| uploadModuleConfig        |       |
| uploadModuleToR2          |       |

## Repository Management Commands

The following list details the repository management commands implemented by this project:

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
| test               | alt+ctrl+shift+t | NOT implemented.                                                                                                                                                                                                                                                                   |
| updateDependencies | alt+ctrl+shift+u | NOT implemented.                                                                                                                                                                                                                                                                   |

For more details, please refer to the scripts section of the 'package.json' file in this project.
