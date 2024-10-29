# PipelineRequest

## Example Usage

```typescript
import { PipelineRequest } from "circleci-v2-sdk/sdk/models/shared";

let value: PipelineRequest = {
  checkout: {
    branch: "main",
    tag: "v2",
  },
  config: {
    branch: "main",
    tag: "v2",
  },
  definitionId: "2338d0ae-5541-4bbf-88a2-55e9f7281f80",
  parameters: {
    "example_param": "my value",
    "example_param2": true,
    "example_param3": 3,
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        | Example                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkout`                                                                                                                                                                         | [shared.Checkout](../../../sdk/models/shared/checkout.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                 | N/A                                                                                                                                                                                | {<br/>"tag": "v2"<br/>}                                                                                                                                                            |
| `config`                                                                                                                                                                           | [shared.Config](../../../sdk/models/shared/config.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                 | N/A                                                                                                                                                                                | {<br/>"branch": "main"<br/>}                                                                                                                                                       |
| `definitionId`                                                                                                                                                                     | *string*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | The unique id for the pipeline definition. This can be found in the page Project Settings > Pipelines.                                                                             | 2338d0ae-5541-4bbf-88a2-55e9f7281f80                                                                                                                                               |
| `parameters`                                                                                                                                                                       | Record<string, *any*>                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                 | An object containing pipeline parameters and their values.<br/>Pipeline parameters have the following size limits: 100 max entries, 128 maximum key length, 512 maximum value length.<br/> | {<br/>"example_param": "my value",<br/>"example_param2": true,<br/>"example_param3": 3<br/>}                                                                                       |