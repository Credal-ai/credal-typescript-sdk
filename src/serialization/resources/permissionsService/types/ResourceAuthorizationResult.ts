/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ExternalResourceId } from "../../common/types/ExternalResourceId";

export const ResourceAuthorizationResult: core.serialization.ObjectSchema<
    serializers.ResourceAuthorizationResult.Raw,
    Credal.ResourceAuthorizationResult
> = core.serialization.object({
    externalResourceId: ExternalResourceId,
    inputUrl: core.serialization.string().optional(),
    authorized: core.serialization.boolean(),
});

export declare namespace ResourceAuthorizationResult {
    export interface Raw {
        externalResourceId: ExternalResourceId.Raw;
        inputUrl?: string | null;
        authorized: boolean;
    }
}
