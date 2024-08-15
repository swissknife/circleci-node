# User

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { User } from "circleci-v2-sdk/sdk/models/operations";

let value: User = {
    id: "e6c3d5db-3ade-4bd5-9aea-4c506a8aa94c",
    login: "Aimee.Conroy",
    name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |