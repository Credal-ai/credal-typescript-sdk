/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Operator = "<" | ">" | "<=" | ">=" | "!=" | "==" | "contains";

export const Operator = {
    LessThan: "<",
    GreaterThan: ">",
    LessThanOrEqual: "<=",
    GreaterThanOrEqual: ">=",
    NotEqual: "!=",
    Equal: "==",
    Contains: "contains",
} as const;
