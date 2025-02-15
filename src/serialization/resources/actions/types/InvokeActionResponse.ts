/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ActionStatus } from "./ActionStatus";

export const InvokeActionResponse: core.serialization.ObjectSchema<
    serializers.InvokeActionResponse.Raw,
    Credal.InvokeActionResponse
> = core.serialization.object({
    actionInvocationId: core.serialization.string(),
    actionInvocationStatus: ActionStatus,
});

export declare namespace InvokeActionResponse {
    interface Raw {
        actionInvocationId: string;
        actionInvocationStatus: ActionStatus.Raw;
    }
}
