# Actor

The user who triggered the Pipeline.

## Example Usage

```typescript
import { Actor } from "circleci-v2-sdk/sdk/models/operations";

let value: Actor = {
  avatarUrl: "<value>",
  login: "Magdalen.Daniel16",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `avatarUrl`                                    | *string*                                       | :heavy_check_mark:                             | URL to the user's avatar on the VCS            |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |