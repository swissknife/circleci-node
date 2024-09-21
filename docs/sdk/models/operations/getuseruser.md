# GetUserUser

User login information.

## Example Usage

```typescript
import { GetUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetUserUser = {
  id: "1eb9cd7e-e498-48f4-9fe7-dca53ad0a7e5",
  login: "Jordi_Ratke5",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |