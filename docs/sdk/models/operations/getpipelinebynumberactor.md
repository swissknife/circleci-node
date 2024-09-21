# GetPipelineByNumberActor

The user who triggered the Pipeline.

## Example Usage

```typescript
import { GetPipelineByNumberActor } from "circleci-v2-sdk/sdk/models/operations";

let value: GetPipelineByNumberActor = {
  avatarUrl: "<value>",
  login: "Viola_Cummerata41",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `avatarUrl`                                    | *string*                                       | :heavy_check_mark:                             | URL to the user's avatar on the VCS            |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |