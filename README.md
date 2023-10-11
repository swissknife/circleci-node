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
import { Circleci } from "circleci-v2-sdk";

(async () => {
    const sdk = new Circleci({
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.context.addEnvironmentVariableToContext({
        requestBody: {
            value: "some-secret-value",
        },
        contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
        envVarName: "Pants reproachfully",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [context](docs/sdks/context/README.md)

* [addEnvironmentVariableToContext](docs/sdks/context/README.md#addenvironmentvariabletocontext) - Add or update an environment variable
* [createContext](docs/sdks/context/README.md#createcontext) - Create a new context
* [deleteContext](docs/sdks/context/README.md#deletecontext) - Delete a context
* [deleteEnvironmentVariableFromContext](docs/sdks/context/README.md#deleteenvironmentvariablefromcontext) - Remove an environment variable
* [getContext](docs/sdks/context/README.md#getcontext) - Get a context
* [listContexts](docs/sdks/context/README.md#listcontexts) - List contexts
* [listEnvironmentVariablesFromContext](docs/sdks/context/README.md#listenvironmentvariablesfromcontext) - List environment variables

### [insights](docs/sdks/insights/README.md)

* [getAllInsightsBranches](docs/sdks/insights/README.md#getallinsightsbranches) - Get all branches for a project
* [getFlakyTests](docs/sdks/insights/README.md#getflakytests) - Get flaky tests for a project
* [getJobTimeseries](docs/sdks/insights/README.md#getjobtimeseries) - Job timeseries data
* [getOrgSummaryData](docs/sdks/insights/README.md#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.
* [getProjectWorkflowJobMetrics](docs/sdks/insights/README.md#getprojectworkflowjobmetrics) - Get summary metrics for a project workflow's jobs.
* [getProjectWorkflowMetrics](docs/sdks/insights/README.md#getprojectworkflowmetrics) - Get summary metrics for a project's workflows
* [getProjectWorkflowRuns](docs/sdks/insights/README.md#getprojectworkflowruns) - Get recent runs of a workflow
* [getProjectWorkflowTestMetrics](docs/sdks/insights/README.md#getprojectworkflowtestmetrics) - Get test metrics for a project's workflows
* [getProjectWorkflowsPageData](docs/sdks/insights/README.md#getprojectworkflowspagedata) - Get summary metrics and trends for a project across it's workflows and branches
* [getWorkflowSummary](docs/sdks/insights/README.md#getworkflowsummary) - Get metrics and trends for workflows

### [job](docs/sdks/job/README.md)

* [cancelJob](docs/sdks/job/README.md#canceljob) - Cancel job
* [getJobArtifacts](docs/sdks/job/README.md#getjobartifacts) - Get a job's artifacts
* [getJobDetails](docs/sdks/job/README.md#getjobdetails) - Get job details
* [getTests](docs/sdks/job/README.md#gettests) - Get test metadata

### [oidcTokenManagement](docs/sdks/oidctokenmanagement/README.md)

* [deleteOrgClaims](docs/sdks/oidctokenmanagement/README.md#deleteorgclaims) - Delete org-level claims
* [deleteProjectClaims](docs/sdks/oidctokenmanagement/README.md#deleteprojectclaims) - Delete project-level claims
* [getOrgClaims](docs/sdks/oidctokenmanagement/README.md#getorgclaims) - Get org-level claims
* [getProjectClaims](docs/sdks/oidctokenmanagement/README.md#getprojectclaims) - Get project-level claims
* [patchOrgClaims](docs/sdks/oidctokenmanagement/README.md#patchorgclaims) - Patch org-level claims
* [patchProjectClaims](docs/sdks/oidctokenmanagement/README.md#patchprojectclaims) - Patch project-level claims

### [pipeline](docs/sdks/pipeline/README.md)

* [continuePipeline](docs/sdks/pipeline/README.md#continuepipeline) - Continue a pipeline
* [getPipelineById](docs/sdks/pipeline/README.md#getpipelinebyid) - Get a pipeline by ID
* [getPipelineByNumber](docs/sdks/pipeline/README.md#getpipelinebynumber) - Get a pipeline by pipeline number
* [getPipelineConfigById](docs/sdks/pipeline/README.md#getpipelineconfigbyid) - Get a pipeline's configuration
* [listMyPipelines](docs/sdks/pipeline/README.md#listmypipelines) - Get your pipelines
* [listPipelines](docs/sdks/pipeline/README.md#listpipelines) - Get a list of pipelines
* [listPipelinesForProject](docs/sdks/pipeline/README.md#listpipelinesforproject) - Get all pipelines
* [listWorkflowsByPipelineId](docs/sdks/pipeline/README.md#listworkflowsbypipelineid) - Get a pipeline's workflows
* [triggerPipeline](docs/sdks/pipeline/README.md#triggerpipeline) - Trigger a new pipeline

### [policyManagement](docs/sdks/policymanagement/README.md)

* [createPolicyBundle](docs/sdks/policymanagement/README.md#createpolicybundle) - Creates policy bundle for the context
* [getDecisionLog](docs/sdks/policymanagement/README.md#getdecisionlog) - Retrieves the owner's decision audit log by given decisionID
* [getDecisionLogPolicyBundle](docs/sdks/policymanagement/README.md#getdecisionlogpolicybundle) - Retrieves Policy Bundle for a given decision log ID
* [getDecisionLogs](docs/sdks/policymanagement/README.md#getdecisionlogs) - Retrieves the owner's decision audit logs.
* [getDecisionSettings](docs/sdks/policymanagement/README.md#getdecisionsettings) - Get the decision settings
* [getPolicyBundle](docs/sdks/policymanagement/README.md#getpolicybundle) - Retrieves Policy Bundle
* [getPolicyDocument](docs/sdks/policymanagement/README.md#getpolicydocument) - Retrieves a policy document
* [makeDecision](docs/sdks/policymanagement/README.md#makedecision) - Makes a decision
* [setDecisionSettings](docs/sdks/policymanagement/README.md#setdecisionsettings) - Set the decision settings

### [project](docs/sdks/project/README.md)

* [createCheckoutKey](docs/sdks/project/README.md#createcheckoutkey) - Create a new checkout key
* [createEnvVar](docs/sdks/project/README.md#createenvvar) - Create an environment variable
* [deleteCheckoutKey](docs/sdks/project/README.md#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](docs/sdks/project/README.md#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](docs/sdks/project/README.md#getcheckoutkey) - Get a checkout key
* [getEnvVar](docs/sdks/project/README.md#getenvvar) - Get a masked environment variable
* [getProjectBySlug](docs/sdks/project/README.md#getprojectbyslug) - Get a project
* [listCheckoutKeys](docs/sdks/project/README.md#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](docs/sdks/project/README.md#listenvvars) - List all environment variables

### [schedule](docs/sdks/schedule/README.md)

* [createSchedule](docs/sdks/schedule/README.md#createschedule) - Create a schedule
* [deleteScheduleById](docs/sdks/schedule/README.md#deleteschedulebyid) - Delete a schedule
* [getScheduleById](docs/sdks/schedule/README.md#getschedulebyid) - Get a schedule
* [listSchedulesForProject](docs/sdks/schedule/README.md#listschedulesforproject) - Get all schedules
* [updateSchedule](docs/sdks/schedule/README.md#updateschedule) - Update a schedule

### [user](docs/sdks/user/README.md)

* [getCollaborations](docs/sdks/user/README.md#getcollaborations) - Collaborations
* [getCurrentUser](docs/sdks/user/README.md#getcurrentuser) - User Information
* [getUser](docs/sdks/user/README.md#getuser) - User Information

### [webhook](docs/sdks/webhook/README.md)

* [createWebhook](docs/sdks/webhook/README.md#createwebhook) - Create a webhook
* [deleteWebhook](docs/sdks/webhook/README.md#deletewebhook) - Delete a webhook
* [getWebhookById](docs/sdks/webhook/README.md#getwebhookbyid) - Get a webhook
* [getWebhooks](docs/sdks/webhook/README.md#getwebhooks) - List webhooks
* [updateWebhook](docs/sdks/webhook/README.md#updatewebhook) - Update a webhook

### [workflow](docs/sdks/workflow/README.md)

* [approvePendingApprovalJobById](docs/sdks/workflow/README.md#approvependingapprovaljobbyid) - Approve a job
* [cancelWorkflow](docs/sdks/workflow/README.md#cancelworkflow) - Cancel a workflow
* [getWorkflowById](docs/sdks/workflow/README.md#getworkflowbyid) - Get a workflow
* [listWorkflowJobs](docs/sdks/workflow/README.md#listworkflowjobs) - Get a workflow's jobs
* [rerunWorkflow](docs/sdks/workflow/README.md#rerunworkflow) - Rerun a workflow
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
