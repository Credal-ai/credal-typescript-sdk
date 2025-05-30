/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";

export const RemoveCollectionFromCopilotRequest: core.serialization.Schema<
    serializers.RemoveCollectionFromCopilotRequest.Raw,
    Credal.RemoveCollectionFromCopilotRequest
> = core.serialization.object({
    copilotId: core.serialization.string(),
    collectionId: core.serialization.string(),
});

export declare namespace RemoveCollectionFromCopilotRequest {
    export interface Raw {
        copilotId: string;
        collectionId: string;
    }
}
