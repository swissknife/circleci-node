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
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  CreateCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum,
  CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum,
  CreateCheckoutKeyRequest,
  CreateCheckoutKeyResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCheckoutKeyRequest = {
  requestBody: {
    type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum.DeployKey,
  },
  projectSlug: "distinctio",
};

sdk.project.createCheckoutKey(req).then((res: CreateCheckoutKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createEnvVar

Creates a new environment variable.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { CreateEnvVarRequest, CreateEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateEnvVarRequest = {
  requestBody: {
    name: "foo",
    value: "xxxx1234",
  },
  projectSlug: "asperiores",
};

sdk.project.createEnvVar(req).then((res: CreateEnvVarResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteCheckoutKey

Deletes the checkout key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { DeleteCheckoutKeyRequest, DeleteCheckoutKeyResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteCheckoutKeyRequest = {
  fingerprint: "nihil",
  projectSlug: "ipsum",
};

sdk.project.deleteCheckoutKey(req).then((res: DeleteCheckoutKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEnvVar

Deletes the environment variable named :name.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { DeleteEnvVarRequest, DeleteEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteEnvVarRequest = {
  name: "Alberta Ullrich",
  projectSlug: "perferendis",
};

sdk.project.deleteEnvVar(req).then((res: DeleteEnvVarResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCheckoutKey

Returns an individual checkout key.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  GetCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum,
  GetCheckoutKeyRequest,
  GetCheckoutKeyResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCheckoutKeyRequest = {
  fingerprint: "amet",
  projectSlug: "optio",
};

sdk.project.getCheckoutKey(req).then((res: GetCheckoutKeyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnvVar

Returns the masked value of environment variable :name.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { GetEnvVarRequest, GetEnvVarResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnvVarRequest = {
  name: "Tommy Turner",
  projectSlug: "provident",
};

sdk.project.getEnvVar(req).then((res: GetEnvVarResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectBySlug

Retrieves a project by project slug.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  GetProjectBySlugProjectVcsInfoProviderEnum,
  GetProjectBySlugRequest,
  GetProjectBySlugResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetProjectBySlugRequest = {
  projectSlug: "minima",
};

sdk.project.getProjectBySlug(req).then((res: GetProjectBySlugResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCheckoutKeys

Returns a sequence of checkout keys for `:project`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import {
  ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyTypeEnum,
  ListCheckoutKeysRequest,
  ListCheckoutKeysResponse,
} from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCheckoutKeysRequest = {
  projectSlug: "repellendus",
};

sdk.project.listCheckoutKeys(req).then((res: ListCheckoutKeysResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listEnvVars

Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
import { ListEnvVarsRequest, ListEnvVarsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListEnvVarsRequest = {
  projectSlug: "totam",
};

sdk.project.listEnvVars(req).then((res: ListEnvVarsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
