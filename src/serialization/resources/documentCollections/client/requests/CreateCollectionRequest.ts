/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";
import { Collaborator } from "../../../common/types/Collaborator";

export const CreateCollectionRequest: core.serialization.Schema<
    serializers.CreateCollectionRequest.Raw,
    Credal.CreateCollectionRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    collaborators: core.serialization.list(Collaborator),
});

export declare namespace CreateCollectionRequest {
    export interface Raw {
        name: string;
        description: string;
        collaborators: Collaborator.Raw[];
    }
}
