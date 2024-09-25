# GetUsageExportJobStatus

## Example Usage

```typescript
import { GetUsageExportJobStatus } from "circleci-v2-sdk/sdk/models/shared";

let value: GetUsageExportJobStatus = {
  downloadUrls: [
    "https://stingy-case.net",
  ],
  state: "processing",
  usageExportJobId: "bfc9b740-a27a-4e93-a7a3-bc8d38ebc395",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `downloadUrls`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | A list of pre signed urls that the client can use to download the results of a Usage Export. |
| `errorReason`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [shared.State](../../../sdk/models/shared/state.md)                                          | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `usageExportJobId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |