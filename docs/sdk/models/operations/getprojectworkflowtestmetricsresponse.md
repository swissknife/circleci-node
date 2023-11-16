# GetProjectWorkflowTestMetricsResponse


## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `twoHundredApplicationJsonObject`                                                                                                                   | [operations.GetProjectWorkflowTestMetricsResponseBody](../../../sdk/models/operations/getprojectworkflowtestmetricsresponsebody.md)                 | :heavy_minus_sign:                                                                                                                                  | A list of test metrics by workflow                                                                                                                  |
| `contentType`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response content type for this operation                                                                                                       |
| `statusCode`                                                                                                                                        | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response status code for this operation                                                                                                        |
| `rawResponse`                                                                                                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                                             | :heavy_check_mark:                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                             |
| `defaultApplicationJsonObject`                                                                                                                      | [operations.GetProjectWorkflowTestMetricsInsightsResponseBody](../../../sdk/models/operations/getprojectworkflowtestmetricsinsightsresponsebody.md) | :heavy_minus_sign:                                                                                                                                  | Error response.                                                                                                                                     |