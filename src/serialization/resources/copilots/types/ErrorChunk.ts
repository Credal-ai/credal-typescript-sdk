/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ErrorChunkData } from "./ErrorChunkData";

export const ErrorChunk: core.serialization.ObjectSchema<serializers.ErrorChunk.Raw, Credal.ErrorChunk> =
    core.serialization.object({
        error: ErrorChunkData,
    });

export declare namespace ErrorChunk {
    export interface Raw {
        error: ErrorChunkData.Raw;
    }
}
