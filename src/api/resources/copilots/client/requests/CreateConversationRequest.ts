/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         userEmail: "ravin@credal.ai"
 *     }
 */
export interface CreateConversationRequest {
    /**
     * Credal-generated agent ID to specify which agent to route the request to. This is required for all new API keys going forward.
     *
     */
    agentId?: string;
    /**
     * End-user for the conversation.
     *
     */
    userEmail: string;
}
