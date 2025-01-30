# Insights
(*insights*)

## Overview

Endpoints relating to [Insights](https://circleci.com/docs/insights/). Use Insights to monitor credit and compute usage for your projects.

### Available Operations

* [getOrgSummaryData](#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.

## getOrgSummaryData

Gets aggregated summary metrics with trends for the entire org.
              Also gets aggregated metrics and trends for each project belonging to the org.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.insights.getOrgSummaryData({
    orgSlug: "gh/CircleCI-Public",
    projectNames: {},
    reportingWindow: "last-90-days",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CircleciCore } from "circleci-v2-sdk/core.js";
import { insightsGetOrgSummaryData } from "circleci-v2-sdk/funcs/insightsGetOrgSummaryData.js";

// Use `CircleciCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const circleci = new CircleciCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await insightsGetOrgSummaryData(circleci, {
    orgSlug: "gh/CircleCI-Public",
    projectNames: {},
    reportingWindow: "last-90-days",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrgSummaryDataRequest](../../sdk/models/operations/getorgsummarydatarequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrgSummaryDataResponse](../../sdk/models/operations/getorgsummarydataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |