# LatestWorkflow

Info about the latest workflow the job was a part of.

## Example Usage

```typescript
import { LatestWorkflow } from "circleci-v2-sdk/sdk/models/operations";

let value: LatestWorkflow = {
  id: "11506a61-142f-42c9-b98f-5c86f916cbe4",
  name: "build-and-test",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | The unique ID of the workflow. |                                |
| `name`                         | *string*                       | :heavy_check_mark:             | The name of the workflow.      | build-and-test                 |