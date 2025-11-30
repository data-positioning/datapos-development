# Data Positioning Development Library

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=data-positioning_datapos-development&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_datapos-development)
<span><!-- OWASP_BADGES_START -->[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/test-lib/dependency-check-reports/dependency-check-report.html)<!-- OWASP_BADGES_END --></span>
[![npm version](https://img.shields.io/npm/v/@datapos/datapos-development.svg)](https://www.npmjs.com/package/@datapos/datapos-development)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A library of utilities for managing the Data Positioning repositories.

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

Designed to be run from `package.json` scripts.

The `src/index.ts' file exposes the following utilities:

| Name                                      | Notes                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| buildConfig                               | Build the config.json file for the repository.                               |
| buildConnectorConfig                      | Build the connector config.json file for the repository.                     |
| buildContextConfig                        | Build the context config.json file for the repository.                       |
| buildPresenterConfig                      | Build the presenter config.json file for the repository.                     |
| buildPublicDirectoryIndex                 | Build an index for the repositories public directory.                        |
| bumpVersion                               | Bump the repositories version number.                                        |
| echoScriptNotImplemented                  | Echo script not implemented message to console..                             |
| insertLicensesIntoReadme                  | Insert the licenses for all production dependencies into the README.md file. |
| insertOWASPDependencyCheckBadgeIntoReadme |                                                                              |
| sendDeploymentNotice                      | Send a deployment notice for the repository.                                 |
| syncWithGitHub                            | Synchronise the local repository with the main GitHub repository.            |
| uploadDirectoryToR2                       | Upload a directory to Cloudflare R2 storage.                                 |
| uploadModuleConfigToDO                    | Upload a modules configuration to the Cloudflare `state` durable object.     |
| uploadModuleToR2                          | Upload a module to Cloudflare R2 storage.                                    |

## Reports & Compliance

### Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the npm package `owasp-dependency-check`.

[View the OWASP Dependency Check Report](https://data-positioning.github.io/datapos-development/dependency-check-reports/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, BSD-2-Clause, CC0-1.0, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the published library are covered by these checks. If a dependence has no license then it is treated as ????? Used to support development activity and nor released as part of the production release. Check if you clone.

<!-- DEPENDENCY_LICENSES_START -->

| Name                    |     Type     | Installed | Latest  | Latest Modified          |
| :---------------------- | :----------: | :-------: | :-----: | :----------------------- |
| @datapos/datapos-shared |     MIT      |  0.3.255  | 0.3.255 | 2025-11-29T17:16:07.774Z |
| acorn                   |     MIT      |  8.15.0   | 8.15.0  | 2025-06-09T04:08:15.567Z |
| acorn-typescript        |     MIT      |  1.4.13   | 1.4.13  | 2024-01-03T02:25:10.152Z |
| acorn-walk              |     MIT      |   8.3.4   |  8.3.4  | 2024-09-09T08:40:59.131Z |
| dotenv                  | BSD-2-Clause |  17.2.3   | 17.2.3  | 2025-09-29T23:22:21.769Z |
| zod                     |     MIT      |  4.1.13   | 4.1.13  | 2025-11-24T02:38:31.522Z |

<!-- DEPENDENCY_LICENSES_END -->

### Bundle Analysis Report

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the npm package `rollup-plugin-visualizer`.

[View the Bundle Analysis Report](https://data-positioning.github.io/datapos-development/stats/index.html)

## Repository Common Management Commands

The table below lists the repository management commands available in this project.
For detailed implementation, see the `scripts` section in the `package.json` file.

| Name               | VS Key Code      | Notes                                                                                                                                           |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                                                            |
| build              | alt+ctrl+shift+b | Build the package using Vite. Output to '/dist' directory.                                                                                      |
| check              | alt+ctrl+shift+c | Identify outdated dependencies using npm `outdated` and `npm-check-updates` with option to install latest versions. Also runs `retire` scanner. |
| document           | alt+ctrl+shift+d | Identify licenses of the project's production and peer dependencies. See [licenses.json](./licenses.json).                                      |
| format             | alt+ctrl+shift+f | Use `prettier` to enforce formatting style rules.                                                                                               |
| lint               | alt+ctrl+shift+l | Use `eslint` to check the code for potential errors and enforces coding style rules.                                                            |
| release            | alt+ctrl+shift+r | Bump version, build library, synchronise with `GitHub` and publish to `npm`.                                                                    |
| sync:withGitHub    | alt+ctrl+shift+s | Synchronise local repository with the main GitHub repository.                                                                                   |
| test               | alt+ctrl+shift+t | ❌ Not implemented.                                                                                                                             |
| update:dataPosDeps | alt+ctrl+shift+u | Install the latest version of all Data Positioning dependencies.                                                                                |

## TODO

1. Enhance `uploadDirectoryToR2`to batch upload files so more efficient and performant.

## License

This project is licensed under the MIT License, allowing free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
