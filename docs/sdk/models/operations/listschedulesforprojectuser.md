# ListSchedulesForProjectUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { ListSchedulesForProjectUser } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectUser = {
  id: "53843e24-643c-4518-a25e-5a82ad1cbd14",
  login: "Alanis.Stiedemann43",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |