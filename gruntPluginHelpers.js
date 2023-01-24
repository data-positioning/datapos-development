/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2022 Jonathan Terrell
 * @file datapos-operations/gruntPluginHelpers.js
 * @license ISC
 */

// Vendor Dependencies
const sanityClient = require('@sanity/client');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getConnectorConfig(config, version, description, logo) {
    return {
        categoryId: config.categoryId,
        id: config.id,
        implementations: config.implementations,
        label: config.label,
        logo: logo || null,
        logoWidth: null,
        narrative: description || null,
        reference: `plugins%2Fconnectors%2F${config.usage === 'node' ? 'node' : 'data'}%2F${config.id}`,
        statusId: config.statusId,
        summary: config.summary,
        typeId: config.typeId,
        usageId: config.usageId,
        version: `v${version}`
    };
}

function getContextModelConfig(config, version) {
    return {
        categoryId: config.categoryId,
        dimensionCategories: config.dimensionCategories,
        dimensions: config.dimensions,
        entities: config.entities,
        id: config.id,
        label: config.label,
        measureCategories: config.measureCategories,
        measures: config.measures,
        presentationCategories: config.presentationCategories,
        presentations: config.presentations,
        reference: `plugins%2FcontextModels%2F${config.id}`,
        statusId: config.statusId,
        summary: config.summary,
        typeId: config.typeId,
        version: `v${version}`
    };
}

function getUsageKitConfig(config, version) {
    return {
        categoryId: config.categoryId,
        id: config.id,
        label: config.label,
        reference: `plugins%2FusageKits%2F${config.id}`,
        statusId: config.statusId,
        summary: config.summary,
        typeId: config.typeId,
        version: `v${version}`
    };
}

async function loadConnector(grunt, config, firebaseAPIKey, firebaseEmailAddress, firebasePassword, firebaseProjectId, sanityAPIToken, fetchModule) {
    try {
        const sanityAPIVersion = '2021-08-29';
        const sanityDataSetName = 'library-production';
        const sanityProjectId = 'yxr5xjfo';

        // Sign in to firebase.
        const firebaseSignInResponse = await fetchModule.default(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPIKey}`, {
            body: JSON.stringify({ email: firebaseEmailAddress, password: firebasePassword, returnSecureToken: true }),
            headers: { Referer: `${firebaseProjectId}.web.app` },
            method: 'POST'
        });
        if (!firebaseSignInResponse.ok) {
            console.log(firebaseSignInResponse.status, firebaseSignInResponse.statusText, await firebaseSignInResponse.text());
            return false;
        }
        const firebaseSignInResult = await firebaseSignInResponse.json();
        console.log('Authenticated with Firebase.');

        // Retrieve description and logo.
        const description = grunt.file.read('./src/description.md');
        const logo = grunt.file.read('./src/logo.svg');

        // Upsert connector record in application service database (firestore).
        const firebaseUpsertResponse = await fetchModule.default(`https://europe-west1-${firebaseProjectId}.cloudfunctions.net/api/plugins`, {
            body: JSON.stringify(getConnectorConfig(config, grunt.config.data.pkg.version, description, logo)),
            headers: { Authorization: firebaseSignInResult.idToken, 'Content-Type': 'application/json' },
            method: 'POST'
        });
        if (!firebaseUpsertResponse.ok) {
            console.log(firebaseUpsertResponse.status, firebaseUpsertResponse.statusText, await firebaseUpsertResponse.text());
            return false;
        }
        console.log('Loaded connector instance to Firestore database.');

        // const query = '*[_type == "dataStore" %26%26 label == "File Store Emulator"]{ icon }';
        // const sanityLookupResponse = await fetchModule.default(`https://yxr5xjfo.api.sanity.io/v2021-10-21/data/query/library-production?query=${query}`);
        // if (!sanityLookupResponse.ok) {
        //     console.log(sanityLookupResponse.status, sanityLookupResponse.statusText, await sanityLookupResponse.text());
        //     return false;
        // }
        // const sanityLookupResult = await sanityLookupResponse.json();
        // console.log(JSON.stringify(sanityLookupResult));
        // let referenceIdToDelete = undefined;
        // if (sanityLookupResult.result.length === 0) {
        //     console.log('Creating new Sanity document.');
        // } else {
        //     console.log('Updating existing Sanity document.');
        //     const icon = sanityLookupResult.result[0].icon;
        //     if (icon) {
        //         referenceIdToDelete = icon.asset._ref;
        //         console.log(`Image to be deleted '${referenceIdToDelete}'`);
        //         // const sanityClientConfig = { projectId: sanityProjectId, dataset: sanityDataSetName, apiVersion: sanityAPIVersion, token: sanityAPIToken };
        //         // const client = sanityClient(sanityClientConfig);
        //         // const deleteResponse = await client.delete(referenceId);
        //         // console.log('deleteResponse', deleteResponse);
        //     }
        // }

        const sanityURL = `https://${sanityProjectId}.api.sanity.io/${sanityAPIVersion}/assets/images/${sanityDataSetName}`;

        let imageId = undefined;
        if (logo) {
            const uploadSanityImageResponse = await fetchModule.default(sanityURL, {
                headers: { Authorization: `Bearer ${sanityAPIToken}`, 'Content-Type': 'image/jpeg' },
                body: logo,
                method: 'POST'
            });
            console.log('uploadSanityImageResponse', uploadSanityImageResponse);
            const uploadSanityImageResult = await uploadSanityImageResponse.json();
            console.log('uploadSanityImageResult', JSON.stringify(uploadSanityImageResult));
            imageId = uploadSanityImageResult.document._id;
            console.log(imageId);
        }

        // Upsert Sanity document.
        const createOrReplace = {
            _id: config.id,
            _type: 'dataStore',
            category: config.categoryId,
            description,
            icon: imageId ? { asset: { _ref: imageId }, _type: 'reference' } : undefined,
            label: config.label,
            logo,
            status: config.statusId,
            usage: config.usageId
        };
        const sanityUpsertResponse = await fetchModule.default(sanityURL, {
            body: JSON.stringify({ mutations: [{ createOrReplace }] }),
            headers: { Authorization: `Bearer ${sanityAPIToken}`, 'Content-Type': 'application/json' },
            method: 'POST'
        });
        if (!sanityUpsertResponse.ok) {
            console.log(sanityUpsertResponse.status, sanityUpsertResponse.statusText, await sanityUpsertResponse.text());
            return false;
        }
        console.log('Loaded connector document to Sanity dataset.');

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function loadContextModel(grunt, config, firebaseAPIKey, firebaseEmailAddress, firebasePassword, firebaseProjectId, sanityAPIToken, fetchModule) {
    console.log('loadContextModel NOT implemented.');
}

async function loadUsageKit(grunt, config, firebaseAPIKey, firebaseEmailAddress, firebasePassword, firebaseProjectId, sanityAPIToken, fetchModule) {
    console.log('loadUsageKit NOT implemented.');
}

module.exports = { loadConnector, loadContextModel, loadUsageKit };
