# PolicyManagement

## Overview

Endpoints related to managing policies and making policy decisions

### Available Operations

* [createPolicyBundle](#createpolicybundle) - Creates policy bundle for the context
* [getDecisionLog](#getdecisionlog) - Retrieves the owner's decision audit log by given decisionID
* [getDecisionLogPolicyBundle](#getdecisionlogpolicybundle) - Retrieves Policy Bundle for a given decision log ID
* [getDecisionLogs](#getdecisionlogs) - Retrieves the owner's decision audit logs.
* [getDecisionSettings](#getdecisionsettings) - Get the decision settings
* [getPolicyBundle](#getpolicybundle) - Retrieves Policy Bundle
* [getPolicyDocument](#getpolicydocument) - Retrieves a policy document
* [makeDecision](#makedecision) - Makes a decision
* [setDecisionSettings](#setdecisionsettings) - Set the decision settings

## createPolicyBundle

This endpoint replaces the current policy bundle with the provided policy bundle

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CreatePolicyBundleResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.createPolicyBundle({
  bundlePayload: {
    policies: {
      "vero": "aliquid",
    },
  },
  context: "quasi",
  dry: false,
  ownerID: "saepe",
}).then((res: CreatePolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreatePolicyBundleRequest](../../models/operations/createpolicybundlerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreatePolicyBundleResponse](../../models/operations/createpolicybundleresponse.md)>**


## getDecisionLog

This endpoint will retrieve a decision for a given decision log ID

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getDecisionLog({
  context: "vel",
  decisionID: "harum",
  ownerID: "molestiae",
}).then((res: GetDecisionLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetDecisionLogRequest](../../models/operations/getdecisionlogrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetDecisionLogResponse](../../models/operations/getdecisionlogresponse.md)>**


## getDecisionLogPolicyBundle

This endpoint will retrieve a policy bundle for a given decision log ID

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogPolicyBundleResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getDecisionLogPolicyBundle({
  context: "rerum",
  decisionID: "occaecati",
  ownerID: "minima",
}).then((res: GetDecisionLogPolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetDecisionLogPolicyBundleRequest](../../models/operations/getdecisionlogpolicybundlerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetDecisionLogPolicyBundleResponse](../../models/operations/getdecisionlogpolicybundleresponse.md)>**


## getDecisionLogs

This endpoint will return a list of decision audit logs that were made using this owner's policies.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getDecisionLogs({
  after: new Date("2021-06-27T13:14:16.980Z"),
  before: new Date("2022-05-13T20:06:18.158Z"),
  branch: "tempore",
  buildNumber: "adipisci",
  context: "cumque",
  offset: 160538,
  ownerID: "consequatur",
  projectId: "minus",
  status: "quaerat",
}).then((res: GetDecisionLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetDecisionLogsRequest](../../models/operations/getdecisionlogsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetDecisionLogsResponse](../../models/operations/getdecisionlogsresponse.md)>**


## getDecisionSettings

This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionSettingsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getDecisionSettings({
  context: "sapiente",
  ownerID: "consectetur",
}).then((res: GetDecisionSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetDecisionSettingsRequest](../../models/operations/getdecisionsettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetDecisionSettingsResponse](../../models/operations/getdecisionsettingsresponse.md)>**


## getPolicyBundle

This endpoint will retrieve a policy bundle

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPolicyBundleResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getPolicyBundle({
  context: "esse",
  ownerID: "blanditiis",
}).then((res: GetPolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetPolicyBundleRequest](../../models/operations/getpolicybundlerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetPolicyBundleResponse](../../models/operations/getpolicybundleresponse.md)>**


## getPolicyDocument

This endpoint will retrieve a policy document.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPolicyDocumentResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.getPolicyDocument({
  context: "provident",
  ownerID: "a",
  policyName: "nulla",
}).then((res: GetPolicyDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetPolicyDocumentRequest](../../models/operations/getpolicydocumentrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetPolicyDocumentResponse](../../models/operations/getpolicydocumentresponse.md)>**


## makeDecision

This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { MakeDecisionResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.makeDecision({
  requestBody: {
    input: "quas",
    metadata: {},
  },
  context: "esse",
  ownerID: "quasi",
}).then((res: MakeDecisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.MakeDecisionRequest](../../models/operations/makedecisionrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.MakeDecisionResponse](../../models/operations/makedecisionresponse.md)>**


## setDecisionSettings

This endpoint allows modifying decision settings (eg enable/disable policy evaluation)

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { SetDecisionSettingsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.policyManagement.setDecisionSettings({
  decisionSettings: {
    enabled: false,
  },
  context: "a",
  ownerID: "error",
}).then((res: SetDecisionSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.SetDecisionSettingsRequest](../../models/operations/setdecisionsettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.SetDecisionSettingsResponse](../../models/operations/setdecisionsettingsresponse.md)>**

