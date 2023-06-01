# job

### Available Operations

* [cancelJob](#canceljob) - Cancel job
* [getJobArtifacts](#getjobartifacts) - Get a job's artifacts
* [getJobDetails](#getjobdetails) - Get job details
* [getTests](#gettests) - Get test metadata

## cancelJob

Cancel job with a given job number.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CancelJobResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.job.cancelJob({
  jobNumber: "nihil",
  projectSlug: "repellat",
}).then((res: CancelJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobArtifacts

Returns a job's artifacts.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetJobArtifactsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.job.getJobArtifacts({
  jobNumber: "quibusdam",
  projectSlug: "sed",
}).then((res: GetJobArtifactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobDetails

Returns job details.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetJobDetailsJobDetailsStatus, GetJobDetailsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.job.getJobDetails({
  jobNumber: "saepe",
  projectSlug: "pariatur",
}).then((res: GetJobDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTests

Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetTestsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.job.getTests({
  jobNumber: "accusantium",
  projectSlug: "consequuntur",
}).then((res: GetTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
