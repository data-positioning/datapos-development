// Helper
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
            console.log('FILE', absPath, rootDir, subDir, filename);
            if (subDir) return;
            const contentAsBlob = new Blob([grunt.file.read(absPath)], { type: 'text/plain' });
            formData.append(filename, contentAsBlob, filename);
        });

        // const url = `https://europe-west1-datapos-${projectId}.cloudfunctions.net/api/connectors`;
        // const response = await fetch(url, { method: 'POST', headers: { Authorization: dataposContextUploadToken }, body: formData });
        // if (!response.ok) throw new Error(await response.text());

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { uploadContext };
