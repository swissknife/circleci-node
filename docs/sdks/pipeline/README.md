# Pipeline

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
  configuration: "illum",
  continuationKey: "sequi",
  parameters: {
    "natus": "impedit",
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
  pipelineId: "0f5d2cff-7c70-4a45-a26d-436813f16d9f",
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
  pipelineNumber: "nostrum",
  projectSlug: "sapiente",
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
  pipelineId: "ce6c5561-46c3-4e25-8fb0-08c42e141aac",
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
  pageToken: "velit",
  projectSlug: "eum",
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
  orgSlug: "autem",
  pageToken: "nobis",
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
  branch: "quas",
  pageToken: "assumenda",
  projectSlug: "nulla",
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
  pageToken: "voluptas",
  pipelineId: "b1442907-4747-478a-bbd4-66d28c10ab3c",
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
      "illum": "quo",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "fuga",
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

