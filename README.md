# CircleCI API Node SDK

The CircleCI API Node SDK is a NPM library for accessing the resources that make up the [CircleCI API V2](https://circleci.com/docs/api/v2/index.html).

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add circleci-v2-sdk
```

### PNPM

```bash
pnpm add circleci-v2-sdk
```

### Bun

```bash
bun add circleci-v2-sdk
```

### Yarn

```bash
yarn add circleci-v2-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [context](docs/sdks/context/README.md)

* [addEnvironmentVariableToContext](docs/sdks/context/README.md#addenvironmentvariabletocontext) - Add or update an environment variable
* [createContext](docs/sdks/context/README.md#createcontext) - Create a new context
* [createContextRestriction](docs/sdks/context/README.md#createcontextrestriction) - 🧪 Create context restriction
* [deleteContext](docs/sdks/context/README.md#deletecontext) - Delete a context
* [deleteContextRestriction](docs/sdks/context/README.md#deletecontextrestriction) - 🧪 Delete context restriction
* [deleteEnvironmentVariableFromContext](docs/sdks/context/README.md#deleteenvironmentvariablefromcontext) - Remove an environment variable
* [getContext](docs/sdks/context/README.md#getcontext) - Get a context
* [getContextRestrictions](docs/sdks/context/README.md#getcontextrestrictions) - 🧪 Get context restrictions
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

* [cancelJobByJobID](docs/sdks/job/README.md#canceljobbyjobid) - Cancel job by job ID
* [cancelJobByJobNumber](docs/sdks/job/README.md#canceljobbyjobnumber) - Cancel job by job number
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
* [getPipelineValuesById](docs/sdks/pipeline/README.md#getpipelinevaluesbyid) - Get pipeline values for a pipeline
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
* [createProject](docs/sdks/project/README.md#createproject) - 🧪 Create a project
* [deleteCheckoutKey](docs/sdks/project/README.md#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](docs/sdks/project/README.md#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](docs/sdks/project/README.md#getcheckoutkey) - Get a checkout key
* [getEnvVar](docs/sdks/project/README.md#getenvvar) - Get a masked environment variable
* [getProjectBySlug](docs/sdks/project/README.md#getprojectbyslug) - Get a project
* [getProjectSettings](docs/sdks/project/README.md#getprojectsettings) - 🧪 Get project settings
* [listCheckoutKeys](docs/sdks/project/README.md#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](docs/sdks/project/README.md#listenvvars) - List all environment variables
* [patchProjectSettings](docs/sdks/project/README.md#patchprojectsettings) - 🧪 Update project settings

### [schedule](docs/sdks/schedule/README.md)

* [createSchedule](docs/sdks/schedule/README.md#createschedule) - Create a schedule
* [deleteScheduleById](docs/sdks/schedule/README.md#deleteschedulebyid) - Delete a schedule
* [getScheduleById](docs/sdks/schedule/README.md#getschedulebyid) - Get a schedule
* [listSchedulesForProject](docs/sdks/schedule/README.md#listschedulesforproject) - Get all schedules
* [updateSchedule](docs/sdks/schedule/README.md#updateschedule) - Update a schedule

### [usage](docs/sdks/usage/README.md)

* [createUsageExport](docs/sdks/usage/README.md#createusageexport) - Create a usage export
* [getUsageExport](docs/sdks/usage/README.md#getusageexport) - Get a usage export

### [user](docs/sdks/user/README.md)

* [getCollaborations](docs/sdks/user/README.md#getcollaborations) - Collaborations
* [getCurrentUser](docs/sdks/user/README.md#getcurrentuser) - User Information
* [getUser](docs/sdks/user/README.md#getuser) - User Information

### [webhook](docs/sdks/webhook/README.md)

* [createWebhook](docs/sdks/webhook/README.md#createwebhook) - Create an outbound webhook
* [deleteWebhook](docs/sdks/webhook/README.md#deletewebhook) - Delete an outbound webhook
* [getWebhookById](docs/sdks/webhook/README.md#getwebhookbyid) - Get a webhook
* [getWebhooks](docs/sdks/webhook/README.md#getwebhooks) - List webhooks
* [updateWebhook](docs/sdks/webhook/README.md#updatewebhook) - Update an outbound webhook

### [workflow](docs/sdks/workflow/README.md)

* [approvePendingApprovalJobById](docs/sdks/workflow/README.md#approvependingapprovaljobbyid) - Approve a job
* [cancelWorkflow](docs/sdks/workflow/README.md#cancelworkflow) - Cancel a workflow
* [getWorkflowById](docs/sdks/workflow/README.md#getworkflowbyid) - Get a workflow
* [listWorkflowJobs](docs/sdks/workflow/README.md#listworkflowjobs) - Get a workflow's jobs
* [rerunWorkflow](docs/sdks/workflow/README.md#rerunworkflow) - Rerun a workflow

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `addEnvironmentVariableToContext` method may throw the following errors:

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

```typescript
import { Circleci } from "circleci-v2-sdk";
import { SDKValidationError } from "circleci-v2-sdk/sdk/models/errors";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await circleci.context.addEnvironmentVariableToContext({
      requestBody: {
        value: "some-secret-value",
      },
      contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
      envVarName: "POSTGRES_USER",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://circleci.com/api/v2` | None |

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  serverIdx: 0,
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  serverURL: "https://circleci.com/api/v2",
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Circleci } from "circleci-v2-sdk";
import { HTTPClient } from "circleci-v2-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Circleci({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `apiKeyHeader` | apiKey         | API key        |
| `apiKeyQuery`  | apiKey         | API key        |
| `basicAuth`    | http           | HTTP Basic     |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Circleci } from "circleci-v2-sdk";

const sdk = new Circleci({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`contextAddEnvironmentVariableToContext`](docs/sdks/context/README.md#addenvironmentvariabletocontext) - Add or update an environment variable
- [`contextCreateContext`](docs/sdks/context/README.md#createcontext) - Create a new context
- [`contextCreateContextRestriction`](docs/sdks/context/README.md#createcontextrestriction) - 🧪 Create context restriction
- [`contextDeleteContext`](docs/sdks/context/README.md#deletecontext) - Delete a context
- [`contextDeleteContextRestriction`](docs/sdks/context/README.md#deletecontextrestriction) - 🧪 Delete context restriction
- [`contextDeleteEnvironmentVariableFromContext`](docs/sdks/context/README.md#deleteenvironmentvariablefromcontext) - Remove an environment variable
- [`contextGetContext`](docs/sdks/context/README.md#getcontext) - Get a context
- [`contextGetContextRestrictions`](docs/sdks/context/README.md#getcontextrestrictions) - 🧪 Get context restrictions
- [`contextListContexts`](docs/sdks/context/README.md#listcontexts) - List contexts
- [`contextListEnvironmentVariablesFromContext`](docs/sdks/context/README.md#listenvironmentvariablesfromcontext) - List environment variables
- [`insightsGetAllInsightsBranches`](docs/sdks/insights/README.md#getallinsightsbranches) - Get all branches for a project
- [`insightsGetFlakyTests`](docs/sdks/insights/README.md#getflakytests) - Get flaky tests for a project
- [`insightsGetJobTimeseries`](docs/sdks/insights/README.md#getjobtimeseries) - Job timeseries data
- [`insightsGetOrgSummaryData`](docs/sdks/insights/README.md#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.
- [`insightsGetProjectWorkflowJobMetrics`](docs/sdks/insights/README.md#getprojectworkflowjobmetrics) - Get summary metrics for a project workflow's jobs.
- [`insightsGetProjectWorkflowMetrics`](docs/sdks/insights/README.md#getprojectworkflowmetrics) - Get summary metrics for a project's workflows
- [`insightsGetProjectWorkflowRuns`](docs/sdks/insights/README.md#getprojectworkflowruns) - Get recent runs of a workflow
- [`insightsGetProjectWorkflowsPageData`](docs/sdks/insights/README.md#getprojectworkflowspagedata) - Get summary metrics and trends for a project across it's workflows and branches
- [`insightsGetProjectWorkflowTestMetrics`](docs/sdks/insights/README.md#getprojectworkflowtestmetrics) - Get test metrics for a project's workflows
- [`insightsGetWorkflowSummary`](docs/sdks/insights/README.md#getworkflowsummary) - Get metrics and trends for workflows
- [`jobCancelJobByJobID`](docs/sdks/job/README.md#canceljobbyjobid) - Cancel job by job ID
- [`jobCancelJobByJobNumber`](docs/sdks/job/README.md#canceljobbyjobnumber) - Cancel job by job number
- [`jobGetJobArtifacts`](docs/sdks/job/README.md#getjobartifacts) - Get a job's artifacts
- [`jobGetJobDetails`](docs/sdks/job/README.md#getjobdetails) - Get job details
- [`jobGetTests`](docs/sdks/job/README.md#gettests) - Get test metadata
- [`oidcTokenManagementDeleteOrgClaims`](docs/sdks/oidctokenmanagement/README.md#deleteorgclaims) - Delete org-level claims
- [`oidcTokenManagementDeleteProjectClaims`](docs/sdks/oidctokenmanagement/README.md#deleteprojectclaims) - Delete project-level claims
- [`oidcTokenManagementGetOrgClaims`](docs/sdks/oidctokenmanagement/README.md#getorgclaims) - Get org-level claims
- [`oidcTokenManagementGetProjectClaims`](docs/sdks/oidctokenmanagement/README.md#getprojectclaims) - Get project-level claims
- [`oidcTokenManagementPatchOrgClaims`](docs/sdks/oidctokenmanagement/README.md#patchorgclaims) - Patch org-level claims
- [`oidcTokenManagementPatchProjectClaims`](docs/sdks/oidctokenmanagement/README.md#patchprojectclaims) - Patch project-level claims
- [`pipelineContinuePipeline`](docs/sdks/pipeline/README.md#continuepipeline) - Continue a pipeline
- [`pipelineGetPipelineById`](docs/sdks/pipeline/README.md#getpipelinebyid) - Get a pipeline by ID
- [`pipelineGetPipelineByNumber`](docs/sdks/pipeline/README.md#getpipelinebynumber) - Get a pipeline by pipeline number
- [`pipelineGetPipelineConfigById`](docs/sdks/pipeline/README.md#getpipelineconfigbyid) - Get a pipeline's configuration
- [`pipelineGetPipelineValuesById`](docs/sdks/pipeline/README.md#getpipelinevaluesbyid) - Get pipeline values for a pipeline
- [`pipelineListMyPipelines`](docs/sdks/pipeline/README.md#listmypipelines) - Get your pipelines
- [`pipelineListPipelines`](docs/sdks/pipeline/README.md#listpipelines) - Get a list of pipelines
- [`pipelineListPipelinesForProject`](docs/sdks/pipeline/README.md#listpipelinesforproject) - Get all pipelines
- [`pipelineListWorkflowsByPipelineId`](docs/sdks/pipeline/README.md#listworkflowsbypipelineid) - Get a pipeline's workflows
- [`pipelineTriggerPipeline`](docs/sdks/pipeline/README.md#triggerpipeline) - Trigger a new pipeline
- [`policyManagementCreatePolicyBundle`](docs/sdks/policymanagement/README.md#createpolicybundle) - Creates policy bundle for the context
- [`policyManagementGetDecisionLog`](docs/sdks/policymanagement/README.md#getdecisionlog) - Retrieves the owner's decision audit log by given decisionID
- [`policyManagementGetDecisionLogPolicyBundle`](docs/sdks/policymanagement/README.md#getdecisionlogpolicybundle) - Retrieves Policy Bundle for a given decision log ID
- [`policyManagementGetDecisionLogs`](docs/sdks/policymanagement/README.md#getdecisionlogs) - Retrieves the owner's decision audit logs.
- [`policyManagementGetDecisionSettings`](docs/sdks/policymanagement/README.md#getdecisionsettings) - Get the decision settings
- [`policyManagementGetPolicyBundle`](docs/sdks/policymanagement/README.md#getpolicybundle) - Retrieves Policy Bundle
- [`policyManagementGetPolicyDocument`](docs/sdks/policymanagement/README.md#getpolicydocument) - Retrieves a policy document
- [`policyManagementMakeDecision`](docs/sdks/policymanagement/README.md#makedecision) - Makes a decision
- [`policyManagementSetDecisionSettings`](docs/sdks/policymanagement/README.md#setdecisionsettings) - Set the decision settings
- [`projectCreateCheckoutKey`](docs/sdks/project/README.md#createcheckoutkey) - Create a new checkout key
- [`projectCreateEnvVar`](docs/sdks/project/README.md#createenvvar) - Create an environment variable
- [`projectCreateProject`](docs/sdks/project/README.md#createproject) - 🧪 Create a project
- [`projectDeleteCheckoutKey`](docs/sdks/project/README.md#deletecheckoutkey) - Delete a checkout key
- [`projectDeleteEnvVar`](docs/sdks/project/README.md#deleteenvvar) - Delete an environment variable
- [`projectGetCheckoutKey`](docs/sdks/project/README.md#getcheckoutkey) - Get a checkout key
- [`projectGetEnvVar`](docs/sdks/project/README.md#getenvvar) - Get a masked environment variable
- [`projectGetProjectBySlug`](docs/sdks/project/README.md#getprojectbyslug) - Get a project
- [`projectGetProjectSettings`](docs/sdks/project/README.md#getprojectsettings) - 🧪 Get project settings
- [`projectListCheckoutKeys`](docs/sdks/project/README.md#listcheckoutkeys) - Get all checkout keys
- [`projectListEnvVars`](docs/sdks/project/README.md#listenvvars) - List all environment variables
- [`projectPatchProjectSettings`](docs/sdks/project/README.md#patchprojectsettings) - 🧪 Update project settings
- [`scheduleCreateSchedule`](docs/sdks/schedule/README.md#createschedule) - Create a schedule
- [`scheduleDeleteScheduleById`](docs/sdks/schedule/README.md#deleteschedulebyid) - Delete a schedule
- [`scheduleGetScheduleById`](docs/sdks/schedule/README.md#getschedulebyid) - Get a schedule
- [`scheduleListSchedulesForProject`](docs/sdks/schedule/README.md#listschedulesforproject) - Get all schedules
- [`scheduleUpdateSchedule`](docs/sdks/schedule/README.md#updateschedule) - Update a schedule
- [`usageCreateUsageExport`](docs/sdks/usage/README.md#createusageexport) - Create a usage export
- [`usageGetUsageExport`](docs/sdks/usage/README.md#getusageexport) - Get a usage export
- [`userGetCollaborations`](docs/sdks/user/README.md#getcollaborations) - Collaborations
- [`userGetCurrentUser`](docs/sdks/user/README.md#getcurrentuser) - User Information
- [`userGetUser`](docs/sdks/user/README.md#getuser) - User Information
- [`webhookCreateWebhook`](docs/sdks/webhook/README.md#createwebhook) - Create an outbound webhook
- [`webhookDeleteWebhook`](docs/sdks/webhook/README.md#deletewebhook) - Delete an outbound webhook
- [`webhookGetWebhookById`](docs/sdks/webhook/README.md#getwebhookbyid) - Get a webhook
- [`webhookGetWebhooks`](docs/sdks/webhook/README.md#getwebhooks) - List webhooks
- [`webhookUpdateWebhook`](docs/sdks/webhook/README.md#updatewebhook) - Update an outbound webhook
- [`workflowApprovePendingApprovalJobById`](docs/sdks/workflow/README.md#approvependingapprovaljobbyid) - Approve a job
- [`workflowCancelWorkflow`](docs/sdks/workflow/README.md#cancelworkflow) - Cancel a workflow
- [`workflowGetWorkflowById`](docs/sdks/workflow/README.md#getworkflowbyid) - Get a workflow
- [`workflowListWorkflowJobs`](docs/sdks/workflow/README.md#listworkflowjobs) - Get a workflow's jobs
- [`workflowRerunWorkflow`](docs/sdks/workflow/README.md#rerunworkflow) - Rerun a workflow

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Summary [summary] -->
## Summary

CircleCI API: This describes the resources that make up the CircleCI API v2.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
