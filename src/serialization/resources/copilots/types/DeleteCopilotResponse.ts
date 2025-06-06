/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const DeleteCopilotResponse: core.serialization.ObjectSchema<
    serializers.DeleteCopilotResponse.Raw,
    Credal.DeleteCopilotResponse
> = core.serialization.object({
    copilotId: core.serialization.string(),
});

export declare namespace DeleteCopilotResponse {
    export interface Raw {
        copilotId: string;
    }
}
