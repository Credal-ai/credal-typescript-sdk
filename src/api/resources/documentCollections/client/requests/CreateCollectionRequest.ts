/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../../index.js";

/**
 * @example
 *     {
 *         name: "Customer Collection",
 *         description: "This collection is used to answer customer requests based on internal documentation.",
 *         collaborators: [{
 *                 email: "test@gmail.com",
 *                 role: "editor"
 *             }]
 *     }
 */
export interface CreateCollectionRequest {
    /** A descriptive name for the collection. */
    name: string;
    /** An in depth name for the agent's function. Useful for routing requests to the right agent. */
    description: string;
    /** A list of collaborator emails and roles that will have access to the agent. */
    collaborators: Credal.Collaborator[];
}
