# User

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { User } from "circleci-v2-sdk/sdk/models/operations";

let value: User = {
  id: "15b4dc35-d355-4c01-a96a-4ec1cffb194f",
  login: "Leonor.Kessler93",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |