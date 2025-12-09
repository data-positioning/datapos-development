# Data Positioning Development Library

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=data-positioning_datapos-development&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_datapos-development)
<span><!-- OWASP_BADGES_START -->[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/datapos-development/dependency-check-reports/dependency-check-report.html)<!-- OWASP_BADGES_END --></span>
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

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the `npm` package [owasp-dependency-check](https://dependency-check.github.io/DependencyCheck/index.html).

[View the OWASP Dependency Check Report](https://data-positioning.github.io/datapos-development/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, BSD-2-Clause, CC0-1.0, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the published library are covered by these checks. We do not include unlicensed dependencies. Used to support development activity and not released as part of the production release. Check if you clone. We use the `npm` packages [license-report](https://www.npmjs.com/package/license-report), [license-report-check](https://www.npmjs.com/package/license-report-check) and [license-report-recursive](https://www.npmjs.com/package/license-report-recursive) to identify dependency licenses.

<!-- DEPENDENCY_LICENSES_START -->
|Name|Type|Installed|Latest|Latest Date|Document|
|:-|:-:|:-:|:-:|:-|:-|
|@datapos/datapos-shared|MIT|0.3.296|0.3.298|2025-12-09|[LICENSE](https://raw.githubusercontent.com/data-positioning/datapos-shared/main/LICENSE)|
|acorn|MIT|8.15.0|8.15.0|2025-06-09|⚠️ No license file.|
|acorn-typescript|MIT|1.4.13|1.4.13|2024-01-03|[LICENSE](https://raw.githubusercontent.com/TyrealHu/acorn-typescript/master/LICENSE)|
|acorn-walk|MIT|8.3.4|8.3.4|2024-09-09|⚠️ No license file.|
|dotenv|BSD-2-Clause|17.2.3|17.2.3|2025-09-29|[LICENSE](https://raw.githubusercontent.com/motdotla/dotenv/master/LICENSE)|
|zod|MIT|4.1.13|4.1.13|2025-12-07|[LICENSE](https://raw.githubusercontent.com/colinhacks/zod/main/LICENSE)|

<!-- DEPENDENCY_LICENSES_END -->

### Bundle Analysis Report

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the `npm` package [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer).

[View the Bundle Analysis Report](https://data-positioning.github.io/datapos-development/stats.html)

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

## Review License Reporting

Here’s a step-by-step license compliance checklist for Node.js projects that combines automated tooling like license-report with manual verification. This is designed to make sure your MIT project remains compliant when using third-party dependencies.

Node.js License Compliance Checklist
Step 1: Generate initial license report

Run your tool, e.g., license-report:

npx license-report --json > licenses.json

Save the output for review.

This gives a first-pass list of all dependencies and their declared licenses.

Step 2: Identify potential issues

For each dependency in the report, check for:

Flag What it means Action
No license declared No license field in package.json Check for LICENSE file in repo. If none, contact author or replace dependency.
Custom/proprietary license License not recognized Manually review the license text and confirm compatibility.
Copyleft license (GPL, LGPL) May require release of modifications If LGPL, ensure linking rules are followed. GPL may restrict distribution.
License mismatch License field differs from LICENSE file Trust LICENSE file; update your report accordingly.
Step 3: Verify actual license text

Check the dependency’s repository for a LICENSE file.

Confirm that the license text matches the package.json declaration.

For multi-license projects, note which license applies to the code you are using.

Step 4: Document all licenses

Create a ThirdPartyLicenses.md or LICENSES/ folder in your project.

For each dependency, include:

Dependency name and version

License type (from LICENSE file)

URL to repository or package

Any copyleft obligations (e.g., “LGPL: modifications must remain LGPL”)

Example (ThirdPartyLicenses.md):

# Third-Party Dependencies

## LibraryA 1.2.3

- License: Apache-2.0
- Repository: https://github.com/user/libraryA
- License text: LICENSES/LibraryA.txt

## LibraryB 4.5.6

- License: BSD-2-Clause
- Repository: https://github.com/user/libraryB
- License text: LICENSES/LibraryB.txt

## LibraryC 0.1.2

- License: LGPL-3.0-only
- Repository: https://github.com/user/libraryC
- License text: LICENSES/LibraryC.txt
- Note: If you modify this library, modifications must remain LGPL-3.0-only

Step 5: Include license texts

Copy the full license text into your project for each dependency.

Put each in LICENSES/LibraryName.txt or combine into ThirdPartyLicenses.md.

Make it easily accessible to end users.

Step 6: Audit before release

Review all dependencies: no missing licenses.

Confirm compliance with copyleft licenses.

Ensure your own MIT license only covers your code.

Update ThirdPartyLicenses.md whenever dependencies are added/updated.

Step 7: Automate for future

Use CI scripts to regenerate license report on npm install or release.

Fail the build if any dependency has “no license” or an incompatible license.

Optional tools:

license-checker (Node.js)

npm-license-crawler

fossology (more comprehensive scanning)
