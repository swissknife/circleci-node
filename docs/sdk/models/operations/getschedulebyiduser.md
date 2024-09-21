# GetScheduleByIdUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { GetScheduleByIdUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdUser = {
  id: "c8261bfc-6948-44b4-8fa1-0f353ea88596",
  login: "Madisyn50",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |