# workflow

### Available Operations

* [approvePendingApprovalJobById](#approvependingapprovaljobbyid) - Approve a job
* [cancelWorkflow](#cancelworkflow) - Cancel a workflow
* [getWorkflowById](#getworkflowbyid) - Get a workflow
* [listWorkflowJobs](#listworkflowjobs) - Get a workflow's jobs
* [rerunWorkflow](#rerunworkflow) - Rerun a workflow

## approvePendingApprovalJobById

Approves a pending approval job in a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ApprovePendingApprovalJobByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.approvePendingApprovalJobById({
  approvalRequestId: "a19f1d17-0513-439d-8808-6a1840394c26",
  id: "071f93f5-f064-42da-87af-515cc413aa63",
}).then((res: ApprovePendingApprovalJobByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## cancelWorkflow

Cancels a running workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CancelWorkflowResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.cancelWorkflow({
  id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
}).then((res: CancelWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkflowById

Returns summary fields of a workflow by ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetWorkflowByIdResponse,
  GetWorkflowByIdWorkflowStatusEnum,
  GetWorkflowByIdWorkflowTagEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.getWorkflowById({
  id: "fbee41f3-3317-4fe3-9b60-eb1ea426555b",
}).then((res: GetWorkflowByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listWorkflowJobs

Returns a sequence of jobs for a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListWorkflowJobsResponse,
  ListWorkflowJobsWorkflowJobListResponseJobStatusEnum,
  ListWorkflowJobsWorkflowJobListResponseJobTypeEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.listWorkflowJobs({
  id: "a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb",
}).then((res: ListWorkflowJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## rerunWorkflow

Reruns a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { RerunWorkflowResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.rerunWorkflow({
  requestBody: {
    enableSsh: false,
    fromFailed: false,
    jobs: [
      "b194a276-b269-416f-a1f0-8f4294e3698f",
      "447f603e-8b44-45e8-8ca5-5efd20e457e1",
    ],
    sparseTree: false,
  },
  id: "858b6a89-fbe3-4a5a-a8e4-824d0ab40750",
}).then((res: RerunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
