/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { CredalClient } from "../../src/Client";

describe("DocumentCollections", () => {
    test("addDocumentsToCollection", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
            resourceIdentifiers: [
                {
                    type: "external-resource-id",
                    externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
                {
                    type: "external-resource-id",
                    externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
            ],
        };

        server
            .mockEndpoint()
            .post("/v0/documentCollections/addDocumentsToCollection")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.documentCollections.addDocumentsToCollection({
            collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
            resourceIdentifiers: [
                {
                    type: "external-resource-id",
                    externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
                {
                    type: "external-resource-id",
                    externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
            ],
        });
        expect(response).toEqual(undefined);
    });

    test("removeDocumentsFromCollection", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
            resourceIdentifiers: [
                {
                    type: "external-resource-id",
                    externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
                {
                    type: "external-resource-id",
                    externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
            ],
        };

        server
            .mockEndpoint()
            .delete("/v0/documentCollections/removeDocumentsFromCollection")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.documentCollections.removeDocumentsFromCollection({
            collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
            resourceIdentifiers: [
                {
                    type: "external-resource-id",
                    externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
                {
                    type: "external-resource-id",
                    externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
                    resourceType: "GOOGLE_DRIVE_ITEM",
                },
            ],
        });
        expect(response).toEqual(undefined);
    });

    test("createCollection", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            name: "Customer Collection",
            description: "This collection is used to answer customer requests based on internal documentation.",
            collaborators: [{ email: "test@gmail.com", role: "editor" }],
        };
        const rawResponseBody = { collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a" };
        server
            .mockEndpoint()
            .post("/v0/documentCollections/createCollection")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentCollections.createCollection({
            name: "Customer Collection",
            description: "This collection is used to answer customer requests based on internal documentation.",
            collaborators: [
                {
                    email: "test@gmail.com",
                    role: "editor",
                },
            ],
        });
        expect(response).toEqual({
            collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
        });
    });

    test("deleteCollection", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = { collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a" };
        const rawResponseBody = { collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a" };
        server
            .mockEndpoint()
            .delete("/v0/documentCollections/deleteCollection")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentCollections.deleteCollection({
            collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
        });
        expect(response).toEqual({
            collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
        });
    });

    test("createMongoCollectionSync", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            mongoURI: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
            collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
            config: {
                syncName: "My sales transcripts",
                collectionName: "myCollection",
                filterExpression: { status: { $ne: "disabled" } },
                sourceFields: {
                    body: "body",
                    sourceName: "meetingName",
                    sourceSystemUpdated: "transcriptDatetime",
                    sourceUrl: "link",
                },
            },
        };
        const rawResponseBody = {
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            resourceId: "mongo-collection-credal-sync-bfd82450-6c68-11ef-bb2b-f7176fe2f3c4",
            syncLaunched: true,
        };
        server
            .mockEndpoint()
            .post("/v0/documentCollections/mongodb/createMongoSync")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentCollections.createMongoCollectionSync({
            mongoURI: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
            collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
            config: {
                syncName: "My sales transcripts",
                collectionName: "myCollection",
                filterExpression: {
                    status: {
                        $ne: "disabled",
                    },
                },
                sourceFields: {
                    body: "body",
                    sourceName: "meetingName",
                    sourceSystemUpdated: "transcriptDatetime",
                    sourceUrl: "link",
                },
            },
        });
        expect(response).toEqual({
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            resourceId: "mongo-collection-credal-sync-bfd82450-6c68-11ef-bb2b-f7176fe2f3c4",
            syncLaunched: true,
        });
    });

    test("updateMongoCollectionSync", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = {
            mongoURI: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            config: {
                syncName: "My recent summarized sales transcripts",
                collectionName: "myCollection",
                filterExpression: { transcriptDatetime: { $gt: "2023-01-01T00:00:00.000Z" } },
                sourceFields: {
                    body: "transcriptSummary",
                    sourceName: "meetingName",
                    sourceSystemUpdated: "transcriptDatetime",
                    sourceUrl: "link",
                },
            },
        };
        const rawResponseBody = {
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            resourceId: "mongo-collection-credal-sync-bfd82450-6c68-11ef-bb2b-f7176fe2f3c4",
            syncLaunched: true,
        };
        server
            .mockEndpoint()
            .post("/v0/documentCollections/mongodb/updateMongoSync")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.documentCollections.updateMongoCollectionSync({
            mongoURI: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            config: {
                syncName: "My recent summarized sales transcripts",
                collectionName: "myCollection",
                filterExpression: {
                    transcriptDatetime: {
                        $gt: "2023-01-01T00:00:00.000Z",
                    },
                },
                sourceFields: {
                    body: "transcriptSummary",
                    sourceName: "meetingName",
                    sourceSystemUpdated: "transcriptDatetime",
                    sourceUrl: "link",
                },
            },
        });
        expect(response).toEqual({
            mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
            resourceId: "mongo-collection-credal-sync-bfd82450-6c68-11ef-bb2b-f7176fe2f3c4",
            syncLaunched: true,
        });
    });
});
