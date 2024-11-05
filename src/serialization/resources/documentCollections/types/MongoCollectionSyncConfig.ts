/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { MongoSourceFieldsConfig } from "./MongoSourceFieldsConfig";

export const MongoCollectionSyncConfig: core.serialization.ObjectSchema<
    serializers.MongoCollectionSyncConfig.Raw,
    Credal.MongoCollectionSyncConfig
> = core.serialization.object({
    syncName: core.serialization.string(),
    collectionName: core.serialization.string(),
    filterExpression: core.serialization.unknown(),
    sourceFields: MongoSourceFieldsConfig,
});

export declare namespace MongoCollectionSyncConfig {
    interface Raw {
        syncName: string;
        collectionName: string;
        filterExpression?: unknown;
        sourceFields: MongoSourceFieldsConfig.Raw;
    }
}