# GetDecisionLogsRequest


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `after`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return decisions made after this date.                                                        |
| `before`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return decisions made before this date.                                                       |
| `branch`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return decisions made on this branch.                                                         |
| `context`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Sets the offset when retrieving the decisions, for paging.                                    |
| `ownerID`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return decisions made for this project.                                                       |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return decisions matching this decision status.                                               |