# Decision

Decision rendered by applying the policy against the provided data. Response will be modeled by the data and rego processed.


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `enabledRules`                                  | *string*[]                                      | :heavy_minus_sign:                              | N/A                                             |
| `hardFailures`                                  | [Violation](../../models/shared/violation.md)[] | :heavy_minus_sign:                              | N/A                                             |
| `reason`                                        | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `softFailures`                                  | [Violation](../../models/shared/violation.md)[] | :heavy_minus_sign:                              | N/A                                             |
| `status`                                        | *string*                                        | :heavy_check_mark:                              | N/A                                             |