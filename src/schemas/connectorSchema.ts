/**
 * Created by asking Copilot to generate a 'valibot' schema for the 'ConnectorConfig' interface.
 */

import { array, boolean, literal, nullable, number, object, optional, record, string, union } from 'valibot';

const literalUnion = (values: readonly string[]): ReturnType<typeof union> => union(values.map((value) => literal(value)));

const statusColorIdSchema = literalUnion(['amber', 'green', 'red', 'other'] as const);
const componentStatusIdSchema = literalUnion([
    'alpha',
    'beta',
    'generalAvailability',
    'notApplicable',
    'preAlpha',
    'proposed',
    'releaseCandidate',
    'unavailable',
    'underReview'
] as const);
const connectorModuleCategoryIdSchema = literalUnion(['application', 'curatedDataset', 'database', 'fileStore'] as const);
const connectorOperationSchema = literalUnion([
    'abortOperation',
    'authenticateConnection',
    'createObject',
    'describeConnection',
    'dropObject',
    'findObject',
    'getRecord',
    'listNodes',
    'previewObject',
    'removeRecords',
    'retrieveRecords',
    'upsertRecords'
] as const);
const connectorUsageIdSchema = literalUnion(['bidirectional', 'destination', 'source', 'unknown'] as const);
const connectorAuthMethodIdSchema = literalUnion(['apiKey', 'disabled', 'oAuth2', 'none'] as const);

const localisedStringSchema = object({
    'en-au': string(),
    'en-gb': string(),
    'en-us': string(),
    'es-es': string()
});
const partialLocalisedStringSchema = object({
    'en-au': optional(string()),
    'en-gb': optional(string()),
    'en-us': optional(string()),
    'es-es': optional(string())
});
const componentStatusSchema = object({
    id: string(),
    color: statusColorIdSchema,
    label: string()
});
const connectorCategorySchema = object({
    id: string(),
    label: string()
});
const connectorImplementationSchema = object({
    authMethodId: connectorAuthMethodIdSchema,
    activeConnectionCount: optional(number()),
    canDescribe: optional(boolean()),
    id: optional(string()),
    label: optional(localisedStringSchema),
    maxConnectionCount: optional(number()),
    params: optional(array(record(string(), string())))
});

export const connectorConfigSchema = object({
    id: string(),
    label: partialLocalisedStringSchema,
    description: partialLocalisedStringSchema,
    firstCreatedAt: optional(number()),
    icon: nullable(string()),
    iconDark: nullable(string()),
    lastUpdatedAt: nullable(number()),
    status: nullable(componentStatusSchema),
    statusId: componentStatusIdSchema,
    typeId: literal('connector'),
    version: string(),
    category: nullable(connectorCategorySchema),
    categoryId: connectorModuleCategoryIdSchema,
    implementations: record(string(), connectorImplementationSchema),
    operations: array(connectorOperationSchema),
    usageId: connectorUsageIdSchema,
    vendorAccountURL: nullable(string()),
    vendorDocumentationURL: nullable(string()),
    vendorHomeURL: nullable(string())
});
