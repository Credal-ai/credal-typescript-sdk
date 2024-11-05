/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { CollectionFilteredData } from "./CollectionFilteredData";

export const DataFilter: core.serialization.ObjectSchema<serializers.DataFilter.Raw, Credal.DataFilter> =
    core.serialization.object({
        semanticSearchTerms: core.serialization.list(core.serialization.string()),
        webSearchTerm: core.serialization.list(core.serialization.string()),
        filteredDataSourcesPerCollection: core.serialization.list(CollectionFilteredData),
    });

export declare namespace DataFilter {
    interface Raw {
        semanticSearchTerms: string[];
        webSearchTerm: string[];
        filteredDataSourcesPerCollection: CollectionFilteredData.Raw[];
    }
}