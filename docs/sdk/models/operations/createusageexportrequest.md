# CreateUsageExportRequest

## Example Usage

```typescript
import { CreateUsageExportRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateUsageExportRequest = {
  requestBody: {
    end: new Date("2022-12-08T08:21:53.641Z"),
    start: new Date("2022-09-30T02:40:00.548Z"),
  },
  orgId: "b9291e0d-a11e-41fb-8517-c545388b5953",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                             | [operations.CreateUsageExportRequestBody](../../../sdk/models/operations/createusageexportrequestbody.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `orgId`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | An opaque identifier of an organization.                                                                  | b9291e0d-a11e-41fb-8517-c545388b5953                                                                      |