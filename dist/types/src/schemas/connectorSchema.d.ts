/**
 * Created by asking Copilot to generate a 'valibot' schema for the 'ConnectorConfig' interface.
 */
export declare const connectorConfigSchema: import('valibot').ObjectSchema<{
    readonly id: import('valibot').StringSchema<undefined>;
    readonly label: import('valibot').ObjectSchema<{
        readonly 'en-au': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'en-gb': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'en-us': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'es-es': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly description: import('valibot').ObjectSchema<{
        readonly 'en-au': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'en-gb': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'en-us': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly 'es-es': import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly firstCreatedAt: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
    readonly icon: import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly iconDark: import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly lastUpdatedAt: import('valibot').NullableSchema<import('valibot').NumberSchema<undefined>, undefined>;
    readonly status: import('valibot').NullableSchema<import('valibot').ObjectSchema<{
        readonly id: import('valibot').StringSchema<undefined>;
        readonly color: import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>;
        readonly label: import('valibot').StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly statusId: import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>;
    readonly typeId: import('valibot').LiteralSchema<"connector", undefined>;
    readonly version: import('valibot').StringSchema<undefined>;
    readonly category: import('valibot').NullableSchema<import('valibot').ObjectSchema<{
        readonly id: import('valibot').StringSchema<undefined>;
        readonly label: import('valibot').StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly categoryId: import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>;
    readonly implementations: import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').ObjectSchema<{
        readonly authMethodId: import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>;
        readonly activeConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
        readonly canDescribe: import('valibot').OptionalSchema<import('valibot').BooleanSchema<undefined>, undefined>;
        readonly id: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
        readonly label: import('valibot').OptionalSchema<import('valibot').ObjectSchema<{
            readonly 'en-au': import('valibot').StringSchema<undefined>;
            readonly 'en-gb': import('valibot').StringSchema<undefined>;
            readonly 'en-us': import('valibot').StringSchema<undefined>;
            readonly 'es-es': import('valibot').StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly maxConnectionCount: import('valibot').OptionalSchema<import('valibot').NumberSchema<undefined>, undefined>;
        readonly params: import('valibot').OptionalSchema<import('valibot').ArraySchema<import('valibot').RecordSchema<import('valibot').StringSchema<undefined>, import('valibot').StringSchema<undefined>, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly operations: import('valibot').ArraySchema<import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>, undefined>;
    readonly usageId: import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>;
    readonly vendorAccountURL: import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly vendorDocumentationURL: import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>;
    readonly vendorHomeURL: import('valibot').NullableSchema<import('valibot').StringSchema<undefined>, undefined>;
}, undefined>;
