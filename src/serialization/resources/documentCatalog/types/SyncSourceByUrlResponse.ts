/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const SyncSourceByUrlResponse: core.serialization.ObjectSchema<
    serializers.SyncSourceByUrlResponse.Raw,
    Credal.SyncSourceByUrlResponse
> = core.serialization.object({
    sourceId: core.serialization.string(),
});

export declare namespace SyncSourceByUrlResponse {
    export interface Raw {
        sourceId: string;
    }
}
