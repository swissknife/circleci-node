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
    apiKeyHeader: "",
  },
});

sdk.workflow.approvePendingApprovalJobById({
  approvalRequestId: "51862065-e904-4f3b-9194-b8abf603a79f",
  id: "9dfe0ab7-da8a-450c-a187-f86bc173d689",
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
  id: "eee9526f-8d98-46e8-81ea-d4f0e1012563",
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
  id: "f94e29e9-73e9-422a-97a1-5be3e060807e",
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
  id: "2b6e3ab8-845f-4059-ba60-ff2a54a31e94",
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
      "764a3e86-5e79-456f-9251-a5a9da660ff5",
    ],
    sparseTree: false,
  },
  id: "7bfaad4f-9efc-41b4-912c-1032648dc2f6",
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

