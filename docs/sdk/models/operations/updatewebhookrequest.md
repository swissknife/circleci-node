# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateWebhookRequest = {
  webhookId: "45b3d9ff-2f00-4ff2-b77d-ac7abb015066",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                     | [operations.UpdateWebhookRequestBody](../../../sdk/models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `webhookId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the webhook (UUID)                                                                          |