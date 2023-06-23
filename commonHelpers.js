// Dependencies - Framework/Vendor
const async = require('async');

// Helper
function auditDependencies(grunt, context, directory = '.') {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['audit'], opts: { cwd: directory, stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

// Helper
function buildDataIndex(grunt, context, fs, dataPath) {
    const index = {};

    // Utility
    const processDirectory = (topLevelPath, path, parentItem) => {
        let childCount = 0;
        const searchPath = `${path}/*`;
        for (const childPath of grunt.file.expand({ filter: 'isDirectory' }, searchPath)) {
            processDirectory(topLevelPath, childPath, []);
            parentItem.push({ path: childPath.substr(path.length + 1), typeId: 'folder' });
            childCount++;
        }
        for (const childPath of grunt.file.expand({ filter: 'isFile' }, searchPath)) {
            var stats = fs.statSync(childPath);
            parentItem.push({ lastModifiedAt: stats.mtimeMs, path: childPath.substr(path.length + 1), size: stats.size, typeId: 'file' });
            childCount++;
        }
        index[path === topLevelPath ? '/' : `/${path.substr(topLevelPath.length + 1)}`] = parentItem;
        console.log(searchPath, childCount);
        return childCount;
    };

    const folderPath = `public/${dataPath}`;
    processDirectory(folderPath, folderPath, []);
    grunt.file.write(`public/${dataPath}Index.json`, JSON.stringify(index));
}

// Helper
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
                console.log('\nCheck for unused and missing dependencies (dynamically imported dependencies maybe reported as unused or missing)...\n');
                const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['depcheck'], opts: { cwd: directory } }, () => callback(undefined));
                childProcess.stdout.on('data', (data) => process.stdout.write(data));
                childProcess.stderr.on('data', (data) => process.stderr.write(data));
            }
        ],
        (error) => done(error ? false : true)
    );
}

// Helper
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

// Helper
function lintCode(grunt, context, args) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['eslint'].concat(args), opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

// Helper
function logNotImplementedMessage(taskName) {
    const message = `***** ${taskName} task NOT implemented *****`;
    console.log('*'.repeat(message.length));
    console.log(message);
    console.log('*'.repeat(message.length));
}

// Helper
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

// Helper
function publishPackageToNPM(grunt, context) {
    const done = context.async();
    const childProcess = grunt.util.spawn({ cmd: 'npx', args: ['publish'], opts: { stdio: 'pipe' } }, (error, result, code) => done(code === 0));
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

// Helper
function rollupCode(grunt, context, configTypeId) {
    const done = context.async();
    const childProcess = grunt.util.spawn(
        { cmd: 'npx', args: ['rollup', '-c', `rollup.config-${configTypeId}.js`, '--environment', 'BUILD:production'], opts: { stdio: 'pipe' } },
        (error, result, code) => done(code === 0)
    );
    childProcess.stdout.on('data', (data) => process.stdout.write(data));
    childProcess.stderr.on('data', (data) => process.stderr.write(data));
}

// Helper
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
    buildDataIndex,
    checkDependencies,
    identifyLicenses,
    lintCode,
    logNotImplementedMessage,
    migrateDependencies,
    publishPackageToNPM,
    rollupCode,
    updateDataPosDependencies
};
