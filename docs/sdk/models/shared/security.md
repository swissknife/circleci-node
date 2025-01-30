# Security

## Example Usage

```typescript
import { Security } from "circleci-v2-sdk/sdk/models/shared";

let value: Security = {
  basicAuth: {
    password: "",
    username: "",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKeyHeader`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `apiKeyQuery`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `basicAuth`                                                             | [shared.SchemeBasicAuth](../../../sdk/models/shared/schemebasicauth.md) | :heavy_minus_sign:                                                      | N/A                                                                     |