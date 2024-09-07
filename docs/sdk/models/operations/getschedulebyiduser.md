# GetScheduleByIdUser

The attribution actor who will run the scheduled pipeline.

## Example Usage

```typescript
import { GetScheduleByIdUser } from "circleci-v2-sdk/sdk/models/operations";

let value: GetScheduleByIdUser = {
    id: "e6e0ac18-4c2b-49c2-87c8-8373a40e1942",
    login: "Willy93",
    name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The unique ID of the user.                     |
| `login`                                        | *string*                                       | :heavy_check_mark:                             | The login information for the user on the VCS. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the user.                          |