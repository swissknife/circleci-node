# context

### Available Operations

* [addEnvironmentVariableToContext](#addenvironmentvariabletocontext) - Add or update an environment variable
* [createContext](#createcontext) - Create a new context
* [deleteContext](#deletecontext) - Delete a context
* [deleteEnvironmentVariableFromContext](#deleteenvironmentvariablefromcontext) - Remove an environment variable
* [getContext](#getcontext) - Get a context
* [listContexts](#listcontexts) - List contexts
* [listEnvironmentVariablesFromContext](#listenvironmentvariablesfromcontext) - List environment variables

## addEnvironmentVariableToContext

Create or update an environment variable within a context. Returns information about the environment variable, not including its value.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { AddEnvironmentVariableToContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.addEnvironmentVariableToContext({
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
  envVarName: "cum",
}).then((res: AddEnvironmentVariableToContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createContext

Create a new context

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateContextRequestBodyOwner1TypeEnum,
  CreateContextRequestBodyOwner2TypeEnum,
  CreateContextResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.createContext({
  name: "Edna Mante II",
  owner: {
    slug: "sed",
    type: CreateContextRequestBodyOwner2TypeEnum.Organization,
  },
}).then((res: CreateContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteContext

Delete a context

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.deleteContext({
  contextId: "9396fea7-596e-4b10-baaa-2352c5955907",
}).then((res: DeleteContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEnvironmentVariableFromContext

Delete an environment variable from a context.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteEnvironmentVariableFromContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.deleteEnvironmentVariableFromContext({
  contextId: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
  envVarName: "quasi",
}).then((res: DeleteEnvironmentVariableFromContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getContext

Returns basic information about a context.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.getContext({
  contextId: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
}).then((res: GetContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listContexts

List all contexts for an owner.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListContextsOwnerTypeEnum, ListContextsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.listContexts({
  ownerId: "b99d488e-1e91-4e45-8ad2-abd44269802d",
  ownerSlug: "ipsam",
  ownerType: ListContextsOwnerTypeEnum.Account,
  pageToken: "fugit",
}).then((res: ListContextsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listEnvironmentVariablesFromContext

List information about environment variables in a context, not including their values.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListEnvironmentVariablesFromContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.listEnvironmentVariablesFromContext({
  contextId: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
  pageToken: "laborum",
}).then((res: ListEnvironmentVariablesFromContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
