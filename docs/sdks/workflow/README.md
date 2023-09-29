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
  approvalRequestId: "afd4e8a2-73f4-4706-8fed-d209a62dd146",
  id: "e96a2274-8cfb-42ea-a2f3-af572e6d17e2",
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
  id: "bd1cc4a6-2f45-4453-98c5-6f84c2afb654",
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
  id: "9471ae6d-5ba0-4e9c-bb5d-c99815c6257a",
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
  id: "d4ad492c-ef34-47c2-a4b5-e4d0fd15ab40",
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
      "0038409e-102a-4ccf-8dd8-307fb89c2413",
    ],
    sparseTree: false,
  },
  id: "3655b08f-16ad-40ff-95a5-30abd7443f6e",
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

