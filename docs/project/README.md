# project

### Available Operations

* [createCheckoutKey](#createcheckoutkey) - Create a new checkout key
* [createEnvVar](#createenvvar) - Create an environment variable
* [deleteCheckoutKey](#deletecheckoutkey) - Delete a checkout key
* [deleteEnvVar](#deleteenvvar) - Delete an environment variable
* [getCheckoutKey](#getcheckoutkey) - Get a checkout key
* [getEnvVar](#getenvvar) - Get a masked environment variable
* [getProjectBySlug](#getprojectbyslug) - Get a project
* [listCheckoutKeys](#listcheckoutkeys) - Get all checkout keys
* [listEnvVars](#listenvvars) - List all environment variables

## createCheckoutKey

Creates a new checkout key. This API request is only usable with a user API token.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  CreateCheckoutKeyCheckoutKeyCheckoutKeyType,
  CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType,
  CreateCheckoutKeyResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.createCheckoutKey({
  requestBody: {
    type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType.DeployKey,
  },
  projectSlug: "esse",
}).then((res: CreateCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEnvVar

Creates a new environment variable.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { CreateEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.createEnvVar({
  requestBody: {
    name: "foo",
    value: "xxxx1234",
  },
  projectSlug: "quasi",
}).then((res: CreateEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteCheckoutKey

Deletes the checkout key.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteCheckoutKeyResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.deleteCheckoutKey({
  fingerprint: "a",
  projectSlug: "error",
}).then((res: DeleteCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEnvVar

Deletes the environment variable named :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.deleteEnvVar({
  name: "Jody Schuster",
  projectSlug: "asperiores",
}).then((res: DeleteEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCheckoutKey

Returns an individual checkout key.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetCheckoutKeyCheckoutKeyCheckoutKeyType, GetCheckoutKeyResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.getCheckoutKey({
  fingerprint: "facere",
  projectSlug: "veritatis",
}).then((res: GetCheckoutKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEnvVar

Returns the masked value of environment variable :name.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.getEnvVar({
  name: "Ann Murphy",
  projectSlug: "tenetur",
}).then((res: GetEnvVarResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBySlug

Retrieves a project by project slug.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectBySlugProjectVcsInfoProvider, GetProjectBySlugResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.getProjectBySlug({
  projectSlug: "quae",
}).then((res: GetProjectBySlugResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listCheckoutKeys

Returns a sequence of checkout keys for `:project`.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import {
  ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyType,
  ListCheckoutKeysResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.listCheckoutKeys({
  projectSlug: "earum",
}).then((res: ListCheckoutKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listEnvVars

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { ListEnvVarsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.project.listEnvVars({
  projectSlug: "vel",
}).then((res: ListEnvVarsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
