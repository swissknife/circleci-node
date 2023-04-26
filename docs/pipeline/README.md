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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { ContinuePipelineRequestBody, ContinuePipelineResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ContinuePipelineRequestBody = {
  configuration: "praesentium",
  continuationKey: "natus",
  parameters: {
    "sunt": "quo",
  },
};

sdk.pipeline.continuePipeline(req).then((res: ContinuePipelineResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineById

Returns a pipeline by the pipeline ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  GetPipelineByIdPipelineErrorsTypeEnum,
  GetPipelineByIdPipelineStateEnum,
  GetPipelineByIdPipelineTriggerTypeEnum,
  GetPipelineByIdRequest,
  GetPipelineByIdResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPipelineByIdRequest = {
  pipelineId: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
};

sdk.pipeline.getPipelineById(req).then((res: GetPipelineByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineByNumber

Returns a pipeline by the pipeline number.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  GetPipelineByNumberPipelineErrorsTypeEnum,
  GetPipelineByNumberPipelineStateEnum,
  GetPipelineByNumberPipelineTriggerTypeEnum,
  GetPipelineByNumberRequest,
  GetPipelineByNumberResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPipelineByNumberRequest = {
  pipelineNumber: "dignissimos",
  projectSlug: "eaque",
};

sdk.pipeline.getPipelineByNumber(req).then((res: GetPipelineByNumberResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPipelineConfigById

Returns a pipeline's configuration by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetPipelineConfigByIdRequest, GetPipelineConfigByIdResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPipelineConfigByIdRequest = {
  pipelineId: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
};

sdk.pipeline.getPipelineConfigById(req).then((res: GetPipelineConfigByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listMyPipelines

Returns a sequence of all pipelines for this project triggered by the user.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListMyPipelinesPipelineListResponsePipelineErrorsTypeEnum,
  ListMyPipelinesPipelineListResponsePipelineStateEnum,
  ListMyPipelinesPipelineListResponsePipelineTriggerTypeEnum,
  ListMyPipelinesRequest,
  ListMyPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListMyPipelinesRequest = {
  pageToken: "provident",
  projectSlug: "nobis",
};

sdk.pipeline.listMyPipelines(req).then((res: ListMyPipelinesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPipelines

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListPipelinesPipelineListResponsePipelineErrorsTypeEnum,
  ListPipelinesPipelineListResponsePipelineStateEnum,
  ListPipelinesPipelineListResponsePipelineTriggerTypeEnum,
  ListPipelinesRequest,
  ListPipelinesResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPipelinesRequest = {
  mine: false,
  orgSlug: "libero",
  pageToken: "delectus",
};

sdk.pipeline.listPipelines(req).then((res: ListPipelinesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPipelinesForProject

Returns all pipelines for this project.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListPipelinesForProjectPipelineListResponsePipelineErrorsTypeEnum,
  ListPipelinesForProjectPipelineListResponsePipelineStateEnum,
  ListPipelinesForProjectPipelineListResponsePipelineTriggerTypeEnum,
  ListPipelinesForProjectRequest,
  ListPipelinesForProjectResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPipelinesForProjectRequest = {
  branch: "quaerat",
  pageToken: "quos",
  projectSlug: "aliquid",
};

sdk.pipeline.listPipelinesForProject(req).then((res: ListPipelinesForProjectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listWorkflowsByPipelineId

Returns a paginated list of workflows by pipeline ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListWorkflowsByPipelineIdRequest,
  ListWorkflowsByPipelineIdResponse,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListWorkflowsByPipelineIdRequest = {
  pageToken: "dolorem",
  pipelineId: "3323f9b7-7f3a-4410-8674-ebf69280d1ba",
};

sdk.pipeline.listWorkflowsByPipelineId(req).then((res: ListWorkflowsByPipelineIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## triggerPipeline

Triggers a new pipeline on the project.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  TriggerPipelinePipelineCreationStateEnum,
  TriggerPipelineRequest,
  TriggerPipelineResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: TriggerPipelineRequest = {
  requestBody: {
    branch: "feature/design-new-api",
    parameters: {
      "voluptate": "dolorum",
      "deleniti": "omnis",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "necessitatibus",
};

sdk.pipeline.triggerPipeline(req).then((res: TriggerPipelineResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
