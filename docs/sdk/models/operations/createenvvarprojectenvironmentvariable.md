# CreateEnvVarProjectEnvironmentVariable

An environment variable is a map containing a value and an optional timestamp.


## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `createdAt`                                         | *any*                                               | :heavy_minus_sign:                                  | The creation timestamp of the environment variable. | #joda/inst 2023-04-14T21:20:14+0000                 |
| `name`                                              | *string*                                            | :heavy_check_mark:                                  | The name of the environment variable.               | foo                                                 |
| `value`                                             | *string*                                            | :heavy_check_mark:                                  | The value of the environment variable.              | xxxx1234                                            |