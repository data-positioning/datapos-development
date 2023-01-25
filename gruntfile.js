/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2022 Jonathan Terrell
 * @file datapos-operations/gruntfile.js
 * @license ISC
 */

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
            identifyLicensesUsingNLF: { args: ['nlf', '-d'], cmd: 'npx' },
            lint: { args: ['eslint', '*.js'], cmd: 'npx' },
            npmPublish: { args: ['publish'], cmd: 'npx' },
            outdated: { args: ['npm', 'outdated'], cmd: 'npx' }
        }
    });
    // Load external tasks.
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-run');

    // Register standard tasks.
    grunt.registerTask('identifyLicenses', ['run:identifyLicensesUsingLicenseChecker', 'run:identifyLicensesUsingNLF']); // cmd+shift+i.
    grunt.registerTask('lint', ['run:lint']); // cmd+shift+l.
    grunt.registerTask('npmPublish', ['run:npmPublish']); // cmd+shift+n.
    grunt.registerTask('release', ['gitadd', 'bump', 'run:npmPublish']); // cmd+shift+s.
    grunt.registerTask('synchronise', ['gitadd', 'bump']); // cmd+shift+s.
};
