# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookRequest = {
  webhookId: "a23d5760-b8a4-4636-bafa-861729bf462e",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                     | [operations.UpdateWebhookRequestBody](../../../sdk/models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `webhookId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the webhook (UUID)                                                                          |