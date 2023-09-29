# OIDCTokenManagement
(*oidcTokenManagement*)

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
  claims: "Loan Mini",
  orgID: "21f3544d-2ca5-43d8-b02d-62f07cecddec",
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
  claims: "different Bedfordshire",
  orgID: "66e45c66-7d61-42f4-9793-f4014a8568d1",
  projectID: "acf09ef1-b125-42a9-b672-e4182b2819bd",
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
  orgID: "faa87345-442f-4070-a007-ecf098342349",
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
  orgID: "01345488-5416-440e-9811-7333cda41eee",
  projectID: "17124405-51b9-4707-91e2-d3024606dad9",
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
      "Cadmium",
    ],
    ttl: "North Iowa Steel",
  },
  orgID: "8db81de9-39b2-4ebc-ba7e-f13a592ac772",
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
      "Hybrid",
    ],
    ttl: "Moses South terrapin",
  },
  orgID: "16f2ace9-e528-43bd-9197-32a9151836aa",
  projectID: "863235ad-82ba-4634-8011-32a6f00f82fc",
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

