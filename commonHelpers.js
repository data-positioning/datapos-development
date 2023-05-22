/**
 * @file datapos-operations/commonHelpers.js
 * @description Common helper functions used by project management tasks.
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 */

// Dependencies - Framework/Vendor
const async = require('async');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Runs the 'npm audit' command using Grunt's util.spawn method and logs the output.
 * This command checks the project's dependencies for known security vulnerabilities.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} directory - The directory where the `npm audit` command should be executed. Default is the current directory.
 */
function auditDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['audit'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Runs the 'npm outdated' command using Grunt's util.spawn method and logs the output.
 * This command lists the dependencies in the project that are outdated.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} directory - The directory where the `npm outdated` command should be executed. Default is the current directory.
 */
function checkDependencies(grunt, context, directory = '.') {
    // const done = context.async();
    // grunt.util.spawn({ cmd: 'npm', args: ['outdated'], opts: { cwd: directory } }, (error, result) => {
    //     if (error && error.message) {
    //         console.log(error.message);
    //         done(false); // Signal that the task failed.
    //     } else {
    //         grunt.log.writeln(result.stdout);
    //         done(true); // Signal that the task completed successfully.
    //     }
    // });
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Runs the 'license-checker' and 'nlf' commands using Grunt's util.spawn method to identify licenses and logs the output.
 * 'license-checker' command checks the licenses of the project's dependencies.
 * 'nlf' (Node License Finder) command lists the licenses used in the project.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} directory - The directory where the `npm outdated` command should be executed. Default is the current directory.
 */
function identifyLicenses(grunt, context, directory = '.') {
    const done = context.async();
    async.series(
        [
            (callback) =>
                grunt.util.spawn({ cmd: 'npx', args: ['license-checker', '--production', '--json', '--out', 'LICENSES.json'], opts: { cwd: directory } }, (error, result) => {
                    grunt.log.writeln("Created 'LICENSES.json' file.");
                    grunt.log.writeln(result.stdout);
                    callback();
                }),
            (callback) =>
                grunt.util.spawn({ cmd: 'npx', args: ['nlf', '-d'], opts: { cwd: directory } }, (error, result) => {
                    grunt.log.writeln(result.stdout);
                    callback();
                })
        ],
        () => done()
    );
}

/**
 * Runs the 'eslint' command using Grunt's util.spawn method with provided arguments and logs the output.
 * 'eslint' is a popular JavaScript linter that checks the code for potential errors and enforces coding styles.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {Array} args - Additional arguments for the ESLint command.
 */
function lintCode(grunt, context, args) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['eslint'].concat(args), opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Logs a message indicating that a specific task is not implemented.
 * @param {string} taskName - The name of the task.
 */
function logNotImplementedMessage(taskName) {
    const message = `***** ${taskName} task NOT implemented *****`;
    console.log('*'.repeat(message.length));
    console.log(message);
    console.log('*'.repeat(message.length));
}

/**
 * Runs the 'npm-check-updates -u' command to update dependencies and 'npm install' command to install the updated dependencies.
 * 'npm-check-updates' is a tool that allows you to update the project's package.json file with the latest dependency versions.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} directory - The directory where the `npx npm-check-updates` and `npm install` commands should be executed. Default is the current directory.
 */ function migrateDependencies(grunt, context, directory = '.') {
    const done = context.async();
    grunt.util.spawn({ cmd: 'npx', args: ['npm-check-updates', '-u'], opts: { cwd: directory } }, (error, result) => {
        if (error && error.message) {
            console.log(error.message);
            done(false); // Signal that the task failed.
        } else {
            grunt.log.writeln(result.stdout);
            grunt.util.spawn({ cmd: 'npm', args: ['install'], opts: { cwd: directory } }, (error, result) => {
                if (error && error.message) {
                    console.log(error.message);
                    done(false); // Signal that the task failed.
                } else {
                    grunt.log.writeln(result.stdout);
                    done(true); // Signal that the task completed successfully.
                }
            });
        }
    });
}

/**
 * Runs the 'publish' command using Grunt's util.spawn method and logs the output.
 * This command publishes the package to the npm registry.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 */
function publishPackageToNPM(grunt, context) {
    // const done = context.async();
    // grunt.util.spawn({ cmd: 'npx', args: ['publish'] }, (error, result) => {
    //     grunt.log.writeln(result.stdout);
    //     done();
    // });
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['publish'], opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Runs the Rollup bundling process using Grunt's util.spawn method and logs the output.
 * Rollup is a module bundler for JavaScript which allows you to create bundles of code from separate modules.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} configTypeId - The identifier for the Rollup configuration.
 */
function rollupCode(grunt, context, configTypeId) {
    // console.log(1111, configTypeId);
    // const done = context.async();
    // console.log(2222);
    // grunt.util.spawn({ cmd: 'npx', args: ['rollup', '-c', `rollup.config-${configTypeId}.js`, '--environment', 'BUILD:production'] }, (error, result) => {
    //     console.log(3333, error);
    //     grunt.log.writeln(result.stdout);
    //     done();
    // });
    const done = context.async();
    const childProcess = grunt.util.spawn(
        { cmd: 'npx', args: ['rollup', '-c', `rollup.config-${configTypeId}.js`, '--environment', 'BUILD:production'], opts: { stdio: 'pipe' } },
        (error, result, code) => done(code === 0)
    );
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Updates a specific dependency by installing the latest version using Grunt's util.spawn method and logs the output.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} context - The task context object.
 * @param {string} updateTypeId - The identifier for the dependency to update.
 */
function updateDataPosDependencies(grunt, context, updateTypeIds) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'] }, () => {
        async.series(
            [
                (callback) => {
                    const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', '--save-dev', '@datapos/datapos-operations@latest'] }, () => {
                        console.log('\nUpdated @datapos/datapos-operations@latest');
                        callback();
                    });
                    grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
                    grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
                },
                (callback) => {
                    if (updateTypeIds) {
                        const modules = [];
                        for (const updateTypeId of updateTypeIds.split('|')) modules.push(`@datapos/datapos-${updateTypeId}@latest`);
                        const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', ...modules] }, () => {
                            for (const module of modules) console.log(`\nUpdated ${module}`);
                            callback();
                        });
                        grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
                        grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
                    } else {
                        callback();
                    }
                }
            ],
            () => done()
        );
    });
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

module.exports = {
    auditDependencies,
    checkDependencies,
    identifyLicenses,
    lintCode,
    logNotImplementedMessage,
    migrateDependencies,
    publishPackageToNPM,
    rollupCode,
    updateDataPosDependencies
};
