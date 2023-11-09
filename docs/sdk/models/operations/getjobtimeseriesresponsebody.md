# GetJobTimeseriesResponseBody

Project level timeseries metrics response


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `items`                                                                                       | [operations.GetJobTimeseriesItems](../../../sdk/models/operations/getjobtimeseriesitems.md)[] | :heavy_check_mark:                                                                            | Aggregate metrics for a workflow at a time granularity                                        |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | A token to pass as a `page-token` query parameter to return the next page of results.         |