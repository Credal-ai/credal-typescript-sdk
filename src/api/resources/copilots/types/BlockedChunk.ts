/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index.js";

export interface BlockedChunk {
    conversationId: string;
    warnings: string[];
    blocks: string[];
    policyTriggers: Credal.PolicyTrigger[];
}
