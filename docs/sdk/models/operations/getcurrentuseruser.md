# GetCurrentUserUser

User login information.

## Example Usage

```typescript
import { GetCurrentUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetCurrentUserUser = {
  id: "71778ff6-1d01-4747-a360-a15db6a66065",
  login: "Leta62",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |