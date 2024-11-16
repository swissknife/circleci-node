# GetCurrentUserUser

User login information.

## Example Usage

```typescript
import { GetCurrentUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetCurrentUserUser = {
  id: "ff6fca33-2e47-47cd-b26d-d1241619391f",
  login: "Giuseppe.Friesen",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |