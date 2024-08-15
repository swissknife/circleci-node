# CreateUsageExportRequestBody

## Example Usage

```typescript
import { CreateUsageExportRequestBody } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateUsageExportRequestBody = {
    end: new Date("2024-04-27T07:53:12.695Z"),
    start: new Date("2024-03-23T09:31:34.975Z"),
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `end`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | The end date & time (inclusive) of the range from which data will be pulled. Must be no more than 31 days after `start`. |
| `sharedOrgIds`                                                                                                           | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `start`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | The start date & time (inclusive) of the range from which data will be pulled. Must be no more than one year ago.        |