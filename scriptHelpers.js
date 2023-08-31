const exec = require('child_process').exec;
const fs = require('fs');

function syncWithGitHub(filePaths) {
    for (const filePath of filePaths) {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) return console.error(error);
            const dataAsJSON = JSON.parse(data);
            const versionSegments = dataAsJSON.version.split('.');
            const newVersion = `${versionSegments[0]}.${versionSegments[1]}.${Number(versionSegments[2]) + 1}`;
            dataAsJSON.version = newVersion;
            fs.writeFile(filePath, JSON.stringify(dataAsJSON, undefined, 4), (error) => {
                if (error) return console.error(error);
                exec('git add .', (error, stdout, stderr) => {
                    if (stderr) return console.error(stderr);
                    console.log(stdout);
                    exec(`git commit -m v${newVersion}`, (error, stdout, stderr) => {
                        if (stderr) return console.error(stderr);
                        console.log(stdout);
                        exec('git push origin main:main', (error, stdout, stderr) => {
                            if (stderr) return console.error(stderr);
                            console.log(stdout);
                        });
                    });
                });
            });
        });
    }
}

module.exports = { syncWithGitHub };
