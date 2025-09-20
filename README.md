# Data Positioning Development Library

A library of JavaScript operations for managing the Data Positioning repositories.

## Requirements

Ensure your environment meets the following prerequisites before using this library:

- **Node.js** version `>=18.0.0`
- **npm** version `>=9.0.0`
- A Unix-like shell (for command shortcuts, e.g., `bash`, `zsh`, or Git Bash on Windows)
- Access to the [npm registry](https://www.npmjs.com/) and [GitHub](https://github.com/) for publishing and syncing

## Installation

Install as a development (dev) dependency:

```bash
npm install --save-dev @datapos/datapos-development
```

## Operations

The 'index.js' file exposes the following operations:

| Name                      | Notes                                                             |
| ------------------------- | ----------------------------------------------------------------- |
| buildConfig               | Build the config.json file for the repository.                    |
| buildPublicDirectoryIndex | Build an index for the repositories public directory.             |
| bumpVersion               | Bump the repositories version number.                             |
| clearDirectory            | Clear the specified directory.                                    |
| sendDeploymentNotice      | Send a deployment notice fro the repository.                      |
| syncWithGitHub            | Synchronise the local repository with the main GitHub repository. |
| uploadDirectoryToR2       | Upload a directory to Cloudflare R2 storage.                      |
| uploadModuleConfig        |                                                                   |
| uploadModuleToR2          | Upload a module to Cloudflare R2 storage.                         |

## Repository Management Commands

The following list details the repository management commands implemented by this project:

| Name               | Key Code         | Notes                                                                                                                                                                                                          |
| ------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Use [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) to audit the project's dependencies for known security vulnerabilities.                                                                      |
| build              | alt+ctrl+shift+b | \*** NOT IMPLEMENTED \***                                                                                                                                                                                      |
| bumpVersion        |                  |                                                                                                                                                                                                                |
| check              | alt+ctrl+shift+c | Use [npx npm-check-updates](https://github.com/raineorshine/npm-check-updates) and [npm outdated](https://docs.npmjs.com/cli/v8/commands/npm-audit) to list the dependencies in the project that are outdated. |
| document           | alt+ctrl+shift+d | Use [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler) to identify the licenses of the project's direct production dependencies.                                                         |
| format             | alt+ctrl+shift+f | Use [prettier](https://prettier.io/) to format the code.                                                                                                                                                       |
| lint               | alt+ctrl+shift+l | Use [eslint](https://eslint.org/) to check the code for potential errors and enforce coding styles.                                                                                                            |
| publishToNPM       | alt+ctrl+shift+n | Use [npm publish](https://docs.npmjs.com/cli/v8/commands/npm-publish) to publish the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version.            |
| release            | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                        |
| syncWithGitHub     | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                              |
| test               | alt+ctrl+shift+t | \*** NOT IMPLEMENTED \***                                                                                                                                                                                      |
| updateDependencies | alt+ctrl+shift+u | \*** NOT IMPLEMENTED \***                                                                                                                                                                                      |

The table below lists the repository management commands available in this project.
For detailed implementation, see the `scripts` section in `package.json`.

| Name               | Key Code         | Notes                                                                                                                           |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                                            |
| build              | alt+ctrl+shift+b | Build the package using Vite.                                                                                                   |
| check              | alt+ctrl+shift+c | List outdated dependencies.                                                                                                     |
| document           | alt+ctrl+shift+d | Identify licenses of the project's production and peer dependencies. See [LICENSES.json](./LICENSES.json).                      |
| format             | alt+ctrl+shift+f | Enforce formatting style rules.                                                                                                 |
| lint               | alt+ctrl+shift+l | Check the code for errors and enforce coding style rules.                                                                       |
| release            | alt+ctrl+shift+r | Bump version, synchronise local repository with the main GitHub repository, build and publish to [npm](https://www.npmjs.com/). |
| syncWithGitHub     | alt+ctrl+shift+s | Bump version and synchronise local repository with the main GitHub repository.                                                  |
| test               | alt+ctrl+shift+t | NOT implemented.                                                                                                                |
| updateDependencies | alt+ctrl+shift+u | Install the latest version of outdated Data Positioning packages.                                                               |

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
