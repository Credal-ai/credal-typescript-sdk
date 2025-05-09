/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Credal from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace DocumentCatalog {
    export interface Options {
        environment?: core.Supplier<environments.CredalEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class DocumentCatalog {
    constructor(protected readonly _options: DocumentCatalog.Options = {}) {}

    /**
     * @param {Credal.UploadDocumentContentsRequest} request
     * @param {DocumentCatalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentCatalog.uploadDocumentContents({
     *         documentName: "My Document",
     *         documentContents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     *         documentExternalId: "73eead26-d124-4940-b329-5f068a0a8db9",
     *         allowedUsersEmailAddresses: ["jack@credal.ai", "ravin@credal.ai"],
     *         uploadAsUserEmail: "jack@credal.ai"
     *     })
     */
    public async uploadDocumentContents(
        request: Credal.UploadDocumentContentsRequest,
        requestOptions?: DocumentCatalog.RequestOptions,
    ): Promise<Credal.UploadDocumentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CredalEnvironment.Production,
                "/v0/catalog/uploadDocumentContents",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.27",
                "User-Agent": "@credal/sdk/0.0.27",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UploadDocumentContentsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UploadDocumentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CredalError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CredalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CredalTimeoutError(
                    "Timeout exceeded when calling POST /v0/catalog/uploadDocumentContents.",
                );
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Sync a document from a source URL. Does not support recursive web search. Reach out to a Credal representative for access.
     *
     * @param {Credal.SyncSourceByUrlRequest} request
     * @param {DocumentCatalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentCatalog.syncSourceByUrl({
     *         sourceUrl: "https://drive.google.com/file/d/123456/view",
     *         uploadAsUserEmail: "ria@credal.ai"
     *     })
     */
    public async syncSourceByUrl(
        request: Credal.SyncSourceByUrlRequest,
        requestOptions?: DocumentCatalog.RequestOptions,
    ): Promise<Credal.SyncSourceByUrlResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CredalEnvironment.Production,
                "/v0/catalog/syncSourceByUrl",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.27",
                "User-Agent": "@credal/sdk/0.0.27",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SyncSourceByUrlRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SyncSourceByUrlResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CredalError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CredalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CredalTimeoutError("Timeout exceeded when calling POST /v0/catalog/syncSourceByUrl.");
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Bulk patch metadata for documents, synced natively by Credal or manual API uploads
     *
     * @param {Credal.DocumentMetadataPatchRequest} request
     * @param {DocumentCatalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentCatalog.metadata({
     *         sources: [{
     *                 metadata: {
     *                     "Department": "HR",
     *                     "Country": "United States"
     *                 },
     *                 resourceIdentifier: {
     *                     type: "external-resource-id",
     *                     externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
     *                     resourceType: "GOOGLE_DRIVE_ITEM"
     *                 }
     *             }, {
     *                 metadata: {
     *                     "Department": "Sales",
     *                     "Vertical": "Healthcare"
     *                 },
     *                 resourceIdentifier: {
     *                     type: "external-resource-id",
     *                     externalResourceId: "123456",
     *                     resourceType: "ZENDESK_TICKET"
     *                 }
     *             }],
     *         uploadAsUserEmail: "ben@credal.ai"
     *     })
     */
    public async metadata(
        request: Credal.DocumentMetadataPatchRequest,
        requestOptions?: DocumentCatalog.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.CredalEnvironment.Production,
                "/v0/catalog/metadata",
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.27",
                "User-Agent": "@credal/sdk/0.0.27",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DocumentMetadataPatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CredalError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CredalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CredalTimeoutError("Timeout exceeded when calling PATCH /v0/catalog/metadata.");
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
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
