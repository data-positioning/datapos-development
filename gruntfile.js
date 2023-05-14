/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-operations/gruntfile.js
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 */

const { checkDependencies, logNotImplementedMessage, lintCode, publishToNPM } = require('./commonHelpers');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Initialisation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = (grunt) => {
    // Initialise configuration.
    grunt.initConfig({
        bump: { options: { commitFiles: ['-a'], commitMessage: 'Release v%VERSION%', pushTo: 'origin' } },
        gitadd: { task: { options: { all: true } } },
        run: {
            identifyLicensesUsingLicenseChecker: { args: ['license-checker', '--production', '--json', '--out', 'LICENSES.json'], cmd: 'npx' },
            identifyLicensesUsingNLF: { args: ['nlf', '-d'], cmd: 'npx' }
            // lint: { args: ['eslint', '*.js'], cmd: 'npx' }
            // publishToNPM: { args: ['publish'], cmd: 'npx' }
        }
    });

    // Load external tasks.
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-run');

    // Register local tasks.
    grunt.registerTask('checkDependencies', function () {
        checkDependencies(grunt, this);
    });
    grunt.registerTask('lintCode', function () {
        lintCode(grunt, this, ['*.js']);
    });
    grunt.registerTask('logNotImplementedMessage', (taskName) => logNotImplementedMessage(taskName));
    grunt.registerTask('publishToNPM', function () {
        publishToNPM(grunt, this);
    });

    // Register common repository management tasks. These tasks are all invoked by VSCode keyboard shortcuts.
    grunt.registerTask('build', ['logNotImplementedMessage:Build']); // alt+ctrl+shift+b.
    grunt.registerTask('check', ['checkDependencies']); // alt+ctrl+shift+c.
    grunt.registerTask('document', ['run:identifyLicensesUsingLicenseChecker', 'run:identifyLicensesUsingNLF']); // alt+ctrl+shift+d.
    grunt.registerTask('format', ['logNotImplementedMessage:Format']); // alt+ctrl+shift+f.
    grunt.registerTask('lint', ['lintCode']); // alt+ctrl+shift+l.
    grunt.registerTask('publish', ['publishToNPM']); // alt+ctrl+shift+p.
    grunt.registerTask('release', ['gitadd', 'bump', 'runPublishToNPM']); // alt+ctrl+shift+r.
    grunt.registerTask('synchronise', ['gitadd', 'bump']); // alt+ctrl+shift+s.
    grunt.registerTask('test', ['logNotImplementedMessage:Test']); // alt+ctrl+shift+t.
    grunt.registerTask('update', ['logNotImplementedMessage:Update']); // alt+ctrl+shift+u.
};
