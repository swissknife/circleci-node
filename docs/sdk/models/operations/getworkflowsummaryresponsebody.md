# GetWorkflowSummaryResponseBody

Workflow level aggregated metrics and trends response


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `metrics`                                                                | [operations.Metrics](../../../sdk/models/operations/metrics.md)          | :heavy_check_mark:                                                       | Metrics aggregated across a workflow for a given time window.            |
| `trends`                                                                 | [operations.Trends](../../../sdk/models/operations/trends.md)            | :heavy_check_mark:                                                       | Trends for aggregated metrics across a workflow for a given time window. |
| `workflowNames`                                                          | *string*[]                                                               | :heavy_check_mark:                                                       | A list of all the workflow names for a given project.                    |