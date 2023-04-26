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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  CreateWebhookRequestBody,
  CreateWebhookRequestBodyEventsEnum,
  CreateWebhookRequestBodyScopeTypeEnum,
  CreateWebhookResponse,
  CreateWebhookWebhookEventsEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateWebhookRequestBody = {
  events: [
    CreateWebhookRequestBodyEventsEnum.WorkflowCompleted,
  ],
  name: "Vicky Lynch",
  scope: {
    id: "6b144290-7474-4778-a7bd-466d28c10ab3",
    type: CreateWebhookRequestBodyScopeTypeEnum.Project,
  },
  signingSecret: "quo",
  url: "illum",
  verifyTls: false,
};

sdk.webhook.createWebhook(req).then((res: CreateWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { DeleteWebhookRequest, DeleteWebhookResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteWebhookRequest = {
  webhookId: "ca425190-4e52-43c7-a0bc-7178e4796f2a",
};

sdk.webhook.deleteWebhook(req).then((res: DeleteWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getWebhookById

Get a webhook by id.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetWebhookByIdRequest, GetWebhookByIdResponse, GetWebhookByIdWebhookEventsEnum } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetWebhookByIdRequest = {
  webhookId: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
};

sdk.webhook.getWebhookById(req).then((res: GetWebhookByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getWebhooks

Get a list of webhook that match the given scope-type and scope-id

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  GetWebhooks200ApplicationJSONWebhookEventsEnum,
  GetWebhooksRequest,
  GetWebhooksResponse,
  GetWebhooksScopeTypeEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetWebhooksRequest = {
  scopeId: "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87",
  scopeType: GetWebhooksScopeTypeEnum.Project,
};

sdk.webhook.getWebhooks(req).then((res: GetWebhooksResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateWebhook

Update a webhook

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  UpdateWebhookRequest,
  UpdateWebhookRequestBodyEventsEnum,
  UpdateWebhookResponse,
  UpdateWebhookWebhookEventsEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateWebhookRequest = {
  requestBody: {
    events: [
      UpdateWebhookRequestBodyEventsEnum.JobCompleted,
    ],
    name: "Kirk Stracke",
    signingSecret: "eveniet",
    url: "asperiores",
    verifyTls: false,
  },
  webhookId: "d121aa6f-1e67-44bd-b04f-15756082d68e",
};

sdk.webhook.updateWebhook(req).then((res: UpdateWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
