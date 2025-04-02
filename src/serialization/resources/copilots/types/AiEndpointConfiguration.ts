/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const AiEndpointConfiguration: core.serialization.ObjectSchema<
    serializers.AiEndpointConfiguration.Raw,
    Credal.AiEndpointConfiguration
> = core.serialization.object({
    baseUrl: core.serialization.string(),
    apiKey: core.serialization.string(),
});

export declare namespace AiEndpointConfiguration {
    export interface Raw {
        baseUrl: string;
        apiKey: string;
    }
}
