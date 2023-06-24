# RerunWorkflowResponse


## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `rawResponse`                                                                                         | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `rerunWorkflow202ApplicationJSONObject`                                                               | [RerunWorkflow202ApplicationJSON](../../models/operations/rerunworkflow202applicationjson.md)         | :heavy_minus_sign:                                                                                    | A confirmation message.                                                                               |
| `rerunWorkflowDefaultApplicationJSONObject`                                                           | [RerunWorkflowDefaultApplicationJSON](../../models/operations/rerunworkflowdefaultapplicationjson.md) | :heavy_minus_sign:                                                                                    | Error response.                                                                                       |