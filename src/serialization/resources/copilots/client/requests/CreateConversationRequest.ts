/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";

export const CreateConversationRequest: core.serialization.Schema<
    serializers.CreateConversationRequest.Raw,
    Credal.CreateConversationRequest
> = core.serialization.object({
    userEmail: core.serialization.string(),
});

export declare namespace CreateConversationRequest {
    interface Raw {
        userEmail: string;
    }
}
