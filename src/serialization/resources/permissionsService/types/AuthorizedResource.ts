/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ExternalResourceId } from "../../common/types/ExternalResourceId";

export const AuthorizedResource: core.serialization.ObjectSchema<
    serializers.AuthorizedResource.Raw,
    Credal.AuthorizedResource
> = core.serialization.object({
    credalId: core.serialization.string(),
    externalId: ExternalResourceId,
});

export declare namespace AuthorizedResource {
    interface Raw {
        credalId: string;
        externalId: ExternalResourceId.Raw;
    }
}