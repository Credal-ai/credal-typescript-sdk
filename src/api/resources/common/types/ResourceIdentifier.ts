/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index";

export type ResourceIdentifier = Credal.ResourceIdentifier.ExternalResourceId | Credal.ResourceIdentifier.Url;

export declare namespace ResourceIdentifier {
    interface ExternalResourceId extends Credal.ExternalResourceId {
        type: "external-resource-id";
    }

    interface Url extends Credal.Url {
        type: "url";
    }
}
