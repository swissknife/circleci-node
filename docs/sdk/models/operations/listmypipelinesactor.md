# ListMyPipelinesActor

The user who triggered the Pipeline.

## Example Usage

```typescript
import { ListMyPipelinesActor } from "circleci-v2-sdk/sdk/models/operations";

let value: ListMyPipelinesActor = {
  avatarUrl: "<value>",
  login: "Magnolia_Schiller",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `avatarUrl`                                    | *string*                                       | :heavy_check_mark:                             | URL to the user's avatar on the VCS            |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |