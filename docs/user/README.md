# user

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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetCollaborationsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.user.getCollaborations().then((res: GetCollaborationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCurrentUser

Provides information about the user that is currently signed in.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetCurrentUserResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.user.getCurrentUser().then((res: GetCurrentUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getUser

Provides information about the user with the given ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetUserRequest, GetUserResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetUserRequest = {
  id: "ce6c5561-46c3-4e25-8fb0-08c42e141aac",
};

sdk.user.getUser(req).then((res: GetUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
