# GetJobDetailsJobDetailsMessages

Message from CircleCI execution platform.


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `message`                                                       | *string*                                                        | :heavy_check_mark:                                              | Information describing message.                                 |
| `reason`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Value describing the reason for message to be added to the job. |
| `type`                                                          | *string*                                                        | :heavy_check_mark:                                              | Message type.                                                   |