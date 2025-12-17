import { literal, union } from 'valibot';

export const literalUnion = (values: readonly string[]): ReturnType<typeof union> => union(values.map((value) => literal(value)));
