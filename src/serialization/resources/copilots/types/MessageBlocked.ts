/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { PolicyTrigger } from "./PolicyTrigger";
import { InsertedAuditLog } from "./InsertedAuditLog";

export const MessageBlocked: core.serialization.ObjectSchema<serializers.MessageBlocked.Raw, Credal.MessageBlocked> =
    core.serialization.object({
        policyTriggers: core.serialization.property("policy_triggers", core.serialization.list(PolicyTrigger)),
        conversationId: core.serialization.string(),
        blocks: core.serialization.list(core.serialization.string()),
        warnings: core.serialization.list(core.serialization.string()),
        insertedAuditLog: core.serialization.property("inserted_audit_log", InsertedAuditLog),
    });

export declare namespace MessageBlocked {
    interface Raw {
        policy_triggers: PolicyTrigger.Raw[];
        conversationId: string;
        blocks: string[];
        warnings: string[];
        inserted_audit_log: InsertedAuditLog.Raw;
    }
}
