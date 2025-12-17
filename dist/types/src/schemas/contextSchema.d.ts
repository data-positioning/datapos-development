/**
 * Created by asking Copilot to generate a 'valibot' schema for the 'ContextConfig' interface.
 */
export declare const contextConfigSchema: import('valibot').ObjectSchema<{
    readonly typeId: import('valibot').LiteralSchema<"context", undefined>;
    readonly version: import('valibot').StringSchema<undefined>;
    readonly models: import('valibot').ArraySchema<import('valibot').ObjectSchema<{
        readonly typeId: import('valibot').LiteralSchema<"contextModelGroup", undefined>;
        readonly modelRefs: import('valibot').ArraySchema<import('valibot').ObjectSchema<{
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
            readonly icon: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
            readonly iconDark: import('valibot').OptionalSchema<import('valibot').StringSchema<undefined>, undefined>;
            readonly order: import('valibot').NumberSchema<undefined>;
            readonly path: import('valibot').StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly order: import('valibot').NumberSchema<undefined>;
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
    }, undefined>, undefined>;
    readonly operations: import('valibot').ArraySchema<import('valibot').UnionSchema<import('valibot').UnionOptions, import('valibot').ErrorMessage<import('valibot').UnionIssue<import('valibot').BaseIssue<unknown>>> | undefined>, undefined>;
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
}, undefined>;
