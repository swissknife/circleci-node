# GetUsageExportJobStatus

## Example Usage

```typescript
import { GetUsageExportJobStatus } from "circleci-v2-sdk/sdk/models/shared";

let value: GetUsageExportJobStatus = {
    downloadUrls: ["http://windy-instrumentation.org"],
    state: "created",
    usageExportJobId: "ef049640-d6a1-4831-887a-df596fdf1ad8",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `downloadUrls`                                                                               | *string*[]                                                                                   | :heavy_check_mark:                                                                           | A list of pre signed urls that the client can use to download the results of a Usage Export. |
| `errorReason`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `state`                                                                                      | [shared.State](../../../sdk/models/shared/state.md)                                          | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `usageExportJobId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |