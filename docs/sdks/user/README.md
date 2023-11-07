# User
(*.user*)

### Available Operations

* [getCollaborations](#getcollaborations) - Collaborations
* [getCurrentUser](#getcurrentuser) - User Information
* [getUser](#getuser) - User Information

## getCollaborations

Provides the set of organizations of which a user is a member or a collaborator.

The set of organizations that a user can collaborate on is composed of:

* Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
* The parent organization of repository that the user can collaborate on, but is not necessarily a member of
* The organization of the current user's account

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.user.getCollaborations();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaborationsResponse](../../models/operations/getcollaborationsresponse.md)>**


## getCurrentUser

Provides information about the user that is currently signed in.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.user.getCurrentUser();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCurrentUserResponse](../../models/operations/getcurrentuserresponse.md)>**


## getUser

Provides information about the user with the given ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";

(async() => {
  const sdk = new Circleci({
    security: {
      apiKeyHeader: "",
    },
  });

  const res = await sdk.user.getUser({
    id: "bf29e4e9-96b2-49f6-8980-3bb87b43bd7e",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetUserRequest](../../models/operations/getuserrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetUserResponse](../../models/operations/getuserresponse.md)>**

