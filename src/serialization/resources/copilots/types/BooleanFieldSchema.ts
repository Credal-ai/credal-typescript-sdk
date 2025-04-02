/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const BooleanFieldSchema: core.serialization.ObjectSchema<
    serializers.BooleanFieldSchema.Raw,
    Credal.BooleanFieldSchema
> = core.serialization.object({
    field: core.serialization.string(),
    operator: core.serialization.stringLiteral("=="),
    value: core.serialization.boolean(),
});

export declare namespace BooleanFieldSchema {
    export interface Raw {
        field: string;
        operator: "==";
        value: boolean;
    }
}
