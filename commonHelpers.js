// function buildDataIndex(grunt, context, fs, dataPath) {
//     const index = {};

//     const processDirectory = (topLevelPath, path, parentItem) => {
//         let itemCount = 0;
//         const searchPath = `${path}/*`;
//         for (const childPath of grunt.file.expand({ filter: 'isDirectory' }, searchPath)) {
//             const childCount = processDirectory(topLevelPath, childPath, []);
//             parentItem.push({ childCount, path: childPath.substr(path.length + 1), typeId: 'folder' });
//             itemCount++;
//         }
//         for (const childPath of grunt.file.expand({ filter: 'isFile' }, searchPath)) {
//             var stats = fs.statSync(childPath);
//             parentItem.push({ lastModifiedAt: stats.mtimeMs, path: childPath.substr(path.length + 1), size: stats.size, typeId: 'file' });
//             itemCount++;
//         }
//         index[path === topLevelPath ? '/' : `/${path.substr(topLevelPath.length + 1)}`] = parentItem;
//         return itemCount;
//     };

//     const folderPath = `public/${dataPath}`;
//     processDirectory(folderPath, folderPath, []);
//     grunt.file.write(`public/${dataPath}Index.json`, JSON.stringify(index));
// }

function syncWithGitHub(filePaths) {
    const exec = require('child_process').exec;
    const fs = require('fs');
    try {
        for (const filePath of filePaths) {
            fs.readFile(filePath, 'utf8', (error, data) => {
                try {
                    if (error) throw error;
                    const dataAsJSON = JSON.parse(data);
                    const versionSegments = dataAsJSON.version.split('.');
                    const newVersion = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
                    dataAsJSON.version = newVersion;
                    fs.writeFile(filePath, JSON.stringify(dataAsJSON, undefined, 4), (error) => {
                        if (error) console.error(error);
                        exec('git add .', (error, stdout, stderr) => {
                            if (stderr) {
                                console.error(stderr);
                                return;
                            }
                            console.log(stdout);
                            exec(`git commit -m v${newVersion}`, (error, stdout, stderr) => {
                                if (stderr) {
                                    console.error(stderr);
                                    return;
                                }
                                console.log(stdout);
                                exec('git push origin main:main', (error, stdout, stderr) => {
                                    if (stderr) {
                                        console.error(stderr);
                                        return;
                                    }
                                    console.log(stdout);
                                });
                            });
                        });
                    });
                } catch (error) {
                    console.error(error);
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}

// // Helper
// // TODO: Add directory parameter so backend can update functions directory.
// // TODO: Given we are already passing a parameter array of 'updateTypeIds' we need to include directory as first parameter.
// // TODO: This will require all projects to be updated.
// function updateDataPosDependencies(grunt, context, updateTypeIds) {
//     const done = context.async();
//     const childProcess = grunt.util.spawn({ cmd: 'npm', args: ['outdated'] }, () => {
//         // async.parallel(
//         //     [
//         //         (callback) => {
//         //             const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', '--save-dev', '@datapos/datapos-operations@latest'] }, (error) => {
//         //                 console.log('\nUpdated: @datapos/datapos-operations@latest');
//         //                 callback(error);
//         //             });
//         //             grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
//         //             grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
//         //         },
//         //         (callback) => {
//         //             if (updateTypeIds) {
//         //                 const modules = [];
//         //                 for (const updateTypeId of updateTypeIds.split('|')) modules.push(`@datapos/datapos-${updateTypeId}@latest`);
//         //                 const grandChildProcess = grunt.util.spawn({ cmd: 'npm', args: ['install', ...modules] }, (error) => {
//         //                     for (const module of modules) console.log(`\nUpdated: ${module}`);
//         //                     callback(error);
//         //                 });
//         //                 grandChildProcess.stdout.on('data', (data) => process.stdout.write(data));
//         //                 grandChildProcess.stderr.on('data', (data) => process.stderr.write(data));
//         //             } else {
//         //                 callback(null);
//         //             }
//         //         }
//         //     ],
//         //     (error) => done(error ? false : true)
//         // );
//     });
//     childProcess.stderr.on('data', (data) => process.stderr.write(data));
// }

module.exports = { syncWithGitHub };
