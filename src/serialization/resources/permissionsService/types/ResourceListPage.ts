/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ResourceIdentifier } from "../../common/types/ResourceIdentifier";

export const ResourceListPage: core.serialization.ObjectSchema<
    serializers.ResourceListPage.Raw,
    Credal.ResourceListPage
> = core.serialization.object({
    resources: core.serialization.list(ResourceIdentifier),
});

export declare namespace ResourceListPage {
    interface Raw {
        resources: ResourceIdentifier.Raw[];
    }
}
