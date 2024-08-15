# LatestWorkflow

Info about the latest workflow the job was a part of.

## Example Usage

```typescript
import { LatestWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: LatestWorkflow = {
    id: "2563f94e-29e9-473e-922a-57a15be3e060",
    name: "build-and-test",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | The unique ID of the workflow. |                                |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the workflow.      | build-and-test                 |