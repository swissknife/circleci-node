# SetDecisionSettingsRequest

## Example Usage

```typescript
import { SetDecisionSettingsRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: SetDecisionSettingsRequest = {
  context: "<value>",
  ownerID: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `decisionSettings`                                                        | [shared.DecisionSettings](../../../sdk/models/shared/decisionsettings.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `context`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `ownerID`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |