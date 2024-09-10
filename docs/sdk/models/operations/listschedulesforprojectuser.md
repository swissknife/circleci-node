# ListSchedulesForProjectUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { ListSchedulesForProjectUser } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectUser = {
  id: "bc7fc0b2-dce1-4087-be42-b006d678878b",
  login: "Lulu_Littel",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |