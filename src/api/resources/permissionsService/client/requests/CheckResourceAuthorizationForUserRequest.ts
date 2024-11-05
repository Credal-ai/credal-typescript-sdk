/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index";

/**
 * @example
 *     {
 *         resourceIdentifier: {
 *             type: "external-resource-id",
 *             externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
 *             resourceType: "GOOGLE_DRIVE_ITEM"
 *         },
 *         userEmail: "john.smith@foo.com"
 *     }
 */
export interface CheckResourceAuthorizationForUserRequest {
    /**
     * The resource identifier for which you want to check authorization.
     *
     */
    resourceIdentifier: Credal.ResourceIdentifier;
    /**
     * The user email to check authorization for.
     *
     */
    userEmail: string;
    /**
     * If specified, Credal will bypass the permissions cache and check current permissions for this resource
     *
     */
    disableCache?: boolean;
}
