/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Copilots } from "./api/resources/copilots/client/Client";
import { DocumentCatalog } from "./api/resources/documentCatalog/client/Client";
import { DocumentCollections } from "./api/resources/documentCollections/client/Client";
import { PermissionsService } from "./api/resources/permissionsService/client/Client";
import { Search } from "./api/resources/search/client/Client";
import { Users } from "./api/resources/users/client/Client";

export declare namespace CredalClient {
    interface Options {
        environment?: core.Supplier<environments.CredalEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class CredalClient {
    constructor(protected readonly _options: CredalClient.Options = {}) {}

    protected _copilots: Copilots | undefined;

    public get copilots(): Copilots {
        return (this._copilots ??= new Copilots(this._options));
    }

    protected _documentCatalog: DocumentCatalog | undefined;

    public get documentCatalog(): DocumentCatalog {
        return (this._documentCatalog ??= new DocumentCatalog(this._options));
    }

    protected _documentCollections: DocumentCollections | undefined;

    public get documentCollections(): DocumentCollections {
        return (this._documentCollections ??= new DocumentCollections(this._options));
    }

    protected _permissionsService: PermissionsService | undefined;

    public get permissionsService(): PermissionsService {
        return (this._permissionsService ??= new PermissionsService(this._options));
    }

    protected _search: Search | undefined;

    public get search(): Search {
        return (this._search ??= new Search(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }
}
