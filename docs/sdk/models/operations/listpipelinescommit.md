# ListPipelinesCommit

The latest commit in the pipeline.

## Example Usage

```typescript
import { ListPipelinesCommit } from "circleci-v2-sdk/sdk/models/operations";

let value: ListPipelinesCommit = {
    body: "<value>",
    subject: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `body`                             | *string*                           | :heavy_check_mark:                 | The body of the commit message.    |
| `subject`                          | *string*                           | :heavy_check_mark:                 | The subject of the commit message. |