/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";
import { MessageFeedback } from "../../types/MessageFeedback";

export const ProvideMessageFeedbackRequest: core.serialization.Schema<
    serializers.ProvideMessageFeedbackRequest.Raw,
    Credal.ProvideMessageFeedbackRequest
> = core.serialization.object({
    agentId: core.serialization.string(),
    userEmail: core.serialization.string(),
    messageId: core.serialization.string(),
    messageFeedback: MessageFeedback,
});

export declare namespace ProvideMessageFeedbackRequest {
    export interface Raw {
        agentId: string;
        userEmail: string;
        messageId: string;
        messageFeedback: MessageFeedback.Raw;
    }
}
