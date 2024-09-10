# ListEnvironmentVariablesFromContextResponse

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextResponse = {
  items: [
    {
      contextId: "b8b90f34-43a1-4108-a0ad-cf4b921879fc",
      createdAt: new Date("2015-09-21T17:29:21.042Z"),
      updatedAt: new Date("2015-09-21T17:29:21.042Z"),
      variable: "POSTGRES_USER",
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `operations.ListEnvironmentVariablesFromContextResponseBody`

```typescript
const value: operations.ListEnvironmentVariablesFromContextResponseBody = /* values here */
```

### `operations.ListEnvironmentVariablesFromContextContextResponseBody`

```typescript
const value: operations.ListEnvironmentVariablesFromContextContextResponseBody = /* values here */
```

