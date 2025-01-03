/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index";

export interface MessageReply {
    policyTriggers: Credal.PolicyTrigger[];
    conversationId: string;
    response: Credal.ResponseChunk;
    warnings: string[];
    insertedAuditLog: Credal.InsertedAuditLog;
    referencedSources: Credal.ReferencedSource[];
    sourcesInDataContext: Credal.ReferencedSource[];
    webSearchResults: Credal.WebSearchResult[];
    messageId: string;
}
