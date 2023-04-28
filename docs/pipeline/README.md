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
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.continuePipeline({
  configuration: "praesentium",
  continuationKey: "natus",
  parameters: {
    "sunt": "quo",
  },
}).then((res: ContinuePipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineById

Returns a pipeline by the pipeline ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetPipelineByIdPipelineErrorsTypeEnum,
  GetPipelineByIdPipelineStateEnum,
  GetPipelineByIdPipelineTriggerTypeEnum,
  GetPipelineByIdResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.getPipelineById({
  pipelineId: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
}).then((res: GetPipelineByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineByNumber

Returns a pipeline by the pipeline number.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetPipelineByNumberPipelineErrorsTypeEnum,
  GetPipelineByNumberPipelineStateEnum,
  GetPipelineByNumberPipelineTriggerTypeEnum,
  GetPipelineByNumberResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.getPipelineByNumber({
  pipelineNumber: "dignissimos",
  projectSlug: "eaque",
}).then((res: GetPipelineByNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineConfigById

Returns a pipeline's configuration by ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetPipelineConfigByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.getPipelineConfigById({
  pipelineId: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
}).then((res: GetPipelineConfigByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listMyPipelines

Returns a sequence of all pipelines for this project triggered by the user.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum,
  ListMyPipelinesPipelineListResponsePipelineStateEnum,
  ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum,
  ListMyPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listMyPipelines({
  pageToken: "provident",
  projectSlug: "nobis",
}).then((res: ListMyPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPipelines

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListPipelinesPipelineListResponsePipelineErrorsTypeEnum,
  ListPipelinesPipelineListResponsePipelineStateEnum,
  ListPipelinesPipelineListResponsePipelineTriggerTypeEnum,
  ListPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listPipelines({
  mine: false,
  orgSlug: "libero",
  pageToken: "delectus",
}).then((res: ListPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPipelinesForProject

Returns all pipelines for this project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListPipelinesForProjectPipelineListResponsePipelineErrorsTypeEnum,
  ListPipelinesForProjectPipelineListResponsePipelineStateEnum,
  ListPipelinesForProjectPipelineListResponsePipelineTriggerTypeEnum,
  ListPipelinesForProjectResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listPipelinesForProject({
  branch: "quaerat",
  pageToken: "quos",
  projectSlug: "aliquid",
}).then((res: ListPipelinesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listWorkflowsByPipelineId

Returns a paginated list of workflows by pipeline ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListWorkflowsByPipelineIdResponse,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listWorkflowsByPipelineId({
  pageToken: "dolorem",
  pipelineId: "3323f9b7-7f3a-4410-8674-ebf69280d1ba",
}).then((res: ListWorkflowsByPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## triggerPipeline

Triggers a new pipeline on the project.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { TriggerPipelinePipelineCreationStateEnum, TriggerPipelineResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.triggerPipeline({
  requestBody: {
    branch: "feature/design-new-api",
    parameters: {
      "voluptate": "dolorum",
      "deleniti": "omnis",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "necessitatibus",
}).then((res: TriggerPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
