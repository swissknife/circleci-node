# GetScheduleByIdUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { GetScheduleByIdUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdUser = {
  id: "3b946a26-6885-4c10-b6e4-2e25b436ce02",
  login: "Larue1",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |