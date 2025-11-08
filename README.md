# Data Positioning Development Library

[![npm version](https://img.shields.io/npm/v/@datapos/datapos-development.svg)](https://www.npmjs.com/package/@datapos/datapos-development)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A TypeScript library of utilities for managing the Data Positioning repositories.

## Requirements

Ensure your environment meets the following prerequisites before using this library:

- **Node.js** version `>=22.0.0`,
- **npm** version `>=11.0.0`,
- A Unix-like shell (for command shortcuts, e.g., `bash`, `zsh`, or Git Bash on Windows),
- Access to the [npm registry](https://www.npmjs.com/) and [GitHub](https://github.com/) for publishing and syncing.

## Installation

Install as a development (dev) dependency:

```bash
npm install --save-dev @datapos/datapos-development
```

Create `.npmrc` with access token. Access token needs to disable 2FA and allow all access.

```ini
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=<ACCESS TOKEN>
```

## Utilities

The `src/index.ts' file exposes the following utilities:

| Name                      | Notes                                                                    |
| ------------------------- | ------------------------------------------------------------------------ |
| buildConfig               | Build the config.json file for the repository.                           |
| buildConnectorConfig      | Build the connector config.json file for the repository.                 |
| buildContextConfig        | Build the context config.json file for the repository.                   |
| buildInformerConfig       | Build the informer config.json file for the repository.                  |
| buildPresenterConfig      | Build the presenter config.json file for the repository.                 |
| buildPublicDirectoryIndex | Build an index for the repositories public directory.                    |
| bumpVersion               | Bump the repositories version number.                                    |
| echoScriptNotImplemented  | Echo script not implemented message to console..                         |
| sendDeploymentNotice      | Send a deployment notice for the repository.                             |
| syncWithGitHub            | Synchronise the local repository with the main GitHub repository.        |
| uploadDirectoryToR2       | Upload a directory to Cloudflare R2 storage.                             |
| uploadModuleConfigToDO    | Upload a modules configuration to the Cloudflare `state` durable object. |
| uploadModuleToR2          | Upload a module to Cloudflare R2 storage.                                |

## Repository Common Management Commands

The table below lists the repository management commands available in this project.
For detailed implementation, see the `scripts` section in the `package.json` file.

| Name               | Key Code         | Notes                                                                                                      |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                       |
| build              | alt+ctrl+shift+b | Build the package using Vite.                                                                              |
| bump:version       | alt+ctrl+shift+v | Increment patch version number.                                                                            |
| check              | alt+ctrl+shift+c | List outdated dependencies and run retire scanner.                                                         |
| document           | alt+ctrl+shift+d | Identify licenses of the project's production and peer dependencies. See [LICENSES.json](./LICENSES.json). |
| format             | alt+ctrl+shift+f | Enforce formatting style rules.                                                                            |
| lint               | alt+ctrl+shift+l | Check the code for errors and enforce coding style rules.                                                  |
| publish:toNPM      | alt+ctrl+shift+p | Publish the package to npm.                                                                                |
| release            | alt+ctrl+shift+r | Bump version, synchronise local repository with the main GitHub repository and publish to npm.             |
| send:deployNotice  | alt+ctrl+shift+n | ❌ Not implemented.                                                                                        |
| sync:withGitHub    | alt+ctrl+shift+s | Bump version and synchronise local repository with the main GitHub repository.                             |
| test               | alt+ctrl+shift+t | ❌ Not implemented.                                                                                        |
| update:dataPosDeps | alt+ctrl+shift+u | Install the latest version of all Data Positioning dependencies.                                           |

## TODO

1. Enhance `uploadDirectoryToR2`to batch upload files so more efficient and performant.
1. Replace regex with TypeScript AST in `buildConnectorConfig`. More accurate.
1. Implement zod to validate config schemas.

## Compliance

The following badge reflects FOSSA's assessment of this repository's open-source license compliance.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdata-positioning%2Fdatapos-development.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdata-positioning%2Fdatapos-development?ref=badge_large&issueType=license)

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
