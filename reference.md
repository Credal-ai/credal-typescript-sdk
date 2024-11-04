## Copilots

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">createCopilot</a>({ ...params }) -> Credal.CreateCopilotResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Create a new copilot. The API key used will be added to the copilot for future Requests

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.createCopilot({
    name: "Customer Copilot",
    description: "This copilot is used to answer customer requests based on internal documentation.",
    collaborators: [
        {
            email: "test@gmail.com",
            role: Credal.Role.Editor,
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CreateCopilotRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">createConversation</a>({ ...params }) -> Credal.CreateConversationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

OPTIONAL. Create a new conversation with the Copilot. The conversation ID can be used in the `sendMessage` endpoint. The `sendMessage` endpoint automatically creates new conversations upon first request, but calling this endpoint can simplify certain use cases where it is helpful for the application to have the conversation ID before the first message is sent.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.createConversation({
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    userEmail: "ravin@credal.ai",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CreateConversationRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">provideMessageFeedback</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.provideMessageFeedback({
    userEmail: "ravin@credal.ai",
    messageId: "dd721cd8-4bf2-4b94-9869-258df3dab9dc",
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    messageFeedback: {
        feedback: Credal.FeedbackEnum.Negative,
        suggestedAnswer: "Yes, Credal is SOC 2 compliant.",
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.ProvideMessageFeedbackRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">sendMessage</a>({ ...params }) -> Credal.SendAgentMessageResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.sendMessage({
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    message: "Is Credal SOC 2 compliant?",
    userEmail: "ravin@credal.ai",
    inputVariables: [
        {
            name: "input1",
            urls: ["https://drive.google.com/file/d/123456/view"],
        },
        {
            name: "input2",
            urls: ["https://drive.google.com/file/d/123457/view", "https://drive.google.com/file/d/123458/view"],
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.SendMessageRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">streamMessage</a>({ ...params }) -> core.Stream<Credal.StreamingChunk></code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint allows you to send a message to a specific copilot and get the response back as a streamed set of Server-Sent Events.

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.StreamMessageRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">addCollectionToCopilot</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Link a collection with a copilot. The API Key used must be added to both the collection and the copilot beforehand.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.addCollectionToCopilot({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.AddCollectionToCopilotRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">removeCollectionFromCopilot</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Unlink a collection with a copilot. The API Key used must be added to both the collection and the copilot beforehand.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.removeCollectionFromCopilot({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.RemoveCollectionFromCopilotRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">updateConfiguration</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Update the configuration for a copilot

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.updateConfiguration({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    configuration: {
        name: "Customer Copilot",
        description: "This copilot is used to answer customer requests based on internal documentation.",
        prompt: "You are a polite, helpful assistant used to answer customer requests.",
        aiEndpointConfiguration: {
            baseUrl: "https://api.openai.com/v1/",
            apiKey: "<YOUR_API_KEY_HERE>",
        },
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.UpdateConfigurationRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.copilots.<a href="./src/api/resources/copilots/client/Client.ts">deleteCopilot</a>({ ...params }) -> Credal.DeleteCopilotResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.copilots.deleteCopilot({
    id: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.DeleteCopilotRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Copilots.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## DocumentCatalog

<details><summary> <code>credal.documentCatalog.<a href="./src/api/resources/documentCatalog/client/Client.ts">uploadDocumentContents</a>({ ...params }) -> Credal.UploadDocumentResponse</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCatalog.uploadDocumentContents({
    documentName: "My Document",
    documentContents:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    documentExternalId: "73eead26-d124-4940-b329-5f068a0a8db9",
    allowedUsersEmailAddresses: ["jack@credal.ai", "ravin@credal.ai"],
    uploadAsUserEmail: "jack@credal.ai",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.UploadDocumentContentsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCatalog.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCatalog.<a href="./src/api/resources/documentCatalog/client/Client.ts">metadata</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk patch metadata for documents, synced natively by Credal or manual API uploads

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCatalog.metadata({
    sources: [
        {
            metadata: {
                Department: "HR",
                Country: "United States",
            },
            resourceIdentifier: {
                type: "external-resource-id",
                externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                resourceType: Credal.ResourceType.GoogleDriveItem,
            },
        },
        {
            metadata: {
                Department: "Sales",
                Vertical: "Healthcare",
            },
            resourceIdentifier: {
                type: "external-resource-id",
                externalResourceId: "123456",
                resourceType: Credal.ResourceType.ZendeskTicket,
            },
        },
    ],
    uploadAsUserEmail: "ben@credal.ai",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.DocumentMetadataPatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCatalog.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## DocumentCollections

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">addDocumentsToCollection</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Add documents to a document collection. Note that the documents must already exist in the document catalog to use this endpoint. If you want to upload a new document to a collection, use the `uploadDocumentContents` endpoint.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.addDocumentsToCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    resourceIdentifiers: [
        {
            type: "external-resource-id",
            externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
            resourceType: Credal.ResourceType.GoogleDriveItem,
        },
        {
            type: "external-resource-id",
            externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
            resourceType: Credal.ResourceType.GoogleDriveItem,
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.AddDocumentsToCollectionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">removeDocumentsFromCollection</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Remove documents from a collection

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.removeDocumentsFromCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    resourceIdentifiers: [
        {
            type: "external-resource-id",
            externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
            resourceType: Credal.ResourceType.GoogleDriveItem,
        },
        {
            type: "external-resource-id",
            externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
            resourceType: Credal.ResourceType.GoogleDriveItem,
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.RemoveDocumentsFromCollectionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">createCollection</a>({ ...params }) -> Credal.CreateCollectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Create a new copilot. The API key used will be added to the copilot for future Requests

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.createCollection({
    name: "Customer Collection",
    description: "This collection is used to answer customer requests based on internal documentation.",
    collaborators: [
        {
            email: "test@gmail.com",
            role: Credal.Role.Editor,
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CreateCollectionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">deleteCollection</a>({ ...params }) -> Credal.DeleteCollectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Delete the collection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.deleteCollection({
    collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.DeleteCollectionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">createMongoCollectionSync</a>({ ...params }) -> Credal.MongoCollectionSyncResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Credal lets you easily sync your MongoDB data for use in Collections and Copilots. Create a new sync from a MongoDB collection to a Credal collection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.createMongoCollectionSync({
    mongoUri: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
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
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CreateMongoCollectionSyncRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.documentCollections.<a href="./src/api/resources/documentCollections/client/Client.ts">updateMongoCollectionSync</a>({ ...params }) -> Credal.MongoCollectionSyncResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Credal lets you easily sync your MongoDB data for use in Collections and Copilots. Update an existing sync from a MongoDB collection to a Credal collection via the `mongoCredentialId`, to disambiguate between multiple potential syncs to a given collection.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.documentCollections.updateMongoCollectionSync({
    mongoUri: "mongodb+srv://cluster0.hzwklqn.mongodb.net/Cluster0?retryWrites=true&w=majority",
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
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.UpdateMongoCollectionSyncRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `DocumentCollections.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## PermissionsService

<details><summary> <code>credal.permissionsService.<a href="./src/api/resources/permissionsService/client/Client.ts">checkResourceAuthorizationForUser</a>({ ...params }) -> Credal.CheckResourceAuthorizationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Admin endpoint to check whether the specified user is authorized to read the specified resource.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.permissionsService.checkResourceAuthorizationForUser({
    resourceIdentifier: {
        type: "external-resource-id",
        externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
        resourceType: Credal.ResourceType.GoogleDriveItem,
    },
    userEmail: "john.smith@foo.com",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CheckResourceAuthorizationForUserRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `PermissionsService.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.permissionsService.<a href="./src/api/resources/permissionsService/client/Client.ts">checkBulkResourcesAuthorizationForUser</a>({ ...params }) -> Credal.CheckBulkResourcesAuthorizationResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Admin endpoint to check whether the specified user is authorized to read the specified set of resources.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.permissionsService.checkBulkResourcesAuthorizationForUser({
    resourceIdentifiers: [
        {
            type: "url",
            url: "https://docs.google.com/document/d/170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr/edit",
        },
        {
            type: "external-resource-id",
            externalResourceId: "sfsdfvr54UvyslPVWkQFOA0dfsdfsdflgNycFmdZJQr",
            resourceType: Credal.ResourceType.ZendeskTicket,
        },
    ],
    userEmail: "john.smith@foo.com",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.CheckBulkResourcesAuthorizationForUserRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `PermissionsService.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>credal.permissionsService.<a href="./src/api/resources/permissionsService/client/Client.ts">listCachedAuthorizedResourcesForUser</a>({ ...params }) -> Credal.AuthorizedResourceListPage</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Admin endpoint to list all resources that the specified user is authorized to read. Note this endpoint returns cached results and may not be up-to-date. You can use the checkResourceAuthorizationForUser endpoint with disableCache set to true to get the most up-to-date results.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.permissionsService.listCachedAuthorizedResourcesForUser({
    userEmail: "john.smith@foo.com",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.ListCachedAuthorizedResourcesForUserRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `PermissionsService.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Search

<details><summary> <code>credal.search.<a href="./src/api/resources/search/client/Client.ts">searchDocumentCollection</a>({ ...params }) -> Credal.SearchDocumentCollectionResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Search across all documents in a document collection using the document metadata and contents.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.search.searchDocumentCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    searchQuery: "ABC Corp",
    structuredQueryFilters: [
        {
            field: "status",
            operator: Credal.Operator.Equal,
            value: "Open",
        },
    ],
    userEmail: "jack@credal.ai",
    searchOptions: {
        maxChunks: 10,
        mergeContents: true,
        threshold: 0.8,
        enableSmartFiltering: true,
        enableQueryExtraction: true,
        enableReranking: true,
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.SearchDocumentCollectionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Search.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Users

<details><summary> <code>credal.users.<a href="./src/api/resources/users/client/Client.ts">metadata</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Bulk patch metadata for users

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await credal.users.metadata([
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
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Credal.UserMetadataPatch[]`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Users.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
