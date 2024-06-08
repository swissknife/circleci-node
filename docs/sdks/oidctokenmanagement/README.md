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

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.deleteOrgClaims({
    claims: "<value>",
    orgID: "56c7db21-f354-44d2-8a53-d8b02d62f07c",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteOrgClaimsRequest](../../sdk/models/operations/deleteorgclaimsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteOrgClaimsResponse](../../sdk/models/operations/deleteorgclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteProjectClaims

Deletes project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.deleteProjectClaims({
    claims: "<value>",
    orgID: "8d31466e-45c6-467d-a12f-45793f4014a8",
    projectID: "568d1acf-09ef-41b1-a52a-93672e4182b2",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteProjectClaimsRequest](../../sdk/models/operations/deleteprojectclaimsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteProjectClaimsResponse](../../sdk/models/operations/deleteprojectclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOrgClaims

Fetches org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.getOrgClaims({
    orgID: "faa87345-442f-4070-a007-ecf098342349",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetOrgClaimsRequest](../../sdk/models/operations/getorgclaimsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOrgClaimsResponse](../../sdk/models/operations/getorgclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectClaims

Fetches project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.getProjectClaims({
    orgID: "01345488-5416-440e-9811-7333cda41eee",
    projectID: "17124405-51b9-4707-91e2-d3024606dad9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProjectClaimsRequest](../../sdk/models/operations/getprojectclaimsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectClaimsResponse](../../sdk/models/operations/getprojectclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchOrgClaims

Creates/Updates org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.patchOrgClaims({
    patchClaimsRequest: {
      audience: [
        "<value>",
      ],
    },
    orgID: "b6c03243-08db-481d-a939-b2ebcfa7ef13",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchOrgClaimsRequest](../../sdk/models/operations/patchorgclaimsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchOrgClaimsResponse](../../sdk/models/operations/patchorgclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchProjectClaims

Creates/Updates project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.oidcTokenManagement.patchProjectClaims({
    patchClaimsRequest: {
      audience: [
        "<value>",
      ],
    },
    orgID: "ddf25b42-5814-4fe1-af2a-ce9e5283bd11",
    projectID: "9732a915-1836-4aa8-a323-5ad82ba63480",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchProjectClaimsRequest](../../sdk/models/operations/patchprojectclaimsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchProjectClaimsResponse](../../sdk/models/operations/patchprojectclaimsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
