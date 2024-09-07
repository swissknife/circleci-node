# UpdateScheduleUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { UpdateScheduleUser } from "circleci-v2-sdk/sdk/models/operations";

let value: UpdateScheduleUser = {
    id: "5a6fae54-ebf6-40c3-a1f0-23b75d2367fe",
    login: "Bethel79",
    name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |