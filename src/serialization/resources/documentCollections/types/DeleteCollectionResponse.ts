/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const DeleteCollectionResponse: core.serialization.ObjectSchema<
    serializers.DeleteCollectionResponse.Raw,
    Credal.DeleteCollectionResponse
> = core.serialization.object({
    collectionId: core.serialization.string(),
});

export declare namespace DeleteCollectionResponse {
    export interface Raw {
        collectionId: string;
    }
}
