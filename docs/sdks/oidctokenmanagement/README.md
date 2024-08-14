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

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.deleteOrgClaims({
    claims: "<value>",
    orgID: "56c7db21-f354-44d2-8a53-d8b02d62f07c",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementDeleteOrgClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementDeleteOrgClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementDeleteOrgClaims(circleci, {
    claims: "<value>",
    orgID: "e4b9f995-f995-45dd-98db-63399c588741",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOrgClaimsRequest](../../sdk/models/operations/deleteorgclaimsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.DeleteOrgClaimsResponse](../../sdk/models/operations/deleteorgclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteProjectClaims

Deletes project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.deleteProjectClaims({
    claims: "<value>",
    orgID: "8d31466e-45c6-467d-a12f-45793f4014a8",
    projectID: "568d1acf-09ef-41b1-a52a-93672e4182b2",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementDeleteProjectClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementDeleteProjectClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementDeleteProjectClaims(circleci, {
    claims: "<value>",
    orgID: "edf50649-d694-4a52-a034-f4e8d98a25fa",
    projectID: "a7ca147e-c283-4fa6-8f53-34b8bcb9b43c",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProjectClaimsRequest](../../sdk/models/operations/deleteprojectclaimsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.DeleteProjectClaimsResponse](../../sdk/models/operations/deleteprojectclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOrgClaims

Fetches org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.getOrgClaims({
    orgID: "faa87345-442f-4070-a007-ecf098342349",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementGetOrgClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementGetOrgClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementGetOrgClaims(circleci, {
    orgID: "fa93cc70-008b-433f-aa84-64dc0f627262",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrgClaimsRequest](../../sdk/models/operations/getorgclaimsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.GetOrgClaimsResponse](../../sdk/models/operations/getorgclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectClaims

Fetches project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.getProjectClaims({
    orgID: "01345488-5416-440e-9811-7333cda41eee",
    projectID: "17124405-51b9-4707-91e2-d3024606dad9",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementGetProjectClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementGetProjectClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementGetProjectClaims(circleci, {
    orgID: "631b4b37-e7b7-4e25-9cab-26abe94999c8",
    projectID: "0973175d-5cba-437d-89e7-3bd9c325ef6c",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectClaimsRequest](../../sdk/models/operations/getprojectclaimsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.GetProjectClaimsResponse](../../sdk/models/operations/getprojectclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchOrgClaims

Creates/Updates org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.patchOrgClaims({
    orgID: "b6c03243-08db-481d-a939-b2ebcfa7ef13",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementPatchOrgClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementPatchOrgClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementPatchOrgClaims(circleci, {
    orgID: "92d75b66-9c3a-46d7-94e0-c54d86ede315",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchOrgClaimsRequest](../../sdk/models/operations/patchorgclaimsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.PatchOrgClaimsResponse](../../sdk/models/operations/patchorgclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchProjectClaims

Creates/Updates project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.oidcTokenManagement.patchProjectClaims({
    orgID: "ddf25b42-5814-4fe1-af2a-ce9e5283bd11",
    projectID: "9732a915-1836-4aa8-a323-5ad82ba63480",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { oidcTokenManagementPatchProjectClaims } from "circleci-v2-sdk/funcs/oidcTokenManagementPatchProjectClaims.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await oidcTokenManagementPatchProjectClaims(circleci, {
    orgID: "77cd2839-18c2-4331-ae1b-9f7baddb77c5",
    projectID: "34fcb246-6aca-4954-9ad4-a55acc211525",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchProjectClaimsRequest](../../sdk/models/operations/patchprojectclaimsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.PatchProjectClaimsResponse](../../sdk/models/operations/patchprojectclaimsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
