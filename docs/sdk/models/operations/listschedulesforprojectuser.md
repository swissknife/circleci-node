# ListSchedulesForProjectUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { ListSchedulesForProjectUser } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectUser = {
  id: "8d7773e4-33dc-460f-92dc-fc5363bda209",
  login: "Cody47",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |