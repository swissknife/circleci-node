# GetCurrentUserUser

User login information.

## Example Usage

```typescript
import { GetCurrentUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetCurrentUserUser = {
  id: "9c6bc5fa-e8bc-4e28-86e1-fe17bbec47b2",
  login: "Jayden34",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |