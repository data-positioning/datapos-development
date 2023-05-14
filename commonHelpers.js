/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-operations/commonHelpers.js
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function checkDependencies(grunt, context) {
    const done = context.async();
    grunt.util.spawn({ cmd: 'npm', args: ['outdated'] }, (error, result) => {
        grunt.log.writeln(result.stdout);
        done();
    });
}

function logNotImplementedMessage(taskName) {
    const message = `***** ${taskName} task NOT implemented *****`;
    console.log('*'.repeat(message.length));
    console.log(message);
    console.log('*'.repeat(message.length));
}

function lintCode(grunt, context, args) {
    const done = context.async();
    grunt.util.spawn({ cmd: 'npx', args: ['eslint'].concat(args) }, (error, result) => {
        grunt.log.writeln(result.stdout);
        done();
    });
}

function publishToNPM(grunt, context) {
    const done = context.async();
    grunt.util.spawn({ cmd: 'npx', args: ['publish'] }, (error, result) => {
        grunt.log.writeln(result.stdout);
        done();
    });
}

module.exports = { checkDependencies, logNotImplementedMessage, lintCode, publishToNPM };
