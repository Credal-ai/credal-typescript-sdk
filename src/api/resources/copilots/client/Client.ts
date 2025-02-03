/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Credal from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace Copilots {
    interface Options {
        environment?: core.Supplier<environments.CredalEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Copilots {
    constructor(protected readonly _options: Copilots.Options = {}) {}

    /**
     * Create a new copilot. The API key used will be added to the copilot for future Requests
     *
     * @param {Credal.CreateCopilotRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.createCopilot({
     *         name: "Customer Copilot",
     *         description: "This copilot is used to answer customer requests based on internal documentation.",
     *         collaborators: [{
     *                 email: "test@gmail.com",
     *                 role: "editor"
     *             }]
     *     })
     */
    public async createCopilot(
        request: Credal.CreateCopilotRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<Credal.CreateCopilotResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/createCopilot"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateCopilotRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateCopilotResponse.parseOrThrow(_response.body, {
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
     * OPTIONAL. Create a new conversation with the Copilot. The conversation ID can be used in the `sendMessage` endpoint. The `sendMessage` endpoint automatically creates new conversations upon first request, but calling this endpoint can simplify certain use cases where it is helpful for the application to have the conversation ID before the first message is sent.
     *
     * @param {Credal.CreateConversationRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.createConversation({
     *         agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         userEmail: "ravin@credal.ai"
     *     })
     */
    public async createConversation(
        request: Credal.CreateConversationRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<Credal.CreateConversationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/createConversation"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateConversationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateConversationResponse.parseOrThrow(_response.body, {
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
     * @param {Credal.ProvideMessageFeedbackRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.provideMessageFeedback({
     *         userEmail: "ravin@credal.ai",
     *         messageId: "dd721cd8-4bf2-4b94-9869-258df3dab9dc",
     *         agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         messageFeedback: {
     *             feedback: "NEGATIVE",
     *             suggestedAnswer: "Yes, Credal is SOC 2 compliant.",
     *             descriptiveFeedback: "The response should be extremely clear and concise."
     *         }
     *     })
     */
    public async provideMessageFeedback(
        request: Credal.ProvideMessageFeedbackRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/provideMessageFeedback"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ProvideMessageFeedbackRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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

    /**
     * @param {Credal.SendMessageRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.sendMessage({
     *         agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         message: "Is Credal SOC 2 compliant?",
     *         userEmail: "ravin@credal.ai",
     *         inputVariables: [{
     *                 name: "input1",
     *                 ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c24"]
     *             }, {
     *                 name: "input2",
     *                 ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c25", "82e4b12a-6990-45d4-8ebd-85c00e030c26"]
     *             }]
     *     })
     */
    public async sendMessage(
        request: Credal.SendMessageRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<Credal.SendAgentMessageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/sendMessage"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SendMessageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SendAgentMessageResponse.parseOrThrow(_response.body, {
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
     * This endpoint allows you to send a message to a specific copilot and get the response back as a streamed set of Server-Sent Events.
     */
    public async streamMessage(
        request: Credal.StreamMessageRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<core.Stream<Credal.StreamingChunk>> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/streamMessage"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.StreamMessageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.StreamingChunk.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "sse",
                    streamTerminator: "[DONE]",
                },
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
     * Link a collection with a copilot. The API Key used must be added to both the collection and the copilot beforehand.
     *
     * @param {Credal.AddCollectionToCopilotRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.addCollectionToCopilot({
     *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e"
     *     })
     */
    public async addCollectionToCopilot(
        request: Credal.AddCollectionToCopilotRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/addCollectionToCopilot"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.AddCollectionToCopilotRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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

    /**
     * Unlink a collection with a copilot. The API Key used must be added to both the collection and the copilot beforehand.
     *
     * @param {Credal.RemoveCollectionFromCopilotRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.removeCollectionFromCopilot({
     *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e"
     *     })
     */
    public async removeCollectionFromCopilot(
        request: Credal.RemoveCollectionFromCopilotRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/removeCollectionFromCopilot"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RemoveCollectionFromCopilotRequest.jsonOrThrow(request, {
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

    /**
     * Update the configuration for a copilot
     *
     * @param {Credal.UpdateConfigurationRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.updateConfiguration({
     *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
     *         configuration: {
     *             name: "Customer Copilot",
     *             description: "This copilot is used to answer customer requests based on internal documentation.",
     *             prompt: "You are a polite, helpful assistant used to answer customer requests.",
     *             aiEndpointConfiguration: {
     *                 baseUrl: "https://api.openai.com/v1/",
     *                 apiKey: "<YOUR_API_KEY_HERE>"
     *             }
     *         }
     *     })
     */
    public async updateConfiguration(
        request: Credal.UpdateConfigurationRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/updateConfiguration"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateConfigurationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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

    /**
     * @param {Credal.DeleteCopilotRequest} request
     * @param {Copilots.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.copilots.deleteCopilot({
     *         id: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a"
     *     })
     */
    public async deleteCopilot(
        request: Credal.DeleteCopilotRequest,
        requestOptions?: Copilots.RequestOptions
    ): Promise<Credal.DeleteCopilotResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CredalEnvironment.Production,
                "/v0/copilots/deleteCopilot"
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@credal/sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@credal/sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DeleteCopilotRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DeleteCopilotResponse.parseOrThrow(_response.body, {
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
