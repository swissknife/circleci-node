# DeleteContextRestrictionRequest

## Example Usage

```typescript
import { DeleteContextRestrictionRequest } from "circleci-v2-sdk/sdk/models/operations";

let value: DeleteContextRestrictionRequest = {
  contextId: "be8bb2e3-c3d6-4098-89f4-572ff976ba9a",
  restrictionId: "1c23d2cb-07b1-4a28-8af3-e369732050ed",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `contextId`                                    | *string*                                       | :heavy_check_mark:                             | An opaque identifier of a context.             | be8bb2e3-c3d6-4098-89f4-572ff976ba9a           |
| `restrictionId`                                | *string*                                       | :heavy_check_mark:                             | An opaque identifier of a context restriction. | 1c23d2cb-07b1-4a28-8af3-e369732050ed           |