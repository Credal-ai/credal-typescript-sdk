/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         message: "Is Credal SOC 2 compliant?",
 *         userEmail: "ravin@credal.ai"
 *     }
 */
export interface SendMessageRequest {
    /**
     * Credal-generated Copilot ID to specify which agent to route the request to.
     *
     */
    agentId: string;
    /**
     * The message you want to send to your copilot.
     *
     */
    message: string;
    /**
     * The user profile you want to use when sending the message.
     *
     */
    userEmail: string;
    /**
     * Credal-generated conversation ID for sending follow up messages. Conversation ID is returned after initial message. Optional, to be left off for first messages on new conversations.
     *
     */
    conversationId?: string;
}
