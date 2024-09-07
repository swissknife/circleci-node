# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookRequest = {
    webhookId: "41a4d190-feb2-4178-8bcc-c0dbbddb4847",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                     | [operations.UpdateWebhookRequestBody](../../../sdk/models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `webhookId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the webhook (UUID)                                                                          |