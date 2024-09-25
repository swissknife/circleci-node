# ListSchedulesForProjectUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { ListSchedulesForProjectUser } from "circleci-v2-sdk/sdk/models/operations";

let value: ListSchedulesForProjectUser = {
  id: "e4b64f51-67cf-4de7-8b41-5b4dc35d355c",
  login: "Anya26",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |