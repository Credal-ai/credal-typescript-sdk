/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index";

export interface SearchDocumentCollectionResponse {
    searchTermsUsed: string[];
    structuredFiltersApplied: Credal.SingleFieldFilter[];
    searchId: string;
    results: Credal.DocumentCollectionSearchResult[];
}
