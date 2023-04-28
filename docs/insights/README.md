# insights

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
import { GetAllInsightsBranchesResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getAllInsightsBranches({
  projectSlug: "accusamus",
  workflowName: "non",
}).then((res: GetAllInsightsBranchesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFlakyTests

Get a list of flaky tests for a given project. Flaky tests are branch agnostic. 
             A flaky test is a test that passed and failed in the same commit.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetFlakyTestsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getFlakyTests({
  projectSlug: "occaecati",
}).then((res: GetFlakyTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobTimeseries

Get timeseries data for all jobs within a workflow.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetJobTimeseriesGranularityEnum, GetJobTimeseriesResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getJobTimeseries({
  branch: "enim",
  endDate: new Date("2020-02-08T20:51:42.354Z"),
  granularity: GetJobTimeseriesGranularityEnum.Hourly,
  projectSlug: "provident",
  startDate: new Date("2021-09-06T10:36:33.442Z"),
  workflowName: "blanditiis",
}).then((res: GetJobTimeseriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgSummaryData

Gets aggregated summary metrics with trends for the entire org. 
              Also gets aggregated metrics and trends for each project belonging to the org.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetOrgSummaryDataReportingWindowEnum, GetOrgSummaryDataResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getOrgSummaryData({
  orgSlug: "deleniti",
  projectNames: {
    "amet": "deserunt",
    "nisi": "vel",
    "natus": "omnis",
    "molestiae": "perferendis",
  },
  reportingWindow: GetOrgSummaryDataReportingWindowEnum.Last24Hours,
}).then((res: GetOrgSummaryDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectWorkflowJobMetrics

Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetProjectWorkflowJobMetricsReportingWindowEnum,
  GetProjectWorkflowJobMetricsResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getProjectWorkflowJobMetrics({
  allBranches: false,
  branch: "magnam",
  pageToken: "distinctio",
  projectSlug: "id",
  reportingWindow: GetProjectWorkflowJobMetricsReportingWindowEnum.Last90Days,
  workflowName: "labore",
}).then((res: GetProjectWorkflowJobMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectWorkflowMetrics

Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectWorkflowMetricsReportingWindowEnum, GetProjectWorkflowMetricsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getProjectWorkflowMetrics({
  allBranches: false,
  branch: "suscipit",
  pageToken: "natus",
  projectSlug: "nobis",
  reportingWindow: GetProjectWorkflowMetricsReportingWindowEnum.Last24Hours,
}).then((res: GetProjectWorkflowMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectWorkflowRuns

Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetProjectWorkflowRuns200ApplicationJSONItemsStatusEnum,
  GetProjectWorkflowRunsResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getProjectWorkflowRuns({
  allBranches: false,
  branch: "vero",
  endDate: new Date("2022-11-24T10:55:00.183Z"),
  pageToken: "magnam",
  projectSlug: "et",
  startDate: new Date("2022-04-17T13:06:08.135Z"),
  workflowName: "provident",
}).then((res: GetProjectWorkflowRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectWorkflowTestMetrics

Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectWorkflowTestMetricsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getProjectWorkflowTestMetrics({
  allBranches: false,
  branch: "quos",
  projectSlug: "sint",
  workflowName: "accusantium",
}).then((res: GetProjectWorkflowTestMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectWorkflowsPageData

Get summary metrics and trends for a project at workflow and branch level. 
             Workflow runs going back at most 90 days are included in the aggregation window. 
             Trends are only supported upto last 30 days. 
             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  GetProjectWorkflowsPageDataReportingWindowEnum,
  GetProjectWorkflowsPageDataResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getProjectWorkflowsPageData({
  branches: {
    "reiciendis": "mollitia",
    "ad": "eum",
    "dolor": "necessitatibus",
  },
  projectSlug: "odit",
  reportingWindow: GetProjectWorkflowsPageDataReportingWindowEnum.Last90Days,
  workflowNames: {
    "iure": "doloribus",
  },
}).then((res: GetProjectWorkflowsPageDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkflowSummary

Get the metrics and trends for a particular workflow on a single branch or all branches

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetWorkflowSummaryResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.insights.getWorkflowSummary({
  allBranches: false,
  branches: {
    "eius": "maxime",
    "deleniti": "facilis",
    "in": "architecto",
    "architecto": "repudiandae",
  },
  projectSlug: "ullam",
  workflowName: "expedita",
}).then((res: GetWorkflowSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
