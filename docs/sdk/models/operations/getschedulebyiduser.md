# GetScheduleByIdUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { GetScheduleByIdUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdUser = {
  id: "b9191053-9ebc-4fa9-99d6-ca403b946a26",
  login: "Kari_Hilll6",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |