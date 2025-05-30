/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { Operator } from "../../common/types/Operator";

export const DatetimeFieldSchema: core.serialization.ObjectSchema<
    serializers.DatetimeFieldSchema.Raw,
    Credal.DatetimeFieldSchema
> = core.serialization.object({
    field: core.serialization.string(),
    operator: Operator,
    value: core.serialization.string(),
});

export declare namespace DatetimeFieldSchema {
    export interface Raw {
        field: string;
        operator: Operator.Raw;
        value: string;
    }
}
