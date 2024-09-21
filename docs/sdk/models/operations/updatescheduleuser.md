# UpdateScheduleUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { UpdateScheduleUser } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUser = {
  id: "10ae7dca-fc4c-4b61-83c3-fb799f24b3d5",
  login: "Alyson91",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |