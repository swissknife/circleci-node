# Workflow
(*workflow*)

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
    apiKeyHeader: "",
  },
});

sdk.workflow.approvePendingApprovalJobById({
  approvalRequestId: "89eee952-6f8d-4986-a881-ead4f0e10125",
  id: "63f94e29-e973-4e92-aa57-a15be3e06080",
}).then((res: ApprovePendingApprovalJobByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ApprovePendingApprovalJobByIdRequest](../../models/operations/approvependingapprovaljobbyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ApprovePendingApprovalJobByIdResponse](../../models/operations/approvependingapprovaljobbyidresponse.md)>**


## cancelWorkflow

Cancels a running workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CancelWorkflowResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.workflow.cancelWorkflow({
  id: "7e2b6e3a-b884-45f0-997a-60ff2a54a31e",
}).then((res: CancelWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CancelWorkflowRequest](../../models/operations/cancelworkflowrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CancelWorkflowResponse](../../models/operations/cancelworkflowresponse.md)>**


## getWorkflowById

Returns summary fields of a workflow by ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetWorkflowByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.workflow.getWorkflowById({
  id: "94764a3e-865e-4795-af92-51a5a9da660f",
}).then((res: GetWorkflowByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetWorkflowByIdRequest](../../models/operations/getworkflowbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetWorkflowByIdResponse](../../models/operations/getworkflowbyidresponse.md)>**


## listWorkflowJobs

Returns a sequence of jobs for a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListWorkflowJobsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.workflow.listWorkflowJobs({
  id: "f57bfaad-4f9e-4fc1-b451-2c1032648dc2",
}).then((res: ListWorkflowJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListWorkflowJobsRequest](../../models/operations/listworkflowjobsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListWorkflowJobsResponse](../../models/operations/listworkflowjobsresponse.md)>**


## rerunWorkflow

Reruns a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { RerunWorkflowResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.workflow.rerunWorkflow({
  requestBody: {
    enableSsh: false,
    fromFailed: false,
    jobs: [
      "f615199e-bfd0-4e9f-a6c6-32ca3aed0117",
    ],
    sparseTree: false,
  },
  id: "996312fd-e047-4717-b8ff-61d017476360",
}).then((res: RerunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RerunWorkflowRequest](../../models/operations/rerunworkflowrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RerunWorkflowResponse](../../models/operations/rerunworkflowresponse.md)>**

