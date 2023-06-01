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
  approvalRequestId: "0e101256-3f94-4e29-a973-e922a57a15be",
  id: "3e060807-e2b6-4e3a-b884-5f0597a60ff2",
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
  id: "a54a31e9-4764-4a3e-865e-7956f9251a5a",
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
  GetWorkflowByIdWorkflowStatus,
  GetWorkflowByIdWorkflowTag,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.getWorkflowById({
  id: "9da660ff-57bf-4aad-8f9e-fc1b4512c103",
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
  ListWorkflowJobsWorkflowJobListResponseJobStatus,
  ListWorkflowJobsWorkflowJobListResponseJobType,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.workflow.listWorkflowJobs({
  id: "2648dc2f-6151-499e-bfd0-e9fe6c632ca3",
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
      "ed011799-6312-4fde-8477-1778ff61d017",
      "476360a1-5db6-4a66-8659-a1adeaab5851",
      "d6c645b0-8b61-4891-baa0-fe1ade008e6f",
    ],
    sparseTree: false,
  },
  id: "8c5f350d-8cdb-45a3-8181-43010421813d",
}).then((res: RerunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
