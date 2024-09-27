# TestCounts

Test counts for a given pipeline number

## Example Usage

```typescript
import { TestCounts } from "circleci-v2-sdk/sdk/models/operations";

let value: TestCounts = {
  error: 999809,
  failure: 197259,
  skipped: 534908,
  success: 290248,
  total: 304173,
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