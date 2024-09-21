# GetCurrentUserUser

User login information.

## Example Usage

```typescript
import { GetCurrentUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetCurrentUserUser = {
  id: "448bfbc2-56a4-445c-a911-5cbbc488bf4c",
  login: "Kraig14",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |