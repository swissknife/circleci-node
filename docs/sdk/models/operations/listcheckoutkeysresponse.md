# ListCheckoutKeysResponse

## Example Usage

```typescript
import { ListCheckoutKeysResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListCheckoutKeysResponse = {
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

## Supported Types

### `operations.ListCheckoutKeysCheckoutKeyListResponse`

```typescript
const value: operations.ListCheckoutKeysCheckoutKeyListResponse = /* values here */
```

### `operations.ListCheckoutKeysResponseBody`

```typescript
const value: operations.ListCheckoutKeysResponseBody = /* values here */
```

