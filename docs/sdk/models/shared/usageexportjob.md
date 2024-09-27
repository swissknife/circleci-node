# UsageExportJob

## Example Usage

```typescript
import { UsageExportJob } from "circleci-v2-sdk/sdk/models/shared";

let value: UsageExportJob = {
  downloadUrls: [
    "https://unfortunate-birth.net",
  ],
  end: new Date("2023-06-17T15:50:06.479Z"),
  start: new Date("2023-11-24T19:19:10.725Z"),
  state: "failed",
  usageExportJobId: "8a992dcf-c9ea-4429-8bd4-e9bce46ed67b",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `downloadUrls`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | A list of pre signed urls that the client can use to download the results of a Usage Export.  |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.UsageExportJobState](../../../sdk/models/shared/usageexportjobstate.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageExportJobId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |