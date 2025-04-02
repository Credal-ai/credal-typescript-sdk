/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const UserMetadataPatch: core.serialization.ObjectSchema<
    serializers.UserMetadataPatch.Raw,
    Credal.UserMetadataPatch
> = core.serialization.object({
    userEmail: core.serialization.string(),
    metadata: core.serialization.unknown(),
});

export declare namespace UserMetadataPatch {
    export interface Raw {
        userEmail: string;
        metadata?: unknown;
    }
}
