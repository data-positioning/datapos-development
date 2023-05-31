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
 * Runs the npm audit command to check for vulnerabilities in project dependencies.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} [directory='.'] - The directory path where the npm audit command will be executed. Defaults to the current directory.
 * @returns {void}
 */
function auditDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['audit'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Runs the npm outdated command and the depcheck command to check for outdated and redundant dependencies in the project.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} [directory='.'] - The directory path where the npm outdated command will be executed. Defaults to the current directory.
 * @returns {void}
 */
function checkDependencies(grunt, context, directory = '.') {
    const done = context.async();
    async.series(
        [
            (callback) => {
                console.log('\nCheck for outdated dependencies...\n');
                const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'], opts: { cwd: directory } }, () => callback(undefined));
                childProcess.stdout.on('data', (data) => process.stdout.write(data));
                childProcess.stderr.on('data', (data) => process.stderr.write(data));
            },
            (callback) => {
                console.log('\nCheck for unused and missing dependencies...\n');
                const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['depcheck'], opts: { cwd: directory } }, () => callback(undefined));
                childProcess.stdout.on('data', (data) => process.stdout.write(data));
                childProcess.stderr.on('data', (data) => process.stderr.write(data));
            }
        ],
        (error) => done(error ? false : true)
    );
}

/**
 * Runs license-checker and nlf commands to identify licenses used by project dependencies.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} [directory='.'] - The directory path where the commands will be executed. Defaults to the current directory.
 * @returns {void}
 */
function identifyLicenses(grunt, context, directory = '.') {
    const done = context.async();
    async.parallel(
        [
            (callback) => {
                const childProcess = grunt.util.spawn(
                    { cmd: 'npx', args: ['license-checker', '--production', '--json', '--out', 'LICENSES.json'], opts: { cwd: directory } },
                    (error) => callback(error)
                );
                childProcess.stderr.on('data', (data) => process.stderr.write(data));
            },
            (callback) => {
                const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['nlf', '-d'], opts: { cwd: directory } }, (error) => callback(error));
                childProcess.stdout.on('data', (data) => process.stdout.write(data));
                childProcess.stderr.on('data', (data) => process.stderr.write(data));
            }
        ],
        (error) => done(error ? false : true)
    );
}

/**
 * Runs ESLint to perform linting on code using specified arguments.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string[]} args - An array of additional arguments to be passed to ESLint.
 * @returns {void}
 */
function lintCode(grunt, context, args) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['eslint'].concat(args), opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Logs a "task not implemented" message to the console.
 *
 * @param {string} taskName - The name of the task that is not implemented.
 * @returns {void}
 */
function logNotImplementedMessage(taskName) {
    const message = `***** ${taskName} task NOT implemented *****`;
    console.log('*'.repeat(message.length));
    console.log(message);
    console.log('*'.repeat(message.length));
}

/**
 * Upgrades project dependencies using npm-check-updates and installs the updated dependencies using npm.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} [directory='.'] - The directory path where the commands will be executed. Defaults to the current directory.
 * @returns {void}
 */
function migrateDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['npm-check-updates', '-u'], opts: { cwd: directory } }, (error, result, code) => {
        if (code !== 0) {
            done(false); // Signal that the task failed.
        } else {
            const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install'], opts: { cwd: directory } }, (error, result, code) => done(code === 0));
            grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
            grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
        }
    });
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Publishes the package to the npm registry using the `npm publish` command.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @returns {void}
 */
function publishPackageToNPM(grunt, context) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['publish'], opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Uses Rollup to bundle the code based on the specified configuration type.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} configTypeId - The identifier of the Rollup configuration to use.
 * @returns {void}
 */
function rollupCode(grunt, context, configTypeId) {
    const done = context.async();
    const childProcess = grunt.util.spawn(
        { cmd: 'npx', args: ['rollup', '-c', `rollup.config-${configTypeId}.js`, '--environment', 'BUILD:production'], opts: { stdio: 'pipe' } },
        (error, result, code) => done(code === 0)
    );
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

/**
 * Updates Data Positioning dependencies based on the specified update type identifiers.
 *
 * @param {object} grunt - The Grunt instance.
 * @param {object} context - The Grunt task context.
 * @param {string} updateTypeIds - Pipe-separated string of update type identifiers.
 * @returns {void}
 */
function updateDataPosDependencies(grunt, context, updateTypeIds) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'] }, () => {
        async.parallel(
            [
                (callback) => {
                    const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', '--save-dev', '@datapos/datapos-operations@latest'] }, (error) => {
                        console.log('\nUpdated: @datapos/datapos-operations@latest');
                        callback(error);
                    });
                    grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
                    grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
                },
                (callback) => {
                    if (updateTypeIds) {
                        const modules = [];
                        for (const updateTypeId of updateTypeIds.split('|')) modules.push(`@datapos/datapos-${updateTypeId}@latest`);
                        const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', ...modules] }, (error) => {
                            for (const module of modules) console.log(`\nUpdated: ${module}`);
                            callback(error);
                        });
                        grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
                        grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
                    } else {
                        callback(null);
                    }
                }
            ],
            (error) => done(error ? false : true)
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
