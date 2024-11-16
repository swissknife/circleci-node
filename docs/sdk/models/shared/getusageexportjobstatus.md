# GetUsageExportJobStatus

## Example Usage

```typescript
import { GetUsageExportJobStatus } from "circleci-v2-sdk/sdk/models/shared";

let value: GetUsageExportJobStatus = {
  downloadUrls: [
    "https://pleasant-hyphenation.com",
  ],
  state: "processing",
  usageExportJobId: "17d9a342-d482-4155-9595-c15a9174a2a7",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `downloadUrls`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | A list of pre signed urls that the client can use to download the results of a Usage Export. |
| `errorReason`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [shared.State](../../../sdk/models/shared/state.md)                                          | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `usageExportJobId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |