# UpdateScheduleUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { UpdateScheduleUser } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUser = {
  id: "d4821555-95c1-45a9-8174-a2a74b320d78",
  login: "Berenice49",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |