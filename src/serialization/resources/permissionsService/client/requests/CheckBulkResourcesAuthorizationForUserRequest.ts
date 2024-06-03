/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Credal from "../../../../../api/index";
import * as core from "../../../../../core";
import { ResourceIdentifier } from "../../../common/types/ResourceIdentifier";

export const CheckBulkResourcesAuthorizationForUserRequest: core.serialization.Schema<
    serializers.CheckBulkResourcesAuthorizationForUserRequest.Raw,
    Credal.CheckBulkResourcesAuthorizationForUserRequest
> = core.serialization.object({
    resourceIdentifiers: core.serialization.list(ResourceIdentifier),
    userEmail: core.serialization.string(),
    disableCache: core.serialization.boolean().optional(),
});

export declare namespace CheckBulkResourcesAuthorizationForUserRequest {
    interface Raw {
        resourceIdentifiers: ResourceIdentifier.Raw[];
        userEmail: string;
        disableCache?: boolean | null;
    }
}
