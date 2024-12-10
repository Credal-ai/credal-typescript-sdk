/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const DirectMessage: core.serialization.ObjectSchema<serializers.DirectMessage.Raw, Credal.DirectMessage> =
    core.serialization.object({
        channelId: core.serialization.string(),
    });

export declare namespace DirectMessage {
    interface Raw {
        channelId: string;
    }
}
