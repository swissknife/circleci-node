# GetUsageExportJobStatus

## Example Usage

```typescript
import { GetUsageExportJobStatus } from "circleci-v2-sdk/sdk/models/shared";

let value: GetUsageExportJobStatus = {
  downloadUrls: [
    "https://minty-sailor.com/",
  ],
  state: "completed",
  usageExportJobId: "7c57fb03-4fca-41c2-92d0-1e4ca1c3b68f",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `downloadUrls`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | A list of pre signed urls that the client can use to download the results of a Usage Export. |
| `errorReason`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [shared.State](../../../sdk/models/shared/state.md)                                          | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `usageExportJobId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |