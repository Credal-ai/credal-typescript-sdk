/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";

export const WebSearchResult: core.serialization.ObjectSchema<serializers.WebSearchResult.Raw, Credal.WebSearchResult> =
    core.serialization.object({
        title: core.serialization.string(),
        url: core.serialization.string(),
        contents: core.serialization.string(),
    });

export declare namespace WebSearchResult {
    interface Raw {
        title: string;
        url: string;
        contents: string;
    }
}
