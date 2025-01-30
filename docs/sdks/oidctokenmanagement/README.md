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
    orgID: "5cd2f542-a380-4d20-bccd-c76e2456a32f",
  });

  // Handle the result
  console.log(result);
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
    orgID: "5cd2f542-a380-4d20-bccd-c76e2456a32f",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
    orgID: "83464c6d-1f59-4f04-a86d-af9fb2296248",
    projectID: "89d4894a-3c77-4a96-b14f-8b4e3a2d3f63",
  });

  // Handle the result
  console.log(result);
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
    orgID: "83464c6d-1f59-4f04-a86d-af9fb2296248",
    projectID: "89d4894a-3c77-4a96-b14f-8b4e3a2d3f63",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
    orgID: "fa744200-07c0-4843-b98e-11553f1d9022",
  });

  // Handle the result
  console.log(result);
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
    orgID: "fa744200-07c0-4843-b98e-11553f1d9022",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
    orgID: "0358514e-8133-4d4e-be72-451901ed040d",
    projectID: "2f247712-b5e1-46ae-acbe-d2e64b8eac05",
  });

  // Handle the result
  console.log(result);
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
    orgID: "0358514e-8133-4d4e-be72-451901ed040d",
    projectID: "2f247712-b5e1-46ae-acbe-d2e64b8eac05",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
    orgID: "bc340d8d-992b-4f7f-9352-c770a986a84d",
  });

  // Handle the result
  console.log(result);
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
    orgID: "bc340d8d-992b-4f7f-9352-c770a986a84d",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
    orgID: "df5451f1-faee-423d-a172-9586a625d2a3",
    projectID: "13af08fc-dfff-47b9-a331-a59c4a03d414",
  });

  // Handle the result
  console.log(result);
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
    orgID: "df5451f1-faee-423d-a172-9586a625d2a3",
    projectID: "13af08fc-dfff-47b9-a331-a59c4a03d414",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |