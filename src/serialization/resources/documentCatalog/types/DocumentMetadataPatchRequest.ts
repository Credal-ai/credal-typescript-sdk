/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { DocumentMetadataPatch } from "./DocumentMetadataPatch";

export const DocumentMetadataPatchRequest: core.serialization.ObjectSchema<
    serializers.DocumentMetadataPatchRequest.Raw,
    Credal.DocumentMetadataPatchRequest
> = core.serialization.object({
    sources: core.serialization.list(DocumentMetadataPatch),
    uploadAsUserEmail: core.serialization.string(),
});

export declare namespace DocumentMetadataPatchRequest {
    export interface Raw {
        sources: DocumentMetadataPatch.Raw[];
        uploadAsUserEmail: string;
    }
}
