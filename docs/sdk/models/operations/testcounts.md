# TestCounts

Test counts for a given pipeline number

## Example Usage

```typescript
import { TestCounts } from "circleci-v2-sdk/sdk/models/operations";

let value: TestCounts = {
  error: 621169,
  failure: 498180,
  skipped: 866789,
  success: 627735,
  total: 401428,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `error`                                     | *number*                                    | :heavy_check_mark:                          | The number of tests with the error status   |
| `failure`                                   | *number*                                    | :heavy_check_mark:                          | The number of tests with the failure status |
| `skipped`                                   | *number*                                    | :heavy_check_mark:                          | The number of tests with the skipped status |
| `success`                                   | *number*                                    | :heavy_check_mark:                          | The number of tests with the success status |
| `total`                                     | *number*                                    | :heavy_check_mark:                          | The total number of tests                   |