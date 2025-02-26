/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index";

/**
 * @example
 *     {
 *         actionId: "2b5cf2b8-3df3-11ef-9a96-332d4470d189",
 *         actionInputs: {
 *             "textToAppend": "If you need more help, please contact your direct manager."
 *         },
 *         userEmail: "ben@credal.ai",
 *         requireHumanConfirmation: true,
 *         humanConfirmationChannel: {
 *             type: "slackThread",
 *             channelId: "ABC123",
 *             threadTimestamp: "123456789"
 *         },
 *         justification: "The user directly asked to update the Relocations Confluence document with this text.",
 *         auditLogId: "3df3f2b8-3df3-11ef-9a96-332d447011ef"
 *     }
 */
export interface InvokeActionRequest {
    actionId: string;
    /**
     * The inputs needed to execute the action
     *
     */
    actionInputs?: unknown;
    /**
     * The user who we should take the action on behalf of
     *
     */
    userEmail: string;
    /**
     * If true, then before executing the action we will ask for a human confirmation in Slack.  If false, we may still ask for human confirmation if it's required by your organization admin.
     *
     */
    requireHumanConfirmation: boolean;
    /**
     * Where we should ask for human confirmation if necessary
     *
     */
    humanConfirmationChannel?: Credal.HumanConfirmationChannel;
    /**
     * The justification for requesting this action.  This is likely generated by the LLM that requested the action.
     *
     */
    justification: string;
    /**
     * Audit log for the message that called for this action
     *
     */
    auditLogId: string;
}
