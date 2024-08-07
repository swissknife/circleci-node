# Project
(*project*)

## Overview

[__EXPERIMENTAL__] Endpoints related to creating and managing a project.

### Available Operations

* [createCheckoutKey](#createcheckoutkey) - Create a new checkout key
* [createEnvVar](#createenvvar) - Create an environment variable
* [createProject](#createproject) - 🧪 Create a project
* [deleteCheckoutKey](#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](#getcheckoutkey) - Get a checkout key
* [getEnvVar](#getenvvar) - Get a masked environment variable
* [getProjectBySlug](#getprojectbyslug) - Get a project
* [getProjectSettings](#getprojectsettings) - 🧪 Get project settings
* [listCheckoutKeys](#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](#listenvvars) - List all environment variables
* [patchProjectSettings](#patchprojectsettings) - 🧪 Update project settings

## createCheckoutKey

Not available to projects that use GitLab or GitHub App. Creates a new checkout key. This API request is only usable with a user API token.
                           Please ensure that you have authorized your account with GitHub before creating user keys.
                           This is necessary to give CircleCI the permission to create a user key associated with
                           your GitHub user account. You can find this page by visiting Project Settings > Checkout SSH Keys

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CheckoutKeyInputType } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.createCheckoutKey({
    requestBody: {
      type: CheckoutKeyInputType.DeployKey,
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateCheckoutKeyRequest](../../sdk/models/operations/createcheckoutkeyrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCheckoutKeyResponse](../../sdk/models/operations/createcheckoutkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createEnvVar

Creates a new environment variable.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.createEnvVar({
    requestBody: {
      name: "foo",
      value: "xxxx1234",
    },
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
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
| `request`                                                                            | [operations.CreateEnvVarRequest](../../sdk/models/operations/createenvvarrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateEnvVarResponse](../../sdk/models/operations/createenvvarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createProject

[__EXPERIMENTAL__]  Creates a new CircleCI project, and returns a list of the default advanced settings. Can only be called on a repo with a main branch and an existing config.yml file. Not yet available to projects that use GitLab or GitHub App.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.createProject({
    organization: "CircleCI-Public",
    project: "api-preview-docs",
    provider: "gh",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateProjectRequest](../../sdk/models/operations/createprojectrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateProjectResponse](../../sdk/models/operations/createprojectresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteCheckoutKey

Deletes the checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.deleteCheckoutKey({
    fingerprint: "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteCheckoutKeyRequest](../../sdk/models/operations/deletecheckoutkeyrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteCheckoutKeyResponse](../../sdk/models/operations/deletecheckoutkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteEnvVar

Deletes the environment variable named :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.deleteEnvVar({
    name: "foo",
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
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
| `request`                                                                            | [operations.DeleteEnvVarRequest](../../sdk/models/operations/deleteenvvarrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteEnvVarResponse](../../sdk/models/operations/deleteenvvarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCheckoutKey

Returns an individual checkout key via md5 or sha256 fingerprint. sha256 keys should be url-encoded.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.getCheckoutKey({
    fingerprint: "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
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
| `request`                                                                                | [operations.GetCheckoutKeyRequest](../../sdk/models/operations/getcheckoutkeyrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCheckoutKeyResponse](../../sdk/models/operations/getcheckoutkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEnvVar

Returns the masked value of environment variable :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.getEnvVar({
    name: "foo",
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetEnvVarRequest](../../sdk/models/operations/getenvvarrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetEnvVarResponse](../../sdk/models/operations/getenvvarresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectBySlug

Retrieves a project by project slug.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.getProjectBySlug({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
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
| `request`                                                                                    | [operations.GetProjectBySlugRequest](../../sdk/models/operations/getprojectbyslugrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectBySlugResponse](../../sdk/models/operations/getprojectbyslugresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectSettings

[__EXPERIMENTAL__] Returns a list of the advanced settings for a CircleCI project, whether enabled (true) or not (false).

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.getProjectSettings({
    organization: "CircleCI-Public",
    project: "api-preview-docs",
    provider: "gh",
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
| `request`                                                                                        | [operations.GetProjectSettingsRequest](../../sdk/models/operations/getprojectsettingsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetProjectSettingsResponse](../../sdk/models/operations/getprojectsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCheckoutKeys

Returns a sequence of checkout keys for `:project`.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { Digest } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.listCheckoutKeys({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
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
| `request`                                                                                    | [operations.ListCheckoutKeysRequest](../../sdk/models/operations/listcheckoutkeysrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCheckoutKeysResponse](../../sdk/models/operations/listcheckoutkeysresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEnvVars

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.listEnvVars({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListEnvVarsRequest](../../sdk/models/operations/listenvvarsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListEnvVarsResponse](../../sdk/models/operations/listenvvarsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchProjectSettings

[__EXPERIMENTAL__] Updates one or more of the advanced settings for a CircleCI project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.project.patchProjectSettings({
    organization: "CircleCI-Public",
    project: "api-preview-docs",
    projectSettings: {
      advanced: {
        prOnlyBranchOverrides: [
          "<value>",
        ],
      },
    },
    provider: "gh",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchProjectSettingsRequest](../../sdk/models/operations/patchprojectsettingsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchProjectSettingsResponse](../../sdk/models/operations/patchprojectsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
