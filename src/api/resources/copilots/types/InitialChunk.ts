/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index";

export interface InitialChunk {
    conversationId: string;
    warnings: string[];
    webSearchResults: Credal.WebSearchResult[];
    dataFilters?: Credal.DataFilter;
}