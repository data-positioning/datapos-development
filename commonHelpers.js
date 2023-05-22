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

function auditDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['audit'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

function checkDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

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

function lintCode(grunt, context, args) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['eslint'].concat(args), opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

function logNotImplementedMessage(taskName) {
    const message = `***** ${taskName} task NOT implemented *****`;
    console.log('*'.repeat(message.length));
    console.log(message);
    console.log('*'.repeat(message.length));
}

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

function publishPackageToNPM(grunt, context) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['publish'], opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

function rollupCode(grunt, context, configTypeId) {
    const done = context.async();
    const childProcess = grunt.util.spawn(
        { cmd: 'npx', args: ['rollup', '-c', `rollup.config-${configTypeId}.js`, '--environment', 'BUILD:production'], opts: { stdio: 'pipe' } },
        (error, result, code) => done(code === 0)
    );
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

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
