# DeleteContextResponse


## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `messageResponse`                                                                                         | [operations.DeleteContextMessageResponse](../../../sdk/models/operations/deletecontextmessageresponse.md) | :heavy_minus_sign:                                                                                        | A confirmation message                                                                                    |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                   | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.DeleteContextResponseBody](../../../sdk/models/operations/deletecontextresponsebody.md)       | :heavy_minus_sign:                                                                                        | Error response.                                                                                           |