export declare const connectorImplementationSchema: import('valibot').ObjectSchema<{
    readonly activeConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
    readonly canDescribe: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
    readonly id: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly authMethodId: import('valibot').PicklistSchema<readonly ["apiKey", "disabled", "oAuth2", "none"], undefined>;
    readonly label: import('valibot').OptionalSchema<import('valibot').RecordSchema<import('valibot').PicklistSchema<readonly ["en-au", "en-gb", "en-us", "es-es"], undefined>, import('valibot').StringSchema<undefined>, undefined>, undefined>;
    readonly maxConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
    readonly params: import('valibot').OptionalSchema<import('valibot').ArraySchema<import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').StringSchema<undefined>, undefined>, undefined>, undefined>;
}, undefined>;
export declare const connectorConfigSchema: import('valibot').ObjectSchema<{
    readonly category: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').ObjectSchema<{
        readonly id: import('valibot').StringSchema<undefined>;
        readonly label: import('valibot').StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly categoryId: import('valibot').PicklistSchema<readonly ["application", "curatedDataset", "database", "fileStore"], undefined>;
    readonly implementations: import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').ObjectSchema<{
        readonly activeConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
        readonly canDescribe: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
        readonly id: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly authMethodId: import('valibot').PicklistSchema<readonly ["apiKey", "disabled", "oAuth2", "none"], undefined>;
        readonly label: import('valibot').OptionalSchema<import('valibot').RecordSchema<import('valibot').PicklistSchema<readonly ["en-au", "en-gb", "en-us", "es-es"], undefined>, import('valibot').StringSchema<undefined>, undefined>, undefined>;
        readonly maxConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
        readonly params: import('valibot').OptionalSchema<import('valibot').ArraySchema<import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').StringSchema<undefined>, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly operations: import('valibot').ArraySchema<import('valibot').PicklistSchema<readonly ["abortOperation", "authenticateConnection", "createObject", "describeConnection", "dropObject", "findObject", "getRecord", "listNodes", "previewObject", "removeRecords", "retrieveRecords", "upsertRecords"], undefined>, undefined>;
    readonly typeId: import('valibot').LiteralSchema<"connector", undefined>;
    readonly usageId: import('valibot').PicklistSchema<readonly ["bidirectional", "destination", "source", "unknown"], undefined>;
    readonly vendorAccountURL: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>, undefined>;
    readonly vendorDocumentationURL: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>, undefined>;
    readonly vendorHomeURL: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>, undefined>;
    readonly version: import('valibot').StringSchema<undefined>;
    readonly id: import('valibot').StringSchema<undefined>;
    readonly label: import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').StringSchema<undefined>, undefined>;
    readonly description: import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').StringSchema<undefined>, undefined>;
    readonly firstCreatedAt: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
    readonly icon: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly iconDark: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly lastUpdatedAt: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').NumberSchema<undefined>, undefined>, undefined>;
    readonly status: import('valibot').OptionalSchema<import('valibot').NullableSchema<import('valibot').ObjectSchema<{
        readonly id: import('valibot').StringSchema<undefined>;
        readonly color: import('valibot').PicklistSchema<readonly ["amber", "green", "red", "other"], undefined>;
        readonly label: import('valibot').StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly statusId: import('valibot').PicklistSchema<readonly ["alpha", "beta", "generalAvailability", "notApplicable", "preAlpha", "proposed", "releaseCandidate", "unavailable", "underReview"], undefined>;
}, undefined>;
