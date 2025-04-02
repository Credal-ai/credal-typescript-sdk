/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { SearchResultChunk } from "./SearchResultChunk";

export const DocumentCollectionSearchResult: core.serialization.ObjectSchema<
    serializers.DocumentCollectionSearchResult.Raw,
    Credal.DocumentCollectionSearchResult
> = core.serialization.object({
    documentId: core.serialization.string(),
    documentName: core.serialization.string(),
    documentUrl: core.serialization.string(),
    documentExternalId: core.serialization.string(),
    documentMetadata: core.serialization.record(core.serialization.string(), core.serialization.string()),
    chunks: core.serialization.list(SearchResultChunk),
    mergedContents: core.serialization.string().optional(),
});

export declare namespace DocumentCollectionSearchResult {
    export interface Raw {
        documentId: string;
        documentName: string;
        documentUrl: string;
        documentExternalId: string;
        documentMetadata: Record<string, string>;
        chunks: SearchResultChunk.Raw[];
        mergedContents?: string | null;
    }
}
