# UsageExportJob

## Example Usage

```typescript
import { UsageExportJob } from "circleci-v2-sdk/sdk/models/shared";

let value: UsageExportJob = {
    downloadUrls: ["https://pretty-gorilla.info"],
    end: new Date("2022-02-02T01:56:34.519Z"),
    start: new Date("2022-03-26T03:47:07.287Z"),
    state: "processing",
    usageExportJobId: "4e06f5bf-6ae5-491b-88bd-ef3612b63c20",
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