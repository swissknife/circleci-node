# DeleteOrgClaimsResponse


## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `claimResponse`                                                                                   | [shared.ClaimResponse](../../models/shared/claimresponse.md)                                      | :heavy_minus_sign:                                                                                | Claims successfully deleted.                                                                      |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `deleteOrgClaims400ApplicationJSONObject`                                                         | [DeleteOrgClaims400ApplicationJSON](../../models/operations/deleteorgclaims400applicationjson.md) | :heavy_minus_sign:                                                                                | The request is malformed (e.g, a given path parameter is invalid)<br/>                            |
| `deleteOrgClaims403ApplicationJSONObject`                                                         | [DeleteOrgClaims403ApplicationJSON](../../models/operations/deleteorgclaims403applicationjson.md) | :heavy_minus_sign:                                                                                | The user is forbidden from making this request<br/>                                               |
| `deleteOrgClaims500ApplicationJSONObject`                                                         | [DeleteOrgClaims500ApplicationJSON](../../models/operations/deleteorgclaims500applicationjson.md) | :heavy_minus_sign:                                                                                | Something unexpected happened on the server.                                                      |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `rawResponse`                                                                                     | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |