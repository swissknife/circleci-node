# webhook

### Available Operations

* [createWebhook](#createwebhook) - Create a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [getWebhookById](#getwebhookbyid) - Get a webhook
* [getWebhooks](#getwebhooks) - List webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Create a webhook

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateWebhookRequestBodyEvents,
  CreateWebhookRequestBodyScopeType,
  CreateWebhookResponse,
  CreateWebhookWebhookEvents,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.createWebhook({
  events: [
    CreateWebhookRequestBodyEvents.WorkflowCompleted,
  ],
  name: "Melody Cole",
  scope: {
    id: "16fe1f08-f429-44e3-a98f-447f603e8b44",
    type: CreateWebhookRequestBodyScopeType.Project,
  },
  signingSecret: "ipsam",
  url: "debitis",
  verifyTls: false,
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteWebhookResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.deleteWebhook({
  webhookId: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWebhookById

Get a webhook by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetWebhookByIdResponse, GetWebhookByIdWebhookEvents } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.getWebhookById({
  webhookId: "aa8e4824-d0ab-4407-9088-e51862065e90",
}).then((res: GetWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWebhooks

Get a list of webhook that match the given scope-type and scope-id

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetWebhooks200ApplicationJSONWebhookEvents,
  GetWebhooksResponse,
  GetWebhooksScopeType,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.getWebhooks({
  scopeId: "4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8",
  scopeType: GetWebhooksScopeType.Project,
}).then((res: GetWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateWebhook

Update a webhook

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  UpdateWebhookRequestBodyEvents,
  UpdateWebhookResponse,
  UpdateWebhookWebhookEvents,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.updateWebhook({
  requestBody: {
    events: [
      UpdateWebhookRequestBodyEvents.WorkflowCompleted,
      UpdateWebhookRequestBodyEvents.WorkflowCompleted,
      UpdateWebhookRequestBodyEvents.JobCompleted,
    ],
    name: "Ryan Littel",
    signingSecret: "totam",
    url: "suscipit",
    verifyTls: false,
  },
  webhookId: "bc173d68-9eee-4952-af8d-986e881ead4f",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
