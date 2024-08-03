# GetUsageExportResponse


## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)                                               | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getUsageExportJobStatus`                                                                             | [shared.GetUsageExportJobStatus](../../../sdk/models/shared/getusageexportjobstatus.md)               | :heavy_minus_sign:                                                                                    | Usage export fetched successfully                                                                     |
| `object`                                                                                              | [operations.GetUsageExportResponseBody](../../../sdk/models/operations/getusageexportresponsebody.md) | :heavy_minus_sign:                                                                                    | Unexpected request body provided.                                                                     |