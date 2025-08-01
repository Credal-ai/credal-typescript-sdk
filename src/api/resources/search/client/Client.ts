/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Credal from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Search {
    export interface Options {
        environment?: core.Supplier<environments.CredalEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional query string parameters to include in the request. */
        queryParams?: Record<string, unknown>;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

export class Search {
    protected readonly _options: Search.Options;

    constructor(_options: Search.Options = {}) {
        this._options = _options;
    }

    /**
     * Search across all documents in a document collection using the document metadata and contents.
     *
     * @param {Credal.SearchDocumentCollectionRequest} request
     * @param {Search.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.search.searchDocumentCollection({
     *         collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         searchQuery: "ABC Corp",
     *         structuredQueryFilters: [{
     *                 field: "status",
     *                 operator: "==",
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
     *     })
     */
    public searchDocumentCollection(
        request: Credal.SearchDocumentCollectionRequest,
        requestOptions?: Search.RequestOptions,
    ): core.HttpResponsePromise<Credal.SearchDocumentCollectionResponse> {
        return core.HttpResponsePromise.fromPromise(this.__searchDocumentCollection(request, requestOptions));
    }

    private async __searchDocumentCollection(
        request: Credal.SearchDocumentCollectionRequest,
        requestOptions?: Search.RequestOptions,
    ): Promise<core.WithRawResponse<Credal.SearchDocumentCollectionResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CredalEnvironment.Production,
                "/v0/search/searchDocumentCollection",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: requestOptions?.queryParams,
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Credal.SearchDocumentCollectionResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CredalError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CredalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.CredalTimeoutError(
                    "Timeout exceeded when calling POST /v0/search/searchDocumentCollection.",
                );
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["CREDAL_API_KEY"];
        if (bearer == null) {
            throw new errors.CredalError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a CREDAL_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
