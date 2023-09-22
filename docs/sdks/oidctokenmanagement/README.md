# OIDCTokenManagement

## Overview

Endpoints related to manage oidc identity tokens

### Available Operations

* [deleteOrgClaims](#deleteorgclaims) - Delete org-level claims
* [deleteProjectClaims](#deleteprojectclaims) - Delete project-level claims
* [getOrgClaims](#getorgclaims) - Get org-level claims
* [getProjectClaims](#getprojectclaims) - Get project-level claims
* [patchOrgClaims](#patchorgclaims) - Patch org-level claims
* [patchProjectClaims](#patchprojectclaims) - Patch project-level claims

## deleteOrgClaims

Deletes org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.deleteOrgClaims({
  claims: "dolores",
  orgID: "58705320-2c73-4d5f-a9b9-0c28909b3fe4",
}).then((res: DeleteOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteOrgClaimsRequest](../../models/operations/deleteorgclaimsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteOrgClaimsResponse](../../models/operations/deleteorgclaimsresponse.md)>**


## deleteProjectClaims

Deletes project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.deleteProjectClaims({
  claims: "iste",
  orgID: "a8d9cbf4-8633-4323-b9b7-7f3a4100674e",
  projectID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
}).then((res: DeleteProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteProjectClaimsRequest](../../models/operations/deleteprojectclaimsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteProjectClaimsResponse](../../models/operations/deleteprojectclaimsresponse.md)>**


## getOrgClaims

Fetches org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.getOrgClaims({
  orgID: "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f",
}).then((res: GetOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetOrgClaimsRequest](../../models/operations/getorgclaimsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetOrgClaimsResponse](../../models/operations/getorgclaimsresponse.md)>**


## getProjectClaims

Fetches project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.getProjectClaims({
  orgID: "870b326b-5a73-4429-8db1-a8422bb679d2",
  projectID: "322715bf-0cbb-41e3-9b8b-90f3443a1108",
}).then((res: GetProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetProjectClaimsRequest](../../models/operations/getprojectclaimsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetProjectClaimsResponse](../../models/operations/getprojectclaimsresponse.md)>**


## patchOrgClaims

Creates/Updates org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { PatchOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.patchOrgClaims({
  patchClaimsRequest: {
    audience: [
      "itaque",
    ],
    ttl: "consequatur",
  },
  orgID: "adcf4b92-1879-4fce-953f-73ef7fbc7abd",
}).then((res: PatchOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PatchOrgClaimsRequest](../../models/operations/patchorgclaimsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PatchOrgClaimsResponse](../../models/operations/patchorgclaimsresponse.md)>**


## patchProjectClaims

Creates/Updates project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { PatchProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.patchProjectClaims({
  patchClaimsRequest: {
    audience: [
      "ducimus",
    ],
    ttl: "dolore",
  },
  orgID: "dd39c0f5-d2cf-4f7c-b0a4-5626d436813f",
  projectID: "16d9f5fc-e6c5-4561-86c3-e250fb008c42",
}).then((res: PatchProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.PatchProjectClaimsRequest](../../models/operations/patchprojectclaimsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchProjectClaimsResponse](../../models/operations/patchprojectclaimsresponse.md)>**

