/**
 * Created by asking Copilot to generate a 'valibot' schema for the 'ContextConfig' interface.
 */

import { array, literal, nullable, number, object, optional, string, union } from 'valibot';

const literalUnion = (values: readonly string[]): ReturnType<typeof union> => union(values.map((value) => literal(value)));

const partialLocalisedStringSchema = object({
    'en-au': optional(string()),
    'en-gb': optional(string()),
    'en-us': optional(string()),
    'es-es': optional(string())
});

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
const contextOperationSchema = literalUnion(['list'] as const);

const componentStatusSchema = object({
    id: string(),
    color: statusColorIdSchema,
    label: string()
});

const componentConfigBase = {
    id: string(),
    label: partialLocalisedStringSchema,
    description: partialLocalisedStringSchema,
    firstCreatedAt: optional(number()),
    icon: nullable(string()),
    iconDark: nullable(string()),
    lastUpdatedAt: nullable(number()),
    status: nullable(componentStatusSchema),
    statusId: componentStatusIdSchema
};

const componentReferenceSchema = object({
    id: string(),
    label: partialLocalisedStringSchema,
    description: partialLocalisedStringSchema,
    icon: optional(string()),
    iconDark: optional(string()),
    order: number(),
    path: string()
});

const contextModelGroupConfigSchema = object({
    ...componentConfigBase,
    typeId: literal('contextModelGroup'),
    modelRefs: array(componentReferenceSchema),
    order: number()
});

export const contextConfigSchema = object({
    ...componentConfigBase,
    typeId: literal('context'),
    version: string(),
    models: array(contextModelGroupConfigSchema),
    operations: array(contextOperationSchema)
});
