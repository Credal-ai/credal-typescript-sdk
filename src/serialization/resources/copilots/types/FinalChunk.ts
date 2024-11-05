/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { ReferencedSource } from "./ReferencedSource";

export const FinalChunk: core.serialization.ObjectSchema<serializers.FinalChunk.Raw, Credal.FinalChunk> =
    core.serialization.object({
        sources: core.serialization.list(ReferencedSource),
    });

export declare namespace FinalChunk {
    interface Raw {
        sources: ReferencedSource.Raw[];
    }
}