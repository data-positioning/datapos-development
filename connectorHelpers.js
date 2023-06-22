/**
 * Connector helper functions used by project management tasks.
 */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Uploads a connector using the specified parameters.
 *
 * @param {Object} grunt - The Grunt task runner.
 * @param {Object} context - The context object.
 * @param {Object} config - The configuration object.
 * @param {string} version - The version of the connector.
 * @param {string} dataposConnectorUploadToken - The upload token for the connector.
 * @param {string} projectId - The ID of the project.
 * @returns {Promise} A promise that resolves with the status of the upload.
 */
async function uploadConnector(grunt, context, config, version, dataposConnectorUploadToken, projectId) {
    const done = context.async();
    const status = await upload(grunt, config, version, dataposConnectorUploadToken, projectId);
    done(status);
}

/**
 * Uploads a connector to the Data Positioning platform.
 * @param {Object} grunt - The Grunt object.
 * @param {Object} config - The configuration object for the connector.
 * @param {string} dataposConnectorUploadToken - The authorization token for uploading the connector.
 * @param {string} projectId - The ID of the project where the connector should be uploaded.
 * @returns {Promise<boolean>} - A Promise that resolves to true if the connector upload is successful, otherwise false.
 */
async function upload(grunt, config, version, dataposConnectorUploadToken, projectId) {
    try {
        // Read the description file and append contents to the form object as a text field.
        let description;
        try {
            description = grunt.file.read('src/description.md');
        } catch (error) {
            description = '';
        }

        // Read the logo file and append contents to the form object as a text field.
        let logo;
        try {
            logo = grunt.file.read('src/logo.svg');
        } catch (error) {
            logo = '';
        }

        const formData = new FormData();

        // Append the configuration to the form data object as a text field.
        formData.append('configuration', JSON.stringify({ ...config, description, logo, version }));
        // formData.append('description', description);
        // formData.append('logo', logo);

        // Loop through the 'dist' directory and append the contents of each file as a blob field.
        grunt.file.recurse('dist', (absPath, rootDir, subDir, filename) => {
            if (subDir) return;
            const contentAsBlob = new Blob([grunt.file.read(absPath)], { type: 'text/plain' });
            formData.append(filename, contentAsBlob, filename);
        });

        // Make a request to the Data Positioning endpoint to upload the connector.
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
