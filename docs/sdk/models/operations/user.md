# User

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { User } from "circleci-v2-sdk/sdk/models/operations";

let value: User = {
    id: "3b756c11-f6c3-47a5-9262-43835bbc05a2",
    login: "Daren33",
    name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |