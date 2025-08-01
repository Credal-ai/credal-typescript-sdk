/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Credal from "../../../index.js";

export interface DocumentMetadataPatch {
    /** The identifier for the resource you want to patch */
    resourceIdentifier: Credal.ResourceIdentifier;
    /** Key-value object of metadata for document. Keys will be merged with any existing values but can also be set to `null` to effectively remove */
    metadata?: unknown;
}
