# UsageExportJob

## Example Usage

```typescript
import { UsageExportJob } from "circleci-v2-sdk/sdk/models/shared";

let value: UsageExportJob = {
  downloadUrls: [
    "https://esteemed-carnival.net",
  ],
  end: new Date("2022-08-20T21:26:11.367Z"),
  start: new Date("2023-07-03T21:21:03.279Z"),
  state: "failed",
  usageExportJobId: "3700e6e7-6414-49c8-bc29-e33bc35a697c",
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