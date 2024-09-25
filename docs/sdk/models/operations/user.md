# User

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { User } from "circleci-v2-sdk/sdk/models/operations";

let value: User = {
  id: "b89196d5-96e4-41b6-990f-e906fa27f809",
  login: "Aylin.Macejkovic",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |