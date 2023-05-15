/**
 * @file datapos-operations/connectorHelpers.js
 * @description Connector helper functions used by project management tasks.
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function uploadConnector(grunt, config, fetch, dataposConnectorUploadToken, projectId) {
    try {
        const formData = new FormData();

        formData.append('configuration', JSON.stringify(config));

        let description;
        try {
            description = grunt.file.read('src/description.md');
        } catch (error) {
            description = '';
        }
        formData.append('description', description);

        let logo;
        try {
            logo = grunt.file.read('src/logo.svg');
        } catch (error) {
            logo = '';
        }
        formData.append('logo', logo);

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
