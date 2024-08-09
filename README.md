# CircleCI API Node SDK

The CircleCI API Node SDK is a NPM library for accessing the resources that make up the [CircleCI API V2](https://circleci.com/docs/api/v2/index.html).

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

### [user](docs/sdks/user/README.md)

* [getCollaborations](docs/sdks/user/README.md#getcollaborations) - Collaborations
* [getCurrentUser](docs/sdks/user/README.md#getcurrentuser) - User Information
* [getUser](docs/sdks/user/README.md#getuser) - User Information

### [oidcTokenManagement](docs/sdks/oidctokenmanagement/README.md)

* [deleteOrgClaims](docs/sdks/oidctokenmanagement/README.md#deleteorgclaims) - Delete org-level claims
* [deleteProjectClaims](docs/sdks/oidctokenmanagement/README.md#deleteprojectclaims) - Delete project-level claims
* [getOrgClaims](docs/sdks/oidctokenmanagement/README.md#getorgclaims) - Get org-level claims
* [getProjectClaims](docs/sdks/oidctokenmanagement/README.md#getprojectclaims) - Get project-level claims
* [patchOrgClaims](docs/sdks/oidctokenmanagement/README.md#patchorgclaims) - Patch org-level claims
* [patchProjectClaims](docs/sdks/oidctokenmanagement/README.md#patchprojectclaims) - Patch project-level claims

### [usage](docs/sdks/usage/README.md)

* [createUsageExport](docs/sdks/usage/README.md#createusageexport) - Create a usage export
* [getUsageExport](docs/sdks/usage/README.md#getusageexport) - Get a usage export

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

### [job](docs/sdks/job/README.md)

* [cancelJobByJobNumber](docs/sdks/job/README.md#canceljobbyjobnumber) - Cancel job by job number
* [getJobArtifacts](docs/sdks/job/README.md#getjobartifacts) - Get a job's artifacts
* [getJobDetails](docs/sdks/job/README.md#getjobdetails) - Get job details
* [getTests](docs/sdks/job/README.md#gettests) - Get test metadata

### [schedule](docs/sdks/schedule/README.md)

* [createSchedule](docs/sdks/schedule/README.md#createschedule) - Create a schedule
* [deleteScheduleById](docs/sdks/schedule/README.md#deleteschedulebyid) - Delete a schedule
* [getScheduleById](docs/sdks/schedule/README.md#getschedulebyid) - Get a schedule
* [listSchedulesForProject](docs/sdks/schedule/README.md#listschedulesforproject) - Get all schedules
* [updateSchedule](docs/sdks/schedule/README.md#updateschedule) - Update a schedule

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
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


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
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
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

    // Handle the result
    console.log(result);
}

run();

```
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
    const result = await circleci.context.addEnvironmentVariableToContext(
        {
            requestBody: {
                value: "some-secret-value",
            },
            contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
            envVarName: "POSTGRES_USER",
        },
        {
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
        }
    );

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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
