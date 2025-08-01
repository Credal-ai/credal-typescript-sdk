/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool";
import { CredalClient } from "../../src/Client";

describe("Users", () => {
    test("metadata", async () => {
        const server = mockServerPool.createServer();
        const client = new CredalClient({ apiKey: "test", environment: server.baseUrl });
        const rawRequestBody = [
            { metadata: { State: "NY", "Job Role": "CEO" }, userEmail: "ravin@credal.ai" },
            { metadata: { State: "NY", Department: "Engineering" }, userEmail: "jack@credal.ai" },
        ];

        server
            .mockEndpoint()
            .patch("/v0/users/metadata")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .build();

        const response = await client.users.metadata([
            {
                metadata: {
                    State: "NY",
                    "Job Role": "CEO",
                },
                userEmail: "ravin@credal.ai",
            },
            {
                metadata: {
                    State: "NY",
                    Department: "Engineering",
                },
                userEmail: "jack@credal.ai",
            },
        ]);
        expect(response).toEqual(undefined);
    });
});
