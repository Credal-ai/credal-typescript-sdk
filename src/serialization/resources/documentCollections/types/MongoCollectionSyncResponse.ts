/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const MongoCollectionSyncResponse: core.serialization.ObjectSchema<
    serializers.MongoCollectionSyncResponse.Raw,
    Credal.MongoCollectionSyncResponse
> = core.serialization.object({
    mongoCredentialId: core.serialization.string(),
    resourceId: core.serialization.string(),
    syncLaunched: core.serialization.boolean(),
});

export declare namespace MongoCollectionSyncResponse {
    interface Raw {
        mongoCredentialId: string;
        resourceId: string;
        syncLaunched: boolean;
    }
}
