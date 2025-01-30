# UpdateScheduleUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { UpdateScheduleUser } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUser = {
  id: "8c0644c9-70ff-4308-8fe9-45e723417ea1",
  login: "Douglas38",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |