/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";
import { MongoCollectionSyncConfig } from "../../types/MongoCollectionSyncConfig";

export const UpdateMongoCollectionSyncRequest: core.serialization.Schema<
    serializers.UpdateMongoCollectionSyncRequest.Raw,
    Credal.UpdateMongoCollectionSyncRequest
> = core.serialization.object({
    mongoCredentialId: core.serialization.string(),
    mongoUri: core.serialization.property("mongoURI", core.serialization.string()),
    config: MongoCollectionSyncConfig,
});

export declare namespace UpdateMongoCollectionSyncRequest {
    interface Raw {
        mongoCredentialId: string;
        mongoURI: string;
        config: MongoCollectionSyncConfig.Raw;
    }
}