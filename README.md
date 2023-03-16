# CircleCI API Node SDK

The CircleCI API Node SDK is a NPM library for accessing the resources that make up the [CircleCI API V2](https://circleci.com/docs/api/v2/index.html).

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add circleci-v2-sdk
```

### Yarn

```bash
yarn add circleci-v2-sdk
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
```typescript
import {
  AddEnvironmentVariableToContextRequest,
  AddEnvironmentVariableToContextResponse
} from "circleci-v2-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "circleci-v2-sdk";
const sdk = new SDK({
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
});

const req: AddEnvironmentVariableToContextRequest = {
  pathParams: {
    contextId: "unde",
    envVarName: "deserunt",
  },
  request: {
    value: "porro",
  },
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### context

* `addEnvironmentVariableToContext` - Add or update an environment variable
* `createContext` - Create a new context
* `deleteContext` - Delete a context
* `deleteEnvironmentVariableFromContext` - Remove an environment variable
* `getContext` - Get a context
* `listContexts` - List contexts
* `listEnvironmentVariablesFromContext` - List environment variables

### insights

* `getAllInsightsBranches` - Get all branches for a project
* `getFlakyTests` - Get flaky tests for a project
* `getJobTimeseries` - Job timeseries data
* `getOrgSummaryData` - Get summary metrics with trends for the entire org, and for each project.
* `getProjectWorkflowJobMetrics` - Get summary metrics for a project workflow's jobs.
* `getProjectWorkflowMetrics` - Get summary metrics for a project's workflows
* `getProjectWorkflowRuns` - Get recent runs of a workflow
* `getProjectWorkflowTestMetrics` - Get test metrics for a project's workflows
* `getProjectWorkflowsPageData` - Get summary metrics and trends for a project across it's workflows and branches
* `getWorkflowSummary` - Get metrics and trends for workflows

### job

* `cancelJob` - Cancel job
* `getJobArtifacts` - Get a job's artifacts
* `getJobDetails` - Get job details
* `getTests` - Get test metadata

### pipeline

* `continuePipeline` - Continue a pipeline
* `getPipelineById` - Get a pipeline by ID
* `getPipelineByNumber` - Get a pipeline by pipeline number
* `getPipelineConfigById` - Get a pipeline's configuration
* `listMyPipelines` - Get your pipelines
* `listPipelines` - Get a list of pipelines
* `listPipelinesForProject` - Get all pipelines
* `listWorkflowsByPipelineId` - Get a pipeline's workflows
* `triggerPipeline` - Trigger a new pipeline

### project

* `createCheckoutKey` - Create a new checkout key
* `createEnvVar` - Create an environment variable
* `deleteCheckoutKey` - Delete a checkout key
* `deleteEnvVar` - Delete an environment variable
* `getCheckoutKey` - Get a checkout key
* `getEnvVar` - Get a masked environment variable
* `getProjectBySlug` - Get a project
* `listCheckoutKeys` - Get all checkout keys
* `listEnvVars` - List all environment variables

### schedule

* `createSchedule` - Create a schedule
* `deleteScheduleById` - Delete a schedule
* `getScheduleById` - Get a schedule
* `listSchedulesForProject` - Get all schedules
* `updateSchedule` - Update a schedule

### user

* `getCollaborations` - Collaborations
* `getCurrentUser` - User Information
* `getUser` - User Information

### webhook

* `createWebhook` - Create a webhook
* `deleteWebhook` - Delete a webhook
* `getWebhookById` - Get a webhook
* `getWebhooks` - List webhooks
* `updateWebhook` - Update a webhook

### workflow

* `approvePendingApprovalJobById` - Approve a job
* `cancelWorkflow` - Cancel a workflow
* `getWorkflowById` - Get a workflow
* `listWorkflowJobs` - Get a workflow's jobs
* `rerunWorkflow` - Rerun a workflow
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
