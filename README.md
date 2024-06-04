<div align="center">  
  <img src="./credal-dark-logo.svg" width="400" />
  <h1>Credal Typescript SDK</h1>

  <p>
    <strong>The Credal Typescript Library provides convenient access to the Credal API from applications written in Typescript.</strong>
  </p>

  <br>
  <div>
    <a href="https://buildwithfern.com/"><img src="https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen">     
  </div>
  <br>
</div>

# Documentation

Docs for the API endpoints available through the SDK can be found [here](https://docs.credal.ai/getting-started/overview).

## Reference

A full reference of the SDK is available [here](./reference.md).

# Installation

```sh
npm install @credal/sdk
```

# Usage

```typescript
import { CredalClient } from "@credal/sdk";

const client = new CredalClient({
  apiKey: process.env.CREDAL_API_KEY,
});
```

Docs for the API endpoints available through the SDK can be found [here](https://docs.credal.ai/getting-started/overview). 

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `Credal` namespace: 

```ts
import { Credal } from "@credal/sdk"; 

const settings: CredalClient.ChannelSettings = {
  providerId: "slack",
  integrationIdentifier: "...",
  credentials: { ... }
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [CredalError](./src/errors/CredalError.ts) will be thrown:

```ts
import { CredalError } from "@credal/sdk;

try {
  await credal.trigger(...);
} catch (err) {
  if (err instanceof CredalError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of retry attempts has not grown larger
than the configured retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = await credal.trigger(..., {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = await credal.trigger(..., {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

## Aborting Requests

The SDK allows users to abort requests at any point by passing 
in an abort signal. 

```ts
const controller = new AbortController();
const response = await credal.trigger(..., {
  abortSignal: controller.signal,
});
controller.abort(); // aborts the request
```

## Runtime compatiblity

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK 
works in the following runtimes: 

The following runtimes are supported:

- Node.js 18+ 
- Vercel 
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're 
running in an unsupported environment, this provides a way for you to break the glass and 
ensure the SDK works. 

```ts
import { CredalClient } from "@credal/sdk;

const credal = new CredalClient({
  apiKey: "...",
  fetcher: // provide your implementation here
});
```


# Beta Status

This SDK is in beta, and there may be breaking changes between versions without a major 
version update. Therefore, we recommend pinning the package version to a specific version. 
This way, you can install the same version each time without breaking changes.
