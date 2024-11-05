/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { Role } from "./Role";

export const Collaborator: core.serialization.ObjectSchema<serializers.Collaborator.Raw, Credal.Collaborator> =
    core.serialization.object({
        email: core.serialization.string(),
        role: Role,
    });

export declare namespace Collaborator {
    interface Raw {
        email: string;
        role: Role.Raw;
    }
}