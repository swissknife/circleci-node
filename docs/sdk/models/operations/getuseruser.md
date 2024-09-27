# GetUserUser

User login information.

## Example Usage

```typescript
import { GetUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetUserUser = {
  id: "21358abe-fadc-44e0-b047-a1ac2687cfc1",
  login: "Annabelle52",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |