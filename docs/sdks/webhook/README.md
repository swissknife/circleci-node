# Webhook
(*webhook*)

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
import { CreateWebhookRequestBodyEvents, CreateWebhookRequestBodyScopeType } from "circleci-v2-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.webhook.createWebhook({
    events: [
      CreateWebhookRequestBodyEvents.JobCompleted,
    ],
    name: "like garage Fresh",
    scope: {
      id: "3b7d2240-08ac-44c5-9d30-daac81ad9fab",
      type: CreateWebhookRequestBodyScopeType.Project,
    },
    signingSecret: "navigate outside",
    url: "http://old-adapter.info",
    verifyTls: false,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.webhook.deleteWebhook({
    webhookId: "90ed7052-6bb0-4b60-93ab-e4433ee4e2bb",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.webhook.getWebhookById({
    webhookId: "48f47148-587e-42d6-8c80-5b1461e57de9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetWebhooksScopeType } from "circleci-v2-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.webhook.getWebhooks({
    scopeId: "14ccf55a-42ac-416c-bacd-a992e8b59ec0",
    scopeType: GetWebhooksScopeType.Project,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateWebhookRequestBodyEvents } from "circleci-v2-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.webhook.updateWebhook({
    requestBody: {
      events: [
        UpdateWebhookRequestBodyEvents.JobCompleted,
      ],
    },
    webhookId: "ac255204-82ad-4436-900a-b198d2970788",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

