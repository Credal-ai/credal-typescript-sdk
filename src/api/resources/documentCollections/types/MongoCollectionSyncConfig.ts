/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index";

export interface MongoCollectionSyncConfig {
    syncName: string;
    collectionName: string;
    filterExpression?: unknown;
    sourceFields: Credal.MongoSourceFieldsConfig;
}
