# pipeline

### Available Operations

* [continuePipeline](#continuepipeline) - Continue a pipeline
* [getPipelineById](#getpipelinebyid) - Get a pipeline by ID
* [getPipelineByNumber](#getpipelinebynumber) - Get a pipeline by pipeline number
* [getPipelineConfigById](#getpipelineconfigbyid) - Get a pipeline's configuration
* [listMyPipelines](#listmypipelines) - Get your pipelines
* [listPipelines](#listpipelines) - Get a list of pipelines
* [listPipelinesForProject](#listpipelinesforproject) - Get all pipelines
* [listWorkflowsByPipelineId](#listworkflowsbypipelineid) - Get a pipeline's workflows
* [triggerPipeline](#triggerpipeline) - Trigger a new pipeline

## continuePipeline

Continue a pipeline from the setup phase.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ContinuePipelineResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.continuePipeline({
  configuration: "aut",
  continuationKey: "voluptatibus",
  parameters: {
    "nulla": "fugit",
    "porro": "maiores",
  },
}).then((res: ContinuePipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ContinuePipelineRequestBody](../../models/operations/continuepipelinerequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ContinuePipelineResponse](../../models/operations/continuepipelineresponse.md)>**


## getPipelineById

Returns a pipeline by the pipeline ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPipelineByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineById({
  pipelineId: "f7c70a45-626d-4436-813f-16d9f5fce6c5",
}).then((res: GetPipelineByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetPipelineByIdRequest](../../models/operations/getpipelinebyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetPipelineByIdResponse](../../models/operations/getpipelinebyidresponse.md)>**


## getPipelineByNumber

Returns a pipeline by the pipeline number.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPipelineByNumberResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineByNumber({
  pipelineNumber: "veniam",
  projectSlug: "aliquid",
}).then((res: GetPipelineByNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPipelineByNumberRequest](../../models/operations/getpipelinebynumberrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPipelineByNumberResponse](../../models/operations/getpipelinebynumberresponse.md)>**


## getPipelineConfigById

Returns a pipeline's configuration by ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPipelineConfigByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineConfigById({
  pipelineId: "146c3e25-0fb0-408c-82e1-41aac366c8dd",
}).then((res: GetPipelineConfigByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPipelineConfigByIdRequest](../../models/operations/getpipelineconfigbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPipelineConfigByIdResponse](../../models/operations/getpipelineconfigbyidresponse.md)>**


## listMyPipelines

Returns a sequence of all pipelines for this project triggered by the user.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListMyPipelinesResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listMyPipelines({
  pageToken: "voluptas",
  projectSlug: "libero",
}).then((res: ListMyPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListMyPipelinesRequest](../../models/operations/listmypipelinesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListMyPipelinesResponse](../../models/operations/listmypipelinesresponse.md)>**


## listPipelines

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListPipelinesResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listPipelines({
  mine: false,
  orgSlug: "quasi",
  pageToken: "tempora",
}).then((res: ListPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListPipelinesRequest](../../models/operations/listpipelinesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListPipelinesResponse](../../models/operations/listpipelinesresponse.md)>**


## listPipelinesForProject

Returns all pipelines for this project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListPipelinesForProjectResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listPipelinesForProject({
  branch: "numquam",
  pageToken: "explicabo",
  projectSlug: "provident",
}).then((res: ListPipelinesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListPipelinesForProjectRequest](../../models/operations/listpipelinesforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListPipelinesForProjectResponse](../../models/operations/listpipelinesforprojectresponse.md)>**


## listWorkflowsByPipelineId

Returns a paginated list of workflows by pipeline ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListWorkflowsByPipelineIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listWorkflowsByPipelineId({
  pageToken: "ipsa",
  pipelineId: "7474778a-7bd4-466d-a8c1-0ab3cdca4251",
}).then((res: ListWorkflowsByPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListWorkflowsByPipelineIdRequest](../../models/operations/listworkflowsbypipelineidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListWorkflowsByPipelineIdResponse](../../models/operations/listworkflowsbypipelineidresponse.md)>**


## triggerPipeline

Triggers a new pipeline on the project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { TriggerPipelineResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.triggerPipeline({
  requestBody: {
    branch: "feature/design-new-api",
    parameters: {
      "consequatur": "tempora",
      "debitis": "ipsam",
      "aspernatur": "sequi",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "quo",
}).then((res: TriggerPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TriggerPipelineRequest](../../models/operations/triggerpipelinerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TriggerPipelineResponse](../../models/operations/triggerpipelineresponse.md)>**

