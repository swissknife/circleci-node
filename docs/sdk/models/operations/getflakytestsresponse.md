# GetFlakyTestsResponse

## Example Usage

```typescript
import { GetFlakyTestsResponse } from "circleci-v2-sdk/sdk/models/operations";

let value: GetFlakyTestsResponse = {
    flakyTests: [
        {
            classname: "<value>",
            file: "<value>",
            jobName: "<value>",
            jobNumber: 926213,
            pipelineNumber: 132487,
            source: "<value>",
            testName: "<value>",
            timesFlaked: 325310,
            workflowCreatedAt: "<value>",
            workflowId: "<value>",
            workflowName: "<value>",
        },
    ],
    totalFlakyTests: 5,
};
```

## Supported Types

### `operations.GetFlakyTestsResponseBody`

```typescript
const value: operations.GetFlakyTestsResponseBody = /* values here */
```

### `operations.GetFlakyTestsInsightsResponseBody`

```typescript
const value: operations.GetFlakyTestsInsightsResponseBody = /* values here */
```

