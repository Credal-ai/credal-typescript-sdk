/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Credal from "../../../../api/index";
import * as core from "../../../../core";
import { AuthorizedResource } from "./AuthorizedResource";

export const AuthorizedResourceListPage: core.serialization.Schema<
    serializers.AuthorizedResourceListPage.Raw,
    Credal.AuthorizedResourceListPage
> = core.serialization.list(AuthorizedResource);

export declare namespace AuthorizedResourceListPage {
    type Raw = AuthorizedResource.Raw[];
}
