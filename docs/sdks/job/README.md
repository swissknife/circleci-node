# Job
(*job*)

### Available Operations

* [cancelJob](#canceljob) - Cancel job
* [getJobArtifacts](#getjobartifacts) - Get a job's artifacts
* [getJobDetails](#getjobdetails) - Get job details
* [getTests](#gettests) - Get test metadata

## cancelJob

Cancel job with a given job number.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CancelJobResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.job.cancelJob({
  jobNumber: "fugiat",
  projectSlug: "amet",
}).then((res: CancelJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.CancelJobRequest](../../models/operations/canceljobrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CancelJobResponse](../../models/operations/canceljobresponse.md)>**


## getJobArtifacts

Returns a job's artifacts.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetJobArtifactsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.job.getJobArtifacts({
  jobNumber: "aut",
  projectSlug: "cumque",
}).then((res: GetJobArtifactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetJobArtifactsRequest](../../models/operations/getjobartifactsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetJobArtifactsResponse](../../models/operations/getjobartifactsresponse.md)>**


## getJobDetails

Returns job details.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetJobDetailsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.job.getJobDetails({
  jobNumber: "corporis",
  projectSlug: "hic",
}).then((res: GetJobDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetJobDetailsRequest](../../models/operations/getjobdetailsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetJobDetailsResponse](../../models/operations/getjobdetailsresponse.md)>**


## getTests

Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetTestsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.job.getTests({
  jobNumber: "libero",
  projectSlug: "nobis",
}).then((res: GetTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetTestsRequest](../../models/operations/gettestsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetTestsResponse](../../models/operations/gettestsresponse.md)>**

