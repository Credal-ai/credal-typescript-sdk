/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const Url: core.serialization.ObjectSchema<serializers.Url.Raw, Credal.Url> = core.serialization.object({
    url: core.serialization.string(),
});

export declare namespace Url {
    export interface Raw {
        url: string;
    }
}
