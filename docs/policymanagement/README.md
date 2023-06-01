# policyManagement

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
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.createPolicyBundle({
  bundlePayload: {
    policies: {
      "consequuntur": "ratione",
      "explicabo": "saepe",
      "occaecati": "atque",
      "et": "esse",
    },
  },
  context: "eveniet",
  dry: false,
  ownerID: "accusamus",
}).then((res: CreatePolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDecisionLog

This endpoint will retrieve a decision for a given decision log ID

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getDecisionLog({
  context: "veritatis",
  decisionID: "esse",
  ownerID: "quod",
}).then((res: GetDecisionLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDecisionLogPolicyBundle

This endpoint will retrieve a policy bundle for a given decision log ID

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogPolicyBundleResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getDecisionLogPolicyBundle({
  context: "nam",
  decisionID: "vero",
  ownerID: "aliquid",
}).then((res: GetDecisionLogPolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDecisionLogs

This endpoint will return a list of decision audit logs that were made using this owner's policies.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionLogsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getDecisionLogs({
  after: new Date("2022-02-05T00:34:15.868Z"),
  before: new Date("2022-04-24T03:22:50.654Z"),
  branch: "molestiae",
  context: "rerum",
  offset: 580197,
  ownerID: "minima",
  projectId: "distinctio",
  status: "eligendi",
}).then((res: GetDecisionLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDecisionSettings

This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetDecisionSettingsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getDecisionSettings({
  context: "sit",
  ownerID: "culpa",
}).then((res: GetDecisionSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPolicyBundle

This endpoint will retrieve a policy bundle

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPolicyBundleResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getPolicyBundle({
  context: "tempore",
  ownerID: "adipisci",
}).then((res: GetPolicyBundleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPolicyDocument

This endpoint will retrieve a policy document.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPolicyDocumentResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.getPolicyDocument({
  context: "cumque",
  ownerID: "consequuntur",
  policyName: "consequatur",
}).then((res: GetPolicyDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## makeDecision

This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { MakeDecisionResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.makeDecision({
  requestBody: {
    input: "minus",
    metadata: {
      "sapiente": "consectetur",
      "esse": "blanditiis",
    },
  },
  context: "provident",
  ownerID: "a",
}).then((res: MakeDecisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setDecisionSettings

This endpoint allows modifying decision settings (eg enable/disable policy evaluation)

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { SetDecisionSettingsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.policyManagement.setDecisionSettings({
  decisionSettings: {
    enabled: false,
  },
  context: "nulla",
  ownerID: "quas",
}).then((res: SetDecisionSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
