# UsageExportJob

## Example Usage

```typescript
import { UsageExportJob } from "circleci-v2-sdk/sdk/models/shared";

let value: UsageExportJob = {
  downloadUrls: [
    "https://kooky-cassava.com",
  ],
  end: new Date("2023-11-02T02:51:49.131Z"),
  start: new Date("2022-12-27T05:13:49.176Z"),
  state: "created",
  usageExportJobId: "a0122c12-72b7-4e0d-b2e5-80b3ea442c74",
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