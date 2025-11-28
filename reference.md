# Reference
## Copilots
<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">createCopilot</a>({ ...params }) -> Credal.CreateCopilotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new agent. The API key used will be added to the agent for future Requests
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.createCopilot({
    name: "Customer Agent",
    description: "This agent is used to answer customer requests based on internal documentation.",
    collaborators: [{
            email: "test@gmail.com",
            role: "editor"
        }]
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

**request:** `Credal.CreateCopilotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">createConversation</a>({ ...params }) -> Credal.CreateConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OPTIONAL. Create a new conversation with the Agent. The conversation ID can be used in the `sendMessage` endpoint. The `sendMessage` endpoint automatically creates new conversations upon first request, but calling this endpoint can simplify certain use cases where it is helpful for the application to have the conversation ID before the first message is sent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.createConversation({
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    userEmail: "ravin@credal.ai"
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

**request:** `Credal.CreateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">provideMessageFeedback</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.provideMessageFeedback({
    userEmail: "ravin@credal.ai",
    messageId: "dd721cd8-4bf2-4b94-9869-258df3dab9dc",
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    messageFeedback: {
        feedback: "NEGATIVE",
        suggestedAnswer: "Yes, Credal is SOC 2 compliant.",
        descriptiveFeedback: "The response should be extremely clear and concise."
    }
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

**request:** `Credal.ProvideMessageFeedbackRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">sendMessage</a>({ ...params }) -> Credal.SendAgentMessageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.sendMessage({
    agentId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    message: "Is Credal SOC 2 compliant?",
    userEmail: "ravin@credal.ai",
    inputVariables: [{
            name: "input1",
            ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c24"]
        }, {
            name: "input2",
            ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c25", "82e4b12a-6990-45d4-8ebd-85c00e030c26"]
        }]
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

**request:** `Credal.SendMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">streamMessage</a>({ ...params }) -> core.Stream<Credal.StreamingChunk></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to send a message to a specific agent and get the response back as a streamed set of Server-Sent Events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.copilots.streamMessage({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    message: "Is Credal SOC 2 compliant?",
    email: "ravin@credal.ai",
    inputVariables: [{
            name: "input1",
            ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c24"]
        }, {
            name: "input2",
            ids: ["82e4b12a-6990-45d4-8ebd-85c00e030c25", "82e4b12a-6990-45d4-8ebd-85c00e030c26"]
        }]
});
for await (const item of response) {
    console.log(item);
}

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

**request:** `Credal.StreamMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">addCollectionToCopilot</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Link a collection with a agent. The API Key used must be added to both the collection and the agent beforehand.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.addCollectionToCopilot({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e"
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

**request:** `Credal.AddCollectionToCopilotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">removeCollectionFromCopilot</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlink a collection with a agent. The API Key used must be added to both the collection and the agent beforehand.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.removeCollectionFromCopilot({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    collectionId: "def1055f-83c5-43d6-b558-f7a38e7b299e"
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

**request:** `Credal.RemoveCollectionFromCopilotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">updateConfiguration</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the configuration for a agent
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.updateConfiguration({
    copilotId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    configuration: {
        name: "Customer Agent",
        description: "This agent is used to answer customer requests based on internal documentation.",
        prompt: "You are a polite, helpful assistant used to answer customer requests.",
        aiEndpointConfiguration: {
            baseUrl: "https://api.openai.com/v1/",
            apiKey: "<YOUR_API_KEY_HERE>"
        }
    }
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

**request:** `Credal.UpdateConfigurationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">deleteCopilot</a>({ ...params }) -> Credal.DeleteCopilotResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.deleteCopilot({
    id: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a"
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

**request:** `Credal.DeleteCopilotRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">export</a>({ ...params }) -> Credal.ExportCopilotsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export copilot configurations for backup or migration purposes.

**IMPORTANT**: This endpoint requires:
- Admin privileges
- The 'ai-usage-analytics-log.export' scope on the API key

Returns all deployed copilots with their full configuration including model settings, tools, and deployment details. Optional date filters can be applied to narrow down results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.export({
    agentCreatedFrom: "2024-01-01T00:00:00Z",
    agentCreatedTo: "2024-12-31T23:59:59Z"
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

**request:** `Credal.ExportCopilotsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DocumentCatalog
<details><summary><code>client.documentCatalog.<a href="/src/api/resources/documentCatalog/client/Client.ts">uploadDocumentContents</a>({ ...params }) -> Credal.UploadDocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCatalog.uploadDocumentContents({
    documentName: "My Document",
    documentContents: "Lorem ipsum...",
    documentExternalId: "73eead26-d124-4940-b329-5f068a0a8db9",
    allowedUsersEmailAddresses: ["jack@credal.ai", "ravin@credal.ai"],
    uploadAsUserEmail: "jack@credal.ai"
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

**request:** `Credal.UploadDocumentContentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCatalogClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCatalog.<a href="/src/api/resources/documentCatalog/client/Client.ts">syncSourceByUrl</a>({ ...params }) -> Credal.SyncSourceByUrlResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sync a document from a source URL. Does not support recursive web search. Reach out to a Credal representative for access.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCatalog.syncSourceByUrl({
    sourceUrl: "https://drive.google.com/file/d/123456/view",
    uploadAsUserEmail: "ria@credal.ai"
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

**request:** `Credal.SyncSourceByUrlRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCatalogClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCatalog.<a href="/src/api/resources/documentCatalog/client/Client.ts">metadata</a>({ ...params }) -> void</code></summary>
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

```typescript
await client.documentCatalog.metadata({
    sources: [{
            metadata: {
                "Department": "HR",
                "Country": "United States"
            },
            resourceIdentifier: {
                type: "external-resource-id",
                externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
                resourceType: "GOOGLE_DRIVE_ITEM"
            }
        }, {
            metadata: {
                "Department": "Sales",
                "Vertical": "Healthcare"
            },
            resourceIdentifier: {
                type: "external-resource-id",
                externalResourceId: "123456",
                resourceType: "ZENDESK_TICKET"
            }
        }],
    uploadAsUserEmail: "ben@credal.ai"
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

**request:** `Credal.DocumentMetadataPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCatalogClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DocumentCollections
<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">addDocumentsToCollection</a>({ ...params }) -> void</code></summary>
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

```typescript
await client.documentCollections.addDocumentsToCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    resourceIdentifiers: [{
            type: "external-resource-id",
            externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
            resourceType: "GOOGLE_DRIVE_ITEM"
        }, {
            type: "external-resource-id",
            externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
            resourceType: "GOOGLE_DRIVE_ITEM"
        }]
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

**request:** `Credal.AddDocumentsToCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">removeDocumentsFromCollection</a>({ ...params }) -> void</code></summary>
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

```typescript
await client.documentCollections.removeDocumentsFromCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    resourceIdentifiers: [{
            type: "external-resource-id",
            externalResourceId: "170NrBm0Do7gdzvr54UvyslPVWkQFOA0lgNycFmdZJQr",
            resourceType: "GOOGLE_DRIVE_ITEM"
        }, {
            type: "external-resource-id",
            externalResourceId: "398KAHdfkjsdf09r54UvyslPVWkQFOA0lOiu34in923",
            resourceType: "GOOGLE_DRIVE_ITEM"
        }]
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

**request:** `Credal.RemoveDocumentsFromCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">listDocumentsInCollection</a>({ ...params }) -> Credal.ListDocumentsInCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List documents in a collection
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCollections.listDocumentsInCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24"
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

**request:** `Credal.ListDocumentsInCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">createCollection</a>({ ...params }) -> Credal.CreateCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new collection. The API key used will be added to the collection for future Requests
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCollections.createCollection({
    name: "Customer Collection",
    description: "This collection is used to answer customer requests based on internal documentation.",
    collaborators: [{
            email: "test@gmail.com",
            role: "editor"
        }]
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

**request:** `Credal.CreateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">deleteCollection</a>({ ...params }) -> Credal.DeleteCollectionResponse</code></summary>
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

```typescript
await client.documentCollections.deleteCollection({
    collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a"
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

**request:** `Credal.DeleteCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">createMongoCollectionSync</a>({ ...params }) -> Credal.MongoCollectionSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Credal lets you easily sync your MongoDB data for use in Collections and Agents. Create a new sync from a MongoDB collection to a Credal collection.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCollections.createMongoCollectionSync({
    mongoURI: "mongodb+srv://cluster0.abcdefg.mongodb.net/Cluster0?retryWrites=true&w=majority",
    collectionId: "ac20e6ba-0bae-11ef-b25a-efca73df4c3a",
    config: {
        syncName: "My sales transcripts",
        collectionName: "myCollection",
        filterExpression: {
            "status": {
                "$ne": "disabled"
            }
        },
        sourceFields: {
            body: "body",
            sourceName: "meetingName",
            sourceSystemUpdated: "transcriptDatetime",
            sourceUrl: "link"
        }
    }
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

**request:** `Credal.CreateMongoCollectionSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documentCollections.<a href="/src/api/resources/documentCollections/client/Client.ts">updateMongoCollectionSync</a>({ ...params }) -> Credal.MongoCollectionSyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Credal lets you easily sync your MongoDB data for use in Collections and Agents. Update an existing sync from a MongoDB collection to a Credal collection via the `mongoCredentialId`, to disambiguate between multiple potential syncs to a given collection.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentCollections.updateMongoCollectionSync({
    mongoURI: "mongodb+srv://cluster0.abcdefg.mongodb.net/Cluster0?retryWrites=true&w=majority",
    mongoCredentialId: "5988ed76-6ee1-11ef-97dd-1fca54b7c4bc",
    config: {
        syncName: "My recent summarized sales transcripts",
        collectionName: "myCollection",
        filterExpression: {
            "transcriptDatetime": {
                "$gt": "2023-01-01T00:00:00.000Z"
            }
        },
        sourceFields: {
            body: "transcriptSummary",
            sourceName: "meetingName",
            sourceSystemUpdated: "transcriptDatetime",
            sourceUrl: "link"
        }
    }
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

**request:** `Credal.UpdateMongoCollectionSyncRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentCollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Search
<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">searchDocumentCollection</a>({ ...params }) -> Credal.SearchDocumentCollectionResponse</code></summary>
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

```typescript
await client.search.searchDocumentCollection({
    collectionId: "82e4b12a-6990-45d4-8ebd-85c00e030c24",
    searchQuery: "ABC Corp",
    structuredQueryFilters: [{
            field: "status",
            operator: "==",
            value: "Open"
        }],
    userEmail: "jack@credal.ai",
    searchOptions: {
        maxChunks: 10,
        mergeContents: true,
        threshold: 0.8,
        enableSmartFiltering: true,
        enableQueryExtraction: true,
        enableReranking: true
    }
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

**request:** `Credal.SearchDocumentCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">metadata</a>({ ...params }) -> void</code></summary>
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

```typescript
await client.users.metadata([{
        metadata: {
            "State": "NY",
            "Job Role": "CEO"
        },
        userEmail: "ravin@credal.ai"
    }, {
        metadata: {
            "State": "NY",
            "Department": "Engineering"
        },
        userEmail: "jack@credal.ai"
    }]);

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

**request:** `Credal.UserMetadataPatch[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
