# GetProjectClaimsResponse


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `claimResponse`                                                                                     | [shared.ClaimResponse](../../models/shared/claimresponse.md)                                        | :heavy_minus_sign:                                                                                  | Claims successfully fetched.                                                                        |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `getProjectClaims400ApplicationJSONObject`                                                          | [GetProjectClaims400ApplicationJSON](../../models/operations/getprojectclaims400applicationjson.md) | :heavy_minus_sign:                                                                                  | The request is malformed (e.g, a given path parameter is invalid)<br/>                              |
| `getProjectClaims403ApplicationJSONObject`                                                          | [GetProjectClaims403ApplicationJSON](../../models/operations/getprojectclaims403applicationjson.md) | :heavy_minus_sign:                                                                                  | The user is forbidden from making this request<br/>                                                 |
| `getProjectClaims500ApplicationJSONObject`                                                          | [GetProjectClaims500ApplicationJSON](../../models/operations/getprojectclaims500applicationjson.md) | :heavy_minus_sign:                                                                                  | Something unexpected happened on the server.                                                        |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `rawResponse`                                                                                       | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |