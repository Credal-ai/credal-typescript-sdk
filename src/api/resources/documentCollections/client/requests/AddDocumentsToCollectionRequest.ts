/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index";

/**
 * @example
 *     {
 *         collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         resourceIdentifiers: [{
 *                 type: "external-resource-id",
 *                 externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
 *                 resourceType: Credal.ResourceType.GoogleDriveItem
 *             }, {
 *                 type: "external-resource-id",
 *                 externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
 *                 resourceType: Credal.ResourceType.GoogleDriveItem
 *             }]
 *     }
 */
export interface AddDocumentsToCollectionRequest {
    /** The ID of the document collection you want to add to. */
    collectionId: string;
    /**
     * The set of resource identifier for which you want to add to the collection.
     *
     */
    resourceIdentifiers: Credal.ResourceIdentifier[];
}
