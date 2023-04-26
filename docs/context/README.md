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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { AddEnvironmentVariableToContextRequest, AddEnvironmentVariableToContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AddEnvironmentVariableToContextRequest = {
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
  envVarName: "cum",
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createContext

Create a new context

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  CreateContextRequestBody,
  CreateContextRequestBodyOwner1TypeEnum,
  CreateContextRequestBodyOwner2TypeEnum,
  CreateContextResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateContextRequestBody = {
  name: "Edna Mante II",
  owner: {
    slug: "sed",
    type: CreateContextRequestBodyOwner2TypeEnum.Organization,
  },
};

sdk.context.createContext(req).then((res: CreateContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteContext

Delete a context

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { DeleteContextRequest, DeleteContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteContextRequest = {
  contextId: "9396fea7-596e-4b10-baaa-2352c5955907",
};

sdk.context.deleteContext(req).then((res: DeleteContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEnvironmentVariableFromContext

Delete an environment variable from a context.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  DeleteEnvironmentVariableFromContextRequest,
  DeleteEnvironmentVariableFromContextResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteEnvironmentVariableFromContextRequest = {
  contextId: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
  envVarName: "quasi",
};

sdk.context.deleteEnvironmentVariableFromContext(req).then((res: DeleteEnvironmentVariableFromContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getContext

Returns basic information about a context.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetContextRequest, GetContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetContextRequest = {
  contextId: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
};

sdk.context.getContext(req).then((res: GetContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listContexts

List all contexts for an owner.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { ListContextsOwnerTypeEnum, ListContextsRequest, ListContextsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListContextsRequest = {
  ownerId: "b99d488e-1e91-4e45-8ad2-abd44269802d",
  ownerSlug: "ipsam",
  ownerType: ListContextsOwnerTypeEnum.Account,
  pageToken: "fugit",
};

sdk.context.listContexts(req).then((res: ListContextsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listEnvironmentVariablesFromContext

List information about environment variables in a context, not including their values.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListEnvironmentVariablesFromContextRequest,
  ListEnvironmentVariablesFromContextResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListEnvironmentVariablesFromContextRequest = {
  contextId: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
  pageToken: "laborum",
};

sdk.context.listEnvironmentVariablesFromContext(req).then((res: ListEnvironmentVariablesFromContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
