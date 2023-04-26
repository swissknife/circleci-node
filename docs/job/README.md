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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { CancelJobRequest, CancelJobResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CancelJobRequest = {
  jobNumber: "nihil",
  projectSlug: "repellat",
};

sdk.job.cancelJob(req).then((res: CancelJobResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getJobArtifacts

Returns a job's artifacts.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetJobArtifactsRequest, GetJobArtifactsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJobArtifactsRequest = {
  jobNumber: "quibusdam",
  projectSlug: "sed",
};

sdk.job.getJobArtifacts(req).then((res: GetJobArtifactsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getJobDetails

Returns job details.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetJobDetailsJobDetailsStatusEnum, GetJobDetailsRequest, GetJobDetailsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJobDetailsRequest = {
  jobNumber: "saepe",
  projectSlug: "pariatur",
};

sdk.job.getJobDetails(req).then((res: GetJobDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getTests

Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetTestsRequest, GetTestsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTestsRequest = {
  jobNumber: "accusantium",
  projectSlug: "consequuntur",
};

sdk.job.getTests(req).then((res: GetTestsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
