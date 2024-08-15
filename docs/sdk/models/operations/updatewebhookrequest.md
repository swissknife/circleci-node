# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookRequest = {
    webhookId: "21780bcc-c0db-4bdd-b484-708fb4e391e6",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                     | [operations.UpdateWebhookRequestBody](../../../sdk/models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `webhookId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the webhook (UUID)                                                                          |