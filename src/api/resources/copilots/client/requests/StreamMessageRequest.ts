/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index";

/**
 * @example
 *     {
 *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         message: "Is Credal SOC 2 compliant?",
 *         email: "ravin@credal.ai",
 *         inputVariables: [{
 *                 name: "input1",
 *                 urls: ["https://drive.google.com/file/d/123456/view"]
 *             }, {
 *                 name: "input2",
 *                 urls: ["https://drive.google.com/file/d/123457/view", "https://drive.google.com/file/d/123458/view"]
 *             }]
 *     }
 *
 * @example
 *     {
 *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         message: "Is this user eligible for benefits based on their date of birth?",
 *         email: "ravin@credal.ai",
 *         inputVariables: [{
 *                 name: "input1",
 *                 urls: ["https://drive.google.com/file/d/123456/view"]
 *             }, {
 *                 name: "input2",
 *                 urls: ["https://drive.google.com/file/d/123457/view", "https://drive.google.com/file/d/123458/view"]
 *             }]
 *     }
 */
export interface StreamMessageRequest {
    /**
     * Credal-generated Copilot ID to specify which agent to route the request to.
     *
     */
    copilotId: string;
    /**
     * The message you want to send to your copilot.
     *
     */
    message: string;
    /**
     * The user profile you want to use when sending the message.
     *
     */
    email: string;
    /**
     * Credal-generated conversation ID for sending follow up messages. Conversation ID is returned after initial message. Optional, to be left off for first messages on new conversations.
     *
     */
    conversationId?: string;
    /**
     * Optional input variables to be used in the message. Map the name of the variable to a list of urls.
     *
     */
    inputVariables?: Credal.InputVariable[];
}
