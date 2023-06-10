# project

### Available Operations

* [createCheckoutKey](#createcheckoutkey) - Create a new checkout key
* [createEnvVar](#createenvvar) - Create an environment variable
* [deleteCheckoutKey](#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](#getcheckoutkey) - Get a checkout key
* [getEnvVar](#getenvvar) - Get a masked environment variable
* [getProjectBySlug](#getprojectbyslug) - Get a project
* [listCheckoutKeys](#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](#listenvvars) - List all environment variables

## createCheckoutKey

Creates a new checkout key. This API request is only usable with a user API token.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateCheckoutKeyCheckoutKeyCheckoutKeyType,
  CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType,
  CreateCheckoutKeyResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.createCheckoutKey({
  requestBody: {
    type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType.DeployKey,
  },
  projectSlug: "consequuntur",
}).then((res: CreateCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateCheckoutKeyRequest](../../models/operations/createcheckoutkeyrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCheckoutKeyResponse](../../models/operations/createcheckoutkeyresponse.md)>**


## createEnvVar

Creates a new environment variable.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CreateEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.createEnvVar({
  requestBody: {
    name: "foo",
    value: "xxxx1234",
  },
  projectSlug: "ratione",
}).then((res: CreateEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateEnvVarRequest](../../models/operations/createenvvarrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateEnvVarResponse](../../models/operations/createenvvarresponse.md)>**


## deleteCheckoutKey

Deletes the checkout key.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteCheckoutKeyResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.deleteCheckoutKey({
  fingerprint: "explicabo",
  projectSlug: "saepe",
}).then((res: DeleteCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteCheckoutKeyRequest](../../models/operations/deletecheckoutkeyrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteCheckoutKeyResponse](../../models/operations/deletecheckoutkeyresponse.md)>**


## deleteEnvVar

Deletes the environment variable named :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.deleteEnvVar({
  name: "Ivan Bosco",
  projectSlug: "accusamus",
}).then((res: DeleteEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteEnvVarRequest](../../models/operations/deleteenvvarrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteEnvVarResponse](../../models/operations/deleteenvvarresponse.md)>**


## getCheckoutKey

Returns an individual checkout key.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetCheckoutKeyCheckoutKeyCheckoutKeyType, GetCheckoutKeyResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.getCheckoutKey({
  fingerprint: "veritatis",
  projectSlug: "esse",
}).then((res: GetCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetCheckoutKeyRequest](../../models/operations/getcheckoutkeyrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCheckoutKeyResponse](../../models/operations/getcheckoutkeyresponse.md)>**


## getEnvVar

Returns the masked value of environment variable :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.getEnvVar({
  name: "Marco Terry PhD",
  projectSlug: "vel",
}).then((res: GetEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetEnvVarRequest](../../models/operations/getenvvarrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetEnvVarResponse](../../models/operations/getenvvarresponse.md)>**


## getProjectBySlug

Retrieves a project by project slug.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectBySlugProjectVcsInfoProvider, GetProjectBySlugResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.getProjectBySlug({
  projectSlug: "harum",
}).then((res: GetProjectBySlugResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetProjectBySlugRequest](../../models/operations/getprojectbyslugrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetProjectBySlugResponse](../../models/operations/getprojectbyslugresponse.md)>**


## listCheckoutKeys

Returns a sequence of checkout keys for `:project`.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyType,
  ListCheckoutKeysResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.listCheckoutKeys({
  projectSlug: "molestiae",
}).then((res: ListCheckoutKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListCheckoutKeysRequest](../../models/operations/listcheckoutkeysrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListCheckoutKeysResponse](../../models/operations/listcheckoutkeysresponse.md)>**


## listEnvVars

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListEnvVarsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.project.listEnvVars({
  projectSlug: "rerum",
}).then((res: ListEnvVarsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListEnvVarsRequest](../../models/operations/listenvvarsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListEnvVarsResponse](../../models/operations/listenvvarsresponse.md)>**

