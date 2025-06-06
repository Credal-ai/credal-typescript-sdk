/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
 *         collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e"
 *     }
 */
export interface RemoveCollectionFromCopilotRequest {
    /** Credal-generated agent ID to add the collection to. */
    copilotId: string;
    /** Credal-generated collection ID to add. */
    collectionId: string;
}
