# UsageExportJob

## Example Usage

```typescript
import { UsageExportJob } from "circleci-v2-sdk/sdk/models/shared";

let value: UsageExportJob = {
    downloadUrls: ["http://shameful-door.biz"],
    end: new Date("2022-12-15T23:16:14.981Z"),
    start: new Date("2023-06-02T06:35:03.064Z"),
    state: "failed",
    usageExportJobId: "992c8dbd-a6a6-41ef-a219-8258fd0a9eba",
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