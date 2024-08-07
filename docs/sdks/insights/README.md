# Insights
(*insights*)

### Available Operations

* [getAllInsightsBranches](#getallinsightsbranches) - Get all branches for a project
* [getFlakyTests](#getflakytests) - Get flaky tests for a project
* [getJobTimeseries](#getjobtimeseries) - Job timeseries data
* [getOrgSummaryData](#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.
* [getProjectWorkflowJobMetrics](#getprojectworkflowjobmetrics) - Get summary metrics for a project workflow's jobs.
* [getProjectWorkflowMetrics](#getprojectworkflowmetrics) - Get summary metrics for a project's workflows
* [getProjectWorkflowRuns](#getprojectworkflowruns) - Get recent runs of a workflow
* [getProjectWorkflowTestMetrics](#getprojectworkflowtestmetrics) - Get test metrics for a project's workflows
* [getProjectWorkflowsPageData](#getprojectworkflowspagedata) - Get summary metrics and trends for a project across it's workflows and branches
* [getWorkflowSummary](#getworkflowsummary) - Get metrics and trends for workflows

## getAllInsightsBranches

Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getAllInsightsBranches({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetAllInsightsBranchesRequest](../../sdk/models/operations/getallinsightsbranchesrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetAllInsightsBranchesResponse](../../sdk/models/operations/getallinsightsbranchesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFlakyTests

Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
             A flaky test is a test that passed and failed in the same commit.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getFlakyTests({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetFlakyTestsRequest](../../sdk/models/operations/getflakytestsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetFlakyTestsResponse](../../sdk/models/operations/getflakytestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getJobTimeseries

Get timeseries data for all jobs within a workflow. Hourly granularity data is only retained for 48 hours while daily granularity data is retained for 90 days.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { Granularity } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getJobTimeseries({
    endDate: new Date("2020-09-04T13:26:29Z"),
    granularity: Granularity.Hourly,
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    startDate: new Date("2020-08-21T13:26:29Z"),
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetJobTimeseriesRequest](../../sdk/models/operations/getjobtimeseriesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetJobTimeseriesResponse](../../sdk/models/operations/getjobtimeseriesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOrgSummaryData

Gets aggregated summary metrics with trends for the entire org.
              Also gets aggregated metrics and trends for each project belonging to the org.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ReportingWindow } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getOrgSummaryData({
    orgSlug: "gh/CircleCI-Public",
    projectNames: {},
    reportingWindow: ReportingWindow.Last90Days,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetOrgSummaryDataRequest](../../sdk/models/operations/getorgsummarydatarequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetOrgSummaryDataResponse](../../sdk/models/operations/getorgsummarydataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectWorkflowJobMetrics

Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { QueryParamReportingWindow } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getProjectWorkflowJobMetrics({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    reportingWindow: QueryParamReportingWindow.Last90Days,
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetProjectWorkflowJobMetricsRequest](../../sdk/models/operations/getprojectworkflowjobmetricsrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetProjectWorkflowJobMetricsResponse](../../sdk/models/operations/getprojectworkflowjobmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectWorkflowMetrics

Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectWorkflowMetricsQueryParamReportingWindow } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getProjectWorkflowMetrics({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    reportingWindow: GetProjectWorkflowMetricsQueryParamReportingWindow.Last90Days,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetProjectWorkflowMetricsRequest](../../sdk/models/operations/getprojectworkflowmetricsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetProjectWorkflowMetricsResponse](../../sdk/models/operations/getprojectworkflowmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectWorkflowRuns

Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getProjectWorkflowRuns({
    endDate: new Date("2020-09-04T13:26:29Z"),
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    startDate: new Date("2020-08-21T13:26:29Z"),
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetProjectWorkflowRunsRequest](../../sdk/models/operations/getprojectworkflowrunsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetProjectWorkflowRunsResponse](../../sdk/models/operations/getprojectworkflowrunsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectWorkflowTestMetrics

Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getProjectWorkflowTestMetrics({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetProjectWorkflowTestMetricsRequest](../../sdk/models/operations/getprojectworkflowtestmetricsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetProjectWorkflowTestMetricsResponse](../../sdk/models/operations/getprojectworkflowtestmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getProjectWorkflowsPageData

Get summary metrics and trends for a project at workflow and branch level.
             Workflow runs going back at most 90 days are included in the aggregation window.
             Trends are only supported upto last 30 days.
             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectWorkflowsPageDataQueryParamReportingWindow } from "circleci-v2-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getProjectWorkflowsPageData({
    branches: {},
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    reportingWindow: GetProjectWorkflowsPageDataQueryParamReportingWindow.Last90Days,
    workflowNames: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetProjectWorkflowsPageDataRequest](../../sdk/models/operations/getprojectworkflowspagedatarequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetProjectWorkflowsPageDataResponse](../../sdk/models/operations/getprojectworkflowspagedataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getWorkflowSummary

Get the metrics and trends for a particular workflow on a single branch or all branches

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.insights.getWorkflowSummary({
    projectSlug: "gh/CircleCI-Public/api-preview-docs",
    workflowName: "build-and-test",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetWorkflowSummaryRequest](../../sdk/models/operations/getworkflowsummaryrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetWorkflowSummaryResponse](../../sdk/models/operations/getworkflowsummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
