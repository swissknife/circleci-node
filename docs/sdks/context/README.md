# Context
(*context*)

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
    apiKeyHeader: "",
  },
});

sdk.context.addEnvironmentVariableToContext({
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
  envVarName: "Pants reproachfully",
}).then((res: AddEnvironmentVariableToContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.AddEnvironmentVariableToContextRequest](../../models/operations/addenvironmentvariabletocontextrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.AddEnvironmentVariableToContextResponse](../../models/operations/addenvironmentvariabletocontextresponse.md)>**


## createContext

Create a new context

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateContextRequestBodyOwner1Type,
  CreateContextRequestBodyOwner2Type,
  CreateContextResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.createContext({
  name: "unsteady optical Administrator",
  owner: {
    id: "ff37ae73-d51a-4d1d-86e3-3428d8359669",
    type: CreateContextRequestBodyOwner1Type.Organization,
  },
}).then((res: CreateContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateContextRequestBody](../../models/operations/createcontextrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateContextResponse](../../models/operations/createcontextresponse.md)>**


## deleteContext

Delete a context

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.deleteContext({
  contextId: "7e402047-2522-48a7-bbf0-da8a8f076c4a",
}).then((res: DeleteContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteContextRequest](../../models/operations/deletecontextrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteContextResponse](../../models/operations/deletecontextresponse.md)>**


## deleteEnvironmentVariableFromContext

Delete an environment variable from a context.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteEnvironmentVariableFromContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.deleteEnvironmentVariableFromContext({
  contextId: "08279212-4ea7-49d9-b11a-c208b7a59267",
  envVarName: "driver",
}).then((res: DeleteEnvironmentVariableFromContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteEnvironmentVariableFromContextRequest](../../models/operations/deleteenvironmentvariablefromcontextrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteEnvironmentVariableFromContextResponse](../../models/operations/deleteenvironmentvariablefromcontextresponse.md)>**


## getContext

Returns basic information about a context.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.getContext({
  contextId: "186cb1f2-7e39-4255-944f-1d226fb6d890",
}).then((res: GetContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetContextRequest](../../models/operations/getcontextrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetContextResponse](../../models/operations/getcontextresponse.md)>**


## listContexts

List all contexts for an owner.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListContextsOwnerType, ListContextsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.listContexts({
  ownerId: "51287e4e-8191-4eec-b08d-4eefb5da22d0",
  ownerSlug: "Central",
  ownerType: ListContextsOwnerType.Organization,
  pageToken: "Fontana",
}).then((res: ListContextsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListContextsRequest](../../models/operations/listcontextsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListContextsResponse](../../models/operations/listcontextsresponse.md)>**


## listEnvironmentVariablesFromContext

List information about environment variables in a context, not including their values.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListEnvironmentVariablesFromContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.context.listEnvironmentVariablesFromContext({
  contextId: "bd93f37e-8737-476a-be63-944592b835e7",
  pageToken: "deliver male Convertible",
}).then((res: ListEnvironmentVariablesFromContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.ListEnvironmentVariablesFromContextRequest](../../models/operations/listenvironmentvariablesfromcontextrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.ListEnvironmentVariablesFromContextResponse](../../models/operations/listenvironmentvariablesfromcontextresponse.md)>**

