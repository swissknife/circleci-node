# GetUserUser

User login information.

## Example Usage

```typescript
import { GetUserUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetUserUser = {
  id: "e2855765-ebb4-49cc-b5cb-2d777997da66",
  login: "Fatima_Beier91",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |