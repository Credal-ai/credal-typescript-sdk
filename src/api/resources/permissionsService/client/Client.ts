/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Credal from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace PermissionsService {
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

export class PermissionsService {
    constructor(protected readonly _options: PermissionsService.Options = {}) {}

    /**
     * Admin endpoint to check whether the specified user is authorized to read the specified resource.
     *
     * @param {Credal.CheckResourceAuthorizationForUserRequest} request
     * @param {PermissionsService.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await credal.permissionsService.checkResourceAuthorizationForUser({
     *         resourceIdentifier: {
     *             type: "external-resource-id",
     *             externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
     *             resourceType: Credal.ResourceType.GoogleDriveItem
     *         },
     *         userEmail: "john.smith@foo.com"
     *     })
     */
    public async checkResourceAuthorizationForUser(
        request: Credal.CheckResourceAuthorizationForUserRequest,
        requestOptions?: PermissionsService.RequestOptions
    ): Promise<Credal.CheckResourceAuthorizationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/permissions/checkResourceAuthorizationForUser"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CheckResourceAuthorizationForUserRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.CheckResourceAuthorizationResponse.parseOrThrow(_response.body, {
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
                throw new errors.CredalTimeoutError();
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Admin endpoint to check whether the specified user is authorized to read the specified set of resources.
     *
     * @param {Credal.CheckBulkResourcesAuthorizationForUserRequest} request
     * @param {PermissionsService.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await credal.permissionsService.checkBulkResourcesAuthorizationForUser({
     *         resourceIdentifiers: [{
     *                 type: "url",
     *                 url: "https://docs.google.com/document/d/170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr/edit"
     *             }, {
     *                 type: "external-resource-id",
     *                 externalResourceId: "sfsdfvr54UvyslPVWkQFOA0dfsdfsdflgNycFmdZJQr",
     *                 resourceType: Credal.ResourceType.ZendeskTicket
     *             }],
     *         userEmail: "john.smith@foo.com"
     *     })
     */
    public async checkBulkResourcesAuthorizationForUser(
        request: Credal.CheckBulkResourcesAuthorizationForUserRequest,
        requestOptions?: PermissionsService.RequestOptions
    ): Promise<Credal.CheckBulkResourcesAuthorizationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/permissions/checkBulkResourcesAuthorizationForUser"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CheckBulkResourcesAuthorizationForUserRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.CheckBulkResourcesAuthorizationResponse.parseOrThrow(_response.body, {
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
                throw new errors.CredalTimeoutError();
            case "unknown":
                throw new errors.CredalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Admin endpoint to list all resources that the specified user is authorized to read. Note this endpoint returns cached results and may not be up-to-date. You can use the checkResourceAuthorizationForUser endpoint with disableCache set to true to get the most up-to-date results.
     *
     * @param {Credal.ListCachedAuthorizedResourcesForUserRequest} request
     * @param {PermissionsService.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await credal.permissionsService.listCachedAuthorizedResourcesForUser({
     *         userEmail: "john.smith@foo.com"
     *     })
     */
    public async listCachedAuthorizedResourcesForUser(
        request: Credal.ListCachedAuthorizedResourcesForUserRequest,
        requestOptions?: PermissionsService.RequestOptions
    ): Promise<Credal.AuthorizedResourceListPage> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/permissions/listCachedAuthorizedResourcesForUser"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.ListCachedAuthorizedResourcesForUserRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.AuthorizedResourceListPage.parseOrThrow(_response.body, {
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
