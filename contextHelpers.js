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
        const formData = new FormData();

        grunt.file.recurse('dist', (absPath, rootDir, subDir, filename) => {
            if (subDir) return;
            console.log('FILE', absPath);
            const data = grunt.file.read(absPath);
            console.log('Data', data);
            const contentAsBlob = new Blob([data], { type: 'text/plain' });
            formData.append(filename, contentAsBlob, filename);
        });

        console.log(1111);
        const url = `https://europe-west1-datapos-${projectId}.cloudfunctions.net/api/contexts`;
        console.log(2222);
        const response = await fetch(url, { method: 'POST', headers: { Authorization: dataposContextUploadToken }, body: formData });
        console.log(3333);
        if (!response.ok) throw new Error(await response.text());

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { buildContext, uploadContext };
