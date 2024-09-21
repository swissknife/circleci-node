# LatestWorkflow

Info about the latest workflow the job was a part of.

## Example Usage

```typescript
import { LatestWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: LatestWorkflow = {
  id: "163a1648-5b0a-434c-9f5d-1ac26e1096ce",
  name: "build-and-test",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | The unique ID of the workflow. |                                |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the workflow.      | build-and-test                 |