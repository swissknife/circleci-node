# GetCurrentUserUser

User login information.

## Example Usage

```typescript
import { GetCurrentUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetCurrentUserUser = {
  id: "369c6bc5-fae8-4bce-a286-e1fe17bbec47",
  login: "Brittany.Kshlerin",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |