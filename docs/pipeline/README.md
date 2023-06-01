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
  configuration: "sapiente",
  continuationKey: "quisquam",
  parameters: {
    "ea": "impedit",
    "corporis": "veniam",
    "aliquid": "inventore",
    "magnam": "ea",
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
  GetPipelineByIdPipelineErrorsType,
  GetPipelineByIdPipelineState,
  GetPipelineByIdPipelineTriggerType,
  GetPipelineByIdResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.getPipelineById({
  pipelineId: "c3e250fb-008c-442e-941a-ac366c8dd6b1",
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
  GetPipelineByNumberPipelineErrorsType,
  GetPipelineByNumberPipelineState,
  GetPipelineByNumberPipelineTriggerType,
  GetPipelineByNumberResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.getPipelineByNumber({
  pipelineNumber: "tempora",
  projectSlug: "numquam",
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
  pipelineId: "29074747-78a7-4bd4-a6d2-8c10ab3cdca4",
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
  ListMyPipelinesPipelineListResponsePipelineErrorsType,
  ListMyPipelinesPipelineListResponsePipelineState,
  ListMyPipelinesPipelineListResponsePipelineTriggerType,
  ListMyPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listMyPipelines({
  pageToken: "eos",
  projectSlug: "voluptas",
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
  ListPipelinesPipelineListResponsePipelineErrorsType,
  ListPipelinesPipelineListResponsePipelineState,
  ListPipelinesPipelineListResponsePipelineTriggerType,
  ListPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listPipelines({
  mine: false,
  orgSlug: "ab",
  pageToken: "cupiditate",
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
  ListPipelinesForProjectPipelineListResponsePipelineErrorsType,
  ListPipelinesForProjectPipelineListResponsePipelineState,
  ListPipelinesForProjectPipelineListResponsePipelineTriggerType,
  ListPipelinesForProjectResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listPipelinesForProject({
  branch: "consequatur",
  pageToken: "tempora",
  projectSlug: "debitis",
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
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatus,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTag,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.listWorkflowsByPipelineId({
  pageToken: "ipsam",
  pipelineId: "23c7e0bc-7178-4e47-96f2-a70c688282aa",
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
import { TriggerPipelinePipelineCreationState, TriggerPipelineResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.pipeline.triggerPipeline({
  requestBody: {
    branch: "feature/design-new-api",
    parameters: {
      "atque": "explicabo",
      "minima": "nisi",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "fugit",
}).then((res: TriggerPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
