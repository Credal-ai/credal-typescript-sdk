/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Credal from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace DocumentCollections {
    interface Options {
        environment?: core.Supplier<environments.CredalEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class DocumentCollections {
    constructor(protected readonly _options: DocumentCollections.Options = {}) {}

    /**
     * Add documents to a document collection. Note that the documents must already exist in the document catalog to use this endpoint. If you want to upload a new document to a collection, use the uploadDocumentContents endpoint.
     *
     * @param {Credal.AddDocumentsToCollectionRequest} request
     * @param {DocumentCollections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await credal.documentCollections.addDocumentsToCollection({
     *         collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         resourceIdentifiers: [{
     *                 type: "external-resource-id",
     *                 externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
     *                 resourceType: Credal.ResourceType.GoogleDriveItem
     *             }, {
     *                 type: "external-resource-id",
     *                 externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
     *                 resourceType: Credal.ResourceType.GoogleDriveItem
     *             }]
     *     })
     */
    public async addDocumentsToCollection(
        request: Credal.AddDocumentsToCollectionRequest,
        requestOptions?: DocumentCollections.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/documentCollections/addDocumentsToCollection"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.AddDocumentsToCollectionRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
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
                throw new errors.CredalTimeoutError();
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
                message: "Please specify CREDAL_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
