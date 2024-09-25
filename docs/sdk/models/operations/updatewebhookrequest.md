# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookRequest = {
  webhookId: "23d5760b-8a46-436a-bfa8-61729bf462ed",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                     | [operations.UpdateWebhookRequestBody](../../../sdk/models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `webhookId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the webhook (UUID)                                                                          |