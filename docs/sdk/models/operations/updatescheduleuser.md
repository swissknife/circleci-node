# UpdateScheduleUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { UpdateScheduleUser } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUser = {
  id: "ae7dcafc-4cb6-413c-a3fb-799f24b3d520",
  login: "Reva_Von",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |