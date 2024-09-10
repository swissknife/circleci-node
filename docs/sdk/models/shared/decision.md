# Decision

## Example Usage

```typescript
import { Decision } from "circleci-v2-sdk/sdk/models/shared";

let value: Decision = {
  status: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `enabledRules`                                                | *string*[]                                                    | :heavy_minus_sign:                                            | N/A                                                           |
| `hardFailures`                                                | [shared.Violation](../../../sdk/models/shared/violation.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
| `reason`                                                      | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `softFailures`                                                | [shared.Violation](../../../sdk/models/shared/violation.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
| `status`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |