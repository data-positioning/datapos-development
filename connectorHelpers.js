// Helper
async function uploadConnector(grunt, context, config, version, dataposConnectorUploadToken, projectId) {
    const done = context.async();
    const status = await upload(grunt, config, version, dataposConnectorUploadToken, projectId);
    done(status);
}

// Utility
async function upload(grunt, config, version, dataposConnectorUploadToken, projectId) {
    try {
        let descriptionEN;
        try {
            descriptionEN = grunt.file.read('src/description.en.md');
        } catch (error) {
            descriptionEN = '';
        }

        let logo;
        try {
            logo = grunt.file.read('src/logo.svg');
        } catch (error) {
            logo = '';
        }

        const formData = new FormData();

        formData.append('config', JSON.stringify({ ...config, description: { en: descriptionEN }, logo, version }));

        grunt.file.recurse('dist', (absPath, rootDir, subDir, filename) => {
            if (subDir) return;
            const contentAsBlob = new Blob([grunt.file.read(absPath)], { type: 'text/plain' });
            formData.append(filename, contentAsBlob, filename);
        });

        const url = `https://europe-west1-datapos-${projectId}.cloudfunctions.net/api/connectors`;
        const response = await fetch(url, { method: 'POST', headers: { Authorization: dataposConnectorUploadToken }, body: formData });
        if (!response.ok) throw new Error(await response.text());

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { uploadConnector };
