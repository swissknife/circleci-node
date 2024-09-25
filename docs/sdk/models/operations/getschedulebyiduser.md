# GetScheduleByIdUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { GetScheduleByIdUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdUser = {
  id: "993777c7-c28d-4279-b2c1-f7516a14da32",
  login: "Edmund.Zulauf",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |