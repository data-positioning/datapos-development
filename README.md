# Data Positioning Development Library

[![npm version](https://img.shields.io/npm/v/@datapos/datapos-development.svg)](https://www.npmjs.com/package/@datapos/datapos-development)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A library of JavaScript operations for managing the Data Positioning repositories.

## Requirements

Ensure your environment meets the following prerequisites before using this library:

- **Node.js** version `>=18.0.0`,
- **npm** version `>=9.0.0`,
- A Unix-like shell (for command shortcuts, e.g., `bash`, `zsh`, or Git Bash on Windows),
- Access to the [npm registry](https://www.npmjs.com/) and [GitHub](https://github.com/) for publishing and syncing.

## Installation

Install as a development (dev) dependency:

```bash
npm install --save-dev @datapos/datapos-development
```

## Operations

The 'index.js' file exposes the following operations:

| Name                      | Notes                                                                    |
| ------------------------- | ------------------------------------------------------------------------ |
| buildConfig               | Build the config.json file for the repository.                           |
| buildPublicDirectoryIndex | Build an index for the repositories public directory.                    |
| bumpVersion               | Bump the repositories version number.                                    |
| clearDirectory            | Clear the specified directory.                                           |
| sendDeploymentNotice      | Send a deployment notice for the repository.                             |
| syncWithGitHub            | Synchronise the local repository with the main GitHub repository.        |
| uploadDirectoryToR2       | Upload a directory to Cloudflare R2 storage.                             |
| uploadModuleConfig        | Upload a modules configuration to the Cloudflare `state` durable object. |
| uploadModuleToR2          | Upload a module to Cloudflare R2 storage.                                |

## Repository Common Management Commands

The table below lists the repository management commands available in this project.
For detailed implementation, see the `scripts` section in the `package.json` file.

| Name               | Key Code         | Notes                                                                                                      |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                       |
| build              | alt+ctrl+shift+b | NOT implemented.                                                                                           |
| check              | alt+ctrl+shift+c | List outdated dependencies and run retire scanner.                                                         |
| document           | alt+ctrl+shift+d | Identify licenses of the project's production and peer dependencies. See [LICENSES.json](./LICENSES.json). |
| format             | alt+ctrl+shift+f | Enforce formatting style rules.                                                                            |
| lint               | alt+ctrl+shift+l | Check the code for errors and enforce coding style rules.                                                  |
| release            | alt+ctrl+shift+r | Bump version, synchronise local repository with the main GitHub repository and publish to npm.             |
| syncWithGitHub     | alt+ctrl+shift+s | Bump version and synchronise local repository with the main GitHub repository.                             |
| test               | alt+ctrl+shift+t | NOT implemented.                                                                                           |
| updateDependencies | alt+ctrl+shift+u | NOT implemented.                                                                                           |

## Compliance

The following badge reflects FOSSA's assessment of this repository's open-source license compliance.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdata-positioning%2Fdatapos-development.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdata-positioning%2Fdatapos-development?ref=badge_large&issueType=license)

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
