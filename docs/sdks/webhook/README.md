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
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.createWebhook({
  events: [
    CreateWebhookRequestBodyEvents.JobCompleted,
  ],
  name: "Miss Sophie Jacobi",
  scope: {
    id: "75ed4f6f-bee4-41f3-b317-fe35b60eb1ea",
    type: CreateWebhookRequestBodyScopeType.Project,
  },
  signingSecret: "tempora",
  url: "aspernatur",
  verifyTls: false,
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateWebhookRequestBody](../../models/operations/createwebhookrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteWebhookResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.deleteWebhook({
  webhookId: "6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## getWebhookById

Get a webhook by id.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetWebhookByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.getWebhookById({
  webhookId: "2f2fb7b1-94a2-476b-a691-6fe1f08f4294",
}).then((res: GetWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetWebhookByIdRequest](../../models/operations/getwebhookbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetWebhookByIdResponse](../../models/operations/getwebhookbyidresponse.md)>**


## getWebhooks

Get a list of webhook that match the given scope-type and scope-id

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetWebhooksResponse, GetWebhooksScopeType } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.getWebhooks({
  scopeId: "e3698f44-7f60-43e8-b445-e80ca55efd20",
  scopeType: GetWebhooksScopeType.Project,
}).then((res: GetWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWebhooksRequest](../../models/operations/getwebhooksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWebhooksResponse](../../models/operations/getwebhooksresponse.md)>**


## updateWebhook

Update a webhook

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { UpdateWebhookRequestBodyEvents, UpdateWebhookResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.updateWebhook({
  requestBody: {
    events: [
      UpdateWebhookRequestBodyEvents.JobCompleted,
    ],
    name: "Lorraine King IV",
    signingSecret: "exercitationem",
    url: "praesentium",
    verifyTls: false,
  },
  webhookId: "b6a89fbe-3a5a-4a8e-8824-d0ab4075088e",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

