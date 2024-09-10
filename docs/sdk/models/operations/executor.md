# Executor

Information about executor used for a job.

## Example Usage

```typescript
import { Executor } from "circleci-v2-sdk/sdk/models/operations";

let value: Executor = {
  resourceClass: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `resourceClass`      | *string*             | :heavy_check_mark:   | Resource class name. |
| `type`               | *string*             | :heavy_minus_sign:   | Executor type.       |