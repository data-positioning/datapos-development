// Helper - Build Context
async function buildContext(grunt, context, dataposContextUploadToken, projectId) {
    const done = context.async();
    const status = await upload(grunt, dataposContextUploadToken, projectId);
    done(status);
}

// Utility
const processDirectory = (grunt, dirPath) => {};

// Utility
const readJSONFile = (grunt, filePath) => {};

// Utility
const readMarkdownFile = (grunt, filePath) => {};

// Helper - Upload Context
async function uploadContext(grunt, context, dataposContextUploadToken, projectId) {
    const done = context.async();
    const status = await upload(grunt, dataposContextUploadToken, projectId);
    done(status);
}

// Utility
async function upload(grunt, dataposContextUploadToken, projectId) {
    try {
        // const formData = new FormData();

        const files = [];
        grunt.file.recurse('dist', (absPath, rootDir, subDir, filename) => {
            if (subDir) return;
            // const data = grunt.file.read(absPath);
            // const contentAsBlob = new Blob([data], { type: 'text/plain' });
            // formData.append(filename, contentAsBlob, filename);
            files.push({ absPath, filename });
        });

        for (const file of files) {
            console.log(1111, file.filename);
            const data = JSON.parse(grunt.file.read(file.absPath));
            const url = `https://europe-west1-datapos-${projectId}.cloudfunctions.net/api/contexts`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { Authorization: dataposContextUploadToken, 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: file.filename.slice(0, -5), config: data })
            });
            if (!response.ok) throw new Error(await response.text());
        }
        console.log(9999);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { buildContext, uploadContext };
