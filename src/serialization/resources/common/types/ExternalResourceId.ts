/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ResourceType } from "./ResourceType";

export const ExternalResourceId: core.serialization.ObjectSchema<
    serializers.ExternalResourceId.Raw,
    Credal.ExternalResourceId
> = core.serialization.object({
    externalResourceId: core.serialization.string(),
    resourceType: ResourceType,
});

export declare namespace ExternalResourceId {
    export interface Raw {
        externalResourceId: string;
        resourceType: ResourceType.Raw;
    }
}
