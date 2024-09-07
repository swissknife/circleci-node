# ParallelRuns

Info about a status of the parallel run.

## Example Usage

```typescript
import { ParallelRuns } from "circleci-v2-sdk/sdk/models/operations";

let value: ParallelRuns = {
    index: 316488,
    status: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `index`                     | *number*                    | :heavy_check_mark:          | Index of the parallel run.  |
| `status`                    | *string*                    | :heavy_check_mark:          | Status of the parallel run. |