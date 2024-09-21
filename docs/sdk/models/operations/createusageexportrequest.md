# CreateUsageExportRequest

## Example Usage

```typescript
import { CreateUsageExportRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: CreateUsageExportRequest = {
  requestBody: {
    end: new Date("2024-09-23T08:46:33.172Z"),
    start: new Date("2022-07-25T08:20:28.144Z"),
  },
  orgId: "b9291e0d-a11e-41fb-8517-c545388b5953",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                             | [operations.CreateUsageExportRequestBody](../../../sdk/models/operations/createusageexportrequestbody.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `orgId`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | An opaque identifier of an organization.                                                                  | b9291e0d-a11e-41fb-8517-c545388b5953                                                                      |