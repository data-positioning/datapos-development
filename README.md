# Data Positioning Development Library

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=data-positioning_datapos-development&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=data-positioning_datapos-development)
<span><!-- OWASP_BADGES_START -->[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/datapos-development/dependency-check-reports/dependency-check-report.html)<!-- OWASP_BADGES_END --></span>
[![npm version](https://img.shields.io/npm/v/@datapos/datapos-development.svg)](https://www.npmjs.com/package/@datapos/datapos-development)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A library of utilities used to manage Data Positioning repositories.

## Installation

Install as a development (dev) dependency:

```bash
npm install --save-dev @datapos/datapos-development
```

> [!NOTE]
> See the Data Positioning security documentation for additional initialization requirements.

> [!IMPORTANT]
> See the Data Positioning security documentation for additional initialization requirements.

> See the Data Positioning security documentation for additional initialization requirements.

## Utilities

The library implements the following utilities:

| Name                      | Notes                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| auditDependencies         | Audit the project's dependencies for known security vulnerabilities.                                                                            |
| buildDirectoryIndex       | Build an index for a given directory.                                                                                                           |
| buildProject              | Build the package using Vite. Output to '/dist' directory.                                                                                      |
| checkDependencies         | Identify outdated dependencies using npm `outdated` and `npm-check-updates` with option to install latest versions. Also runs `retire` scanner. |
| documentDependencies      | Identify licenses of the project's production and peer dependencies. See [licenses.json](./licenses.json).                                      |
| formatCode                | Use `prettier` to enforce formatting style rules.                                                                                               |
| lintCode                  | Use `eslint` to check the code for potential errors and enforces coding style rules.                                                            |
| releaseProject            | Bump version, build library, synchronise with `GitHub` and publish to `npm`.                                                                    |
| syncProjectWithGitHub     | Synchronise the local repository with the main GitHub repository.                                                                               |
| testProject               |                                                                                                                                                 |
| updateDataPosDependencies | Install the latest version of all Data Positioning dependencies.                                                                                |

Implements the common Data Positioning repository management command detailed in...
The table below lists the repository management commands available in this project.
For detailed implementation, see the `scripts` section in the `package.json` file.

All of the above utilities are designed to be run from `package.json` scripts and assume that the repository follows the standard Data Positioning directory structure and includes a `config.json` file in the root directory.

```json
{
    ...
    "scripts": {
        ...
        "build": "node -e \"import('@datapos/datapos-development').then(m => m.buildProject())\""
        ...
    }
    ...
}
```

## Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the `npm` package [owasp-dependency-check](https://dependency-check.github.io/DependencyCheck/index.html).

[View the OWASP Dependency Check Report](https://data-positioning.github.io/datapos-development/dependency-check-report.html)

## Dependency Licenses

The following table lists the top-level production and peer dependencies. All of these dependencies—along with their transitive dependencies—have been recursively verified to use one of the following commercially friendly licenses: **Apache-2.0**, **BSD-2-Clause**, **CC0-1.0**, or **MIT**. Developers cloning this repository should independently verify all **development** and **optional** dependencies. This project is used solely to support development activities and is not used in production or distributed in any other form.

We use the `npm` packages [license-report](https://www.npmjs.com/package/license-report), [license-report-check](https://www.npmjs.com/package/license-report-check), [license-report-recursive](https://www.npmjs.com/package/license-report-recursive) and [license-downloader](https://www.npmjs.com/package/license-downloader) to identify all dependency licenses and include copies of them. We do not use any unlicensed dependencies in either production or development.

<!-- DEPENDENCY_LICENSES_START -->

| Name                    | Type         | Installed  | Latest  | Latest Release              | Deps | Document                                                                                  |
| :---------------------- | :----------- | :--------: | :-----: | :-------------------------- | ---: | :---------------------------------------------------------------------------------------- |
| @datapos/datapos-shared | MIT          | 0.3.298 ⚠️ | 0.3.300 | this month: 2025-12-10      |    3 | [LICENSE](https://raw.githubusercontent.com/data-positioning/datapos-shared/main/LICENSE) |
| acorn                   | MIT          |   8.15.0   | 8.15.0  | 6 months ago: 2025-06-09    |    0 | ⚠️ No license file                                                                        |
| acorn-typescript        | MIT          |   1.4.13   | 1.4.13  | 23 months ago: 2024-01-03❗ |    1 | [LICENSE](https://raw.githubusercontent.com/TyrealHu/acorn-typescript/master/LICENSE)     |
| acorn-walk              | MIT          |   8.3.4    |  8.3.4  | 15 months ago: 2024-09-09❗ |    1 | ⚠️ No license file                                                                        |
| dotenv                  | BSD-2-Clause |   17.2.3   | 17.2.3  | 2 months ago: 2025-09-29    |    0 | [LICENSE](https://raw.githubusercontent.com/motdotla/dotenv/master/LICENSE)               |
| zod                     | MIT          |   4.1.13   | 4.1.13  | this month: 2025-12-07      |    0 | [LICENSE](https://raw.githubusercontent.com/colinhacks/zod/main/LICENSE)                  |

<!-- DEPENDENCY_LICENSES_END -->

1. **Installed** column:

    A ⚠️ symbol is used to highlight any installed version that does not match the latest available version.

1. **Latest Release** column:

    A ⚠️ symbol is used to highlight any dependency that has gone **more than 6 months** without an update but **no more than 12 months**.

    A **❗** symbol indicates a dependency that has gone **more than 12 months** without an update.

    If a dependency has no, or only a small number of, transitive dependencies, then it may not require frequent updates. The **Deps** column shows the number of transitive dependencies. Full details for these dependencies can be found in [licenses/licenseTree.json](licenses/licenseTree.json).

1. **Document** column:

    The message “⚠️ No license file” is used to highlight any dependency that does not include a license file.

## Bundle Analysis Reports

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the `npm` package [rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer).

[View the Bundle Analysis Report](https://data-positioning.github.io/datapos-development/stats.html)

## License

This project is licensed under the MIT License, allowing free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
