# Datapos - Operations Library

A Javascript library of functions used to manage Datapos repositories.

## Installation

```
npm install --save-dev @datapos-operations
```

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

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | Key Code         | Notes                                                                                                                                                                                                       |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                                                                                                                        |
| build              | alt+ctrl+shift+b | NOT implemented.                                                                                                                                                                                            |
| check              | alt+ctrl+shift+c | List the dependencies in the project that are outdated.                                                                                                                                                     |
| document           | alt+ctrl+shift+d | Identify the licenses of the project's dependencies.                                                                                                                                                        |
| format             | alt+ctrl+shift+f | Format the code.                                                                                                                                                                                            |
| lint               | alt+ctrl+shift+l | Check the code for potential errors and enforces coding styles.                                                                                                                                             |
| publishToNPM       | alt+ctrl+shift+n | Publishes the package to the [npm](https://www.npmjs.com/) registry. This action will publish the last synchronised version. Use the command line command 'npm publish' when publishing for the first time. |
| release            | alt+ctrl+shift+r | Synchronise the local repository with the main GitHub repository and publish the package to the [npm](https://www.npmjs.com/) registry.                                                                     |
| syncWithGitHub     | alt+ctrl+shift+s | Synchronise the local repository with the main GitHub repository.                                                                                                                                           |
| test               | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
| updateDependencies | alt+ctrl+shift+l | NOT implemented.                                                                                                                                                                                            |
