/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index";

/**
 * @example
 *     {
 *         collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         searchQuery: "ABC Corp",
 *         structuredQueryFilters: [{
 *                 field: "status",
 *                 operator: Credal.Operator.Equal,
 *                 value: "Open"
 *             }],
 *         userEmail: "jack@credal.ai",
 *         searchOptions: {
 *             maxChunks: 10,
 *             mergeContents: true,
 *             threshold: 0.8,
 *             enableSmartFiltering: true,
 *             enableQueryExtraction: true,
 *             enableReranking: true
 *         }
 *     }
 */
export interface SearchDocumentCollectionRequest {
    collectionId?: string;
    searchQuery: string;
    /**
     * The email of the user making the search request for permissions reduction.
     *
     */
    userEmail: string;
    /**
     * The structured query filters to apply to the search query.
     *
     */
    structuredQueryFilters?: Credal.SingleFieldFilter[];
    searchOptions?: Credal.DocumentCollectionSearchOptions;
    /**
     * Legacy metadata filter expression to apply to the search query. Use structuredQueryFilters instead.
     *
     */
    metadataFilterExpression?: string;
}
