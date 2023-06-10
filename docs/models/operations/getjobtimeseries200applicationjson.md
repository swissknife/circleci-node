# GetJobTimeseries200ApplicationJSON

Project level timeseries metrics response


## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                         | [GetJobTimeseries200ApplicationJSONItems](../../models/operations/getjobtimeseries200applicationjsonitems.md)[] | :heavy_check_mark:                                                                                              | Aggregate metrics for a workflow at a time granularity                                                          |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | A token to pass as a `page-token` query parameter to return the next page of results.                           |