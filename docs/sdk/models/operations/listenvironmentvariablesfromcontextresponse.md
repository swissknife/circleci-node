# ListEnvironmentVariablesFromContextResponse

## Example Usage

```typescript
import { ListEnvironmentVariablesFromContextResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: ListEnvironmentVariablesFromContextResponse = {
  items: [
    {
      contextId: "a99f0bd8-5c17-48b1-8369-e92fd8e8edfe",
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

