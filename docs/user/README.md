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
import { Circleci } from "circleci-v2-sdk";
import { GetCollaborationsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.user.getCollaborations().then((res: GetCollaborationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCurrentUser

Provides information about the user that is currently signed in.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetCurrentUserResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.user.getCurrentUser().then((res: GetCurrentUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getUser

Provides information about the user with the given ID.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetUserResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.user.getUser({
  id: "44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a",
}).then((res: GetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
