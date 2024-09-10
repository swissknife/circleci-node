# ListCheckoutKeysCheckoutKeyListResponse

A sequence of checkout keys.

## Example Usage

```typescript
import { ListCheckoutKeysCheckoutKeyListResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListCheckoutKeysCheckoutKeyListResponse = {
  items: [
    {
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      fingerprint: "c9:0b:1c:4f:d5:65:56:b9:ad:88:f9:81:2b:37:74:2f",
      preferred: true,
      publicKey: "ssh-rsa ...",
      type: "deploy-key",
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [operations.CheckoutKey](../../../sdk/models/operations/checkoutkey.md)[]             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | A token to pass as a `page-token` query parameter to return the next page of results. |