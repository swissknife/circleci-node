# GetJobDetailsResponse


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `jobDetails`                                                                                        | [operations.GetJobDetailsJobDetails](../../../sdk/models/operations/getjobdetailsjobdetails.md)     | :heavy_minus_sign:                                                                                  | Job details.                                                                                        |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)                                             | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `object`                                                                                            | [operations.GetJobDetailsResponseBody](../../../sdk/models/operations/getjobdetailsresponsebody.md) | :heavy_minus_sign:                                                                                  | Error response.                                                                                     |