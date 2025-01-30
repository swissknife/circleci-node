# User

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { User } from "circleci-v2-sdk/sdk/models/operations";

let value: User = {
  id: "293d511e-12d4-4ad9-afb1-8bc0bdb878be",
  login: "Shirley_Bernhard28",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |