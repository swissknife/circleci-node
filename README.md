# CircleCI API Node SDK

The CircleCI API Node SDK is a NPM library for accessing the resources that make up the [CircleCI API V2](https://circleci.com/docs/api/v2/index.html).

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { AddEnvironmentVariableToContextRequest, AddEnvironmentVariableToContextResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AddEnvironmentVariableToContextRequest = {
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  envVarName: "deserunt",
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [context](docs/context/README.md)

* [addEnvironmentVariableToContext](docs/context/README.md#addenvironmentvariabletocontext) - Add or update an environment variable
* [createContext](docs/context/README.md#createcontext) - Create a new context
* [deleteContext](docs/context/README.md#deletecontext) - Delete a context
* [deleteEnvironmentVariableFromContext](docs/context/README.md#deleteenvironmentvariablefromcontext) - Remove an environment variable
* [getContext](docs/context/README.md#getcontext) - Get a context
* [listContexts](docs/context/README.md#listcontexts) - List contexts
* [listEnvironmentVariablesFromContext](docs/context/README.md#listenvironmentvariablesfromcontext) - List environment variables

### [insights](docs/insights/README.md)

* [getAllInsightsBranches](docs/insights/README.md#getallinsightsbranches) - Get all branches for a project
* [getFlakyTests](docs/insights/README.md#getflakytests) - Get flaky tests for a project
* [getJobTimeseries](docs/insights/README.md#getjobtimeseries) - Job timeseries data
* [getOrgSummaryData](docs/insights/README.md#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.
* [getProjectWorkflowJobMetrics](docs/insights/README.md#getprojectworkflowjobmetrics) - Get summary metrics for a project workflow's jobs.
* [getProjectWorkflowMetrics](docs/insights/README.md#getprojectworkflowmetrics) - Get summary metrics for a project's workflows
* [getProjectWorkflowRuns](docs/insights/README.md#getprojectworkflowruns) - Get recent runs of a workflow
* [getProjectWorkflowTestMetrics](docs/insights/README.md#getprojectworkflowtestmetrics) - Get test metrics for a project's workflows
* [getProjectWorkflowsPageData](docs/insights/README.md#getprojectworkflowspagedata) - Get summary metrics and trends for a project across it's workflows and branches
* [getWorkflowSummary](docs/insights/README.md#getworkflowsummary) - Get metrics and trends for workflows

### [job](docs/job/README.md)

* [cancelJob](docs/job/README.md#canceljob) - Cancel job
* [getJobArtifacts](docs/job/README.md#getjobartifacts) - Get a job's artifacts
* [getJobDetails](docs/job/README.md#getjobdetails) - Get job details
* [getTests](docs/job/README.md#gettests) - Get test metadata

### [pipeline](docs/pipeline/README.md)

* [continuePipeline](docs/pipeline/README.md#continuepipeline) - Continue a pipeline
* [getPipelineById](docs/pipeline/README.md#getpipelinebyid) - Get a pipeline by ID
* [getPipelineByNumber](docs/pipeline/README.md#getpipelinebynumber) - Get a pipeline by pipeline number
* [getPipelineConfigById](docs/pipeline/README.md#getpipelineconfigbyid) - Get a pipeline's configuration
* [listMyPipelines](docs/pipeline/README.md#listmypipelines) - Get your pipelines
* [listPipelines](docs/pipeline/README.md#listpipelines) - Get a list of pipelines
* [listPipelinesForProject](docs/pipeline/README.md#listpipelinesforproject) - Get all pipelines
* [listWorkflowsByPipelineId](docs/pipeline/README.md#listworkflowsbypipelineid) - Get a pipeline's workflows
* [triggerPipeline](docs/pipeline/README.md#triggerpipeline) - Trigger a new pipeline

### [project](docs/project/README.md)

* [createCheckoutKey](docs/project/README.md#createcheckoutkey) - Create a new checkout key
* [createEnvVar](docs/project/README.md#createenvvar) - Create an environment variable
* [deleteCheckoutKey](docs/project/README.md#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](docs/project/README.md#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](docs/project/README.md#getcheckoutkey) - Get a checkout key
* [getEnvVar](docs/project/README.md#getenvvar) - Get a masked environment variable
* [getProjectBySlug](docs/project/README.md#getprojectbyslug) - Get a project
* [listCheckoutKeys](docs/project/README.md#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](docs/project/README.md#listenvvars) - List all environment variables

### [schedule](docs/schedule/README.md)

* [createSchedule](docs/schedule/README.md#createschedule) - Create a schedule
* [deleteScheduleById](docs/schedule/README.md#deleteschedulebyid) - Delete a schedule
* [getScheduleById](docs/schedule/README.md#getschedulebyid) - Get a schedule
* [listSchedulesForProject](docs/schedule/README.md#listschedulesforproject) - Get all schedules
* [updateSchedule](docs/schedule/README.md#updateschedule) - Update a schedule

### [user](docs/user/README.md)

* [getCollaborations](docs/user/README.md#getcollaborations) - Collaborations
* [getCurrentUser](docs/user/README.md#getcurrentuser) - User Information
* [getUser](docs/user/README.md#getuser) - User Information

### [webhook](docs/webhook/README.md)

* [createWebhook](docs/webhook/README.md#createwebhook) - Create a webhook
* [deleteWebhook](docs/webhook/README.md#deletewebhook) - Delete a webhook
* [getWebhookById](docs/webhook/README.md#getwebhookbyid) - Get a webhook
* [getWebhooks](docs/webhook/README.md#getwebhooks) - List webhooks
* [updateWebhook](docs/webhook/README.md#updatewebhook) - Update a webhook

### [workflow](docs/workflow/README.md)

* [approvePendingApprovalJobById](docs/workflow/README.md#approvependingapprovaljobbyid) - Approve a job
* [cancelWorkflow](docs/workflow/README.md#cancelworkflow) - Cancel a workflow
* [getWorkflowById](docs/workflow/README.md#getworkflowbyid) - Get a workflow
* [listWorkflowJobs](docs/workflow/README.md#listworkflowjobs) - Get a workflow's jobs
* [rerunWorkflow](docs/workflow/README.md#rerunworkflow) - Rerun a workflow
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
