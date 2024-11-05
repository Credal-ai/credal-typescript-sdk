/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { Operator } from "../../common/types/Operator";

export const NumberFieldSchema: core.serialization.ObjectSchema<
    serializers.NumberFieldSchema.Raw,
    Credal.NumberFieldSchema
> = core.serialization.object({
    field: core.serialization.string(),
    operator: Operator,
    value: core.serialization.number(),
});

export declare namespace NumberFieldSchema {
    interface Raw {
        field: string;
        operator: Operator.Raw;
        value: number;
    }
}