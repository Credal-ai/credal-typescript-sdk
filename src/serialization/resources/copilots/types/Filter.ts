/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { StringFieldSchema } from "./StringFieldSchema";
import { NumberFieldSchema } from "./NumberFieldSchema";
import { BooleanFieldSchema } from "./BooleanFieldSchema";
import { DatetimeFieldSchema } from "./DatetimeFieldSchema";

export const Filter: core.serialization.Schema<serializers.Filter.Raw, Credal.Filter> = core.serialization
    .union("fieldType", {
        string: StringFieldSchema,
        number: NumberFieldSchema,
        boolean: BooleanFieldSchema,
        datetime: DatetimeFieldSchema,
    })
    .transform<Credal.Filter>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Filter {
    export type Raw = Filter.String | Filter.Number | Filter.Boolean | Filter.Datetime;

    export interface String extends StringFieldSchema.Raw {
        fieldType: "string";
    }

    export interface Number extends NumberFieldSchema.Raw {
        fieldType: "number";
    }

    export interface Boolean extends BooleanFieldSchema.Raw {
        fieldType: "boolean";
    }

    export interface Datetime extends DatetimeFieldSchema.Raw {
        fieldType: "datetime";
    }
}
