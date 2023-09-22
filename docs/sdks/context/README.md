# Context

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
  contextId: "73920592-9396-4fea-b596-eb10faaa2352",
  envVarName: "nobis",
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
  name: "Guadalupe Hickle",
  owner: {
    id: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
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
  contextId: "019da1ff-e78f-4097-b007-4f15471b5e6e",
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
  contextId: "13b99d48-8e1e-491e-850a-d2abd4426980",
  envVarName: "magni",
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
  contextId: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
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
  ownerId: "cd66ae39-5efb-49ba-88f3-a66997074ba4",
  ownerSlug: "labore",
  ownerType: ListContextsOwnerType.Account,
  pageToken: "natus",
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
  contextId: "b6e21419-5989-40af-a563-e2516fe4c8b7",
  pageToken: "architecto",
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

