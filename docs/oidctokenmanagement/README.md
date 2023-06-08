# oidcTokenManagement

## Overview

Endpoints related to manage oidc identity tokens

### Available Operations

* [deleteOrgClaims](#deleteorgclaims) - Delete org-level claims
* [deleteProjectClaims](#deleteprojectclaims) - Delete project-level claims
* [getOrgClaims](#getorgclaims) - Get org-level claims
* [getProjectClaims](#getprojectclaims) - Get project-level claims
* [patchOrgClaims](#patchorgclaims) - Patch org-level claims
* [patchProjectClaims](#patchprojectclaims) - Patch project-level claims

## deleteOrgClaims

Deletes org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.deleteOrgClaims({
  claims: "praesentium",
  orgID: "921cddc6-9260-41fb-976b-0d5f0d30c5fb",
}).then((res: DeleteOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteProjectClaims

Deletes project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { DeleteProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.deleteProjectClaims({
  claims: "nobis",
  orgID: "25870532-02c7-43d5-be9b-90c28909b3fe",
  projectID: "49a8d9cb-f486-4333-a3f9-b77f3a410067",
}).then((res: DeleteProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgClaims

Fetches org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.getOrgClaims({
  orgID: "4ebf6928-0d1b-4a77-a89e-bf737ae4203c",
}).then((res: GetOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProjectClaims

Fetches project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { GetProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.getProjectClaims({
  orgID: "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45",
  projectID: "3f870b32-6b5a-4734-a9cd-b1a8422bb679",
}).then((res: GetProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchOrgClaims

Creates/Updates org-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { PatchOrgClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.patchOrgClaims({
  patchClaimsRequest: {
    audience: [
      "qui",
      "neque",
      "fugit",
      "magni",
    ],
    ttl: "odio",
  },
  orgID: "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad",
}).then((res: PatchOrgClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchProjectClaims

Creates/Updates project-level custom claims of OIDC identity tokens

### Example Usage

```typescript
import { Circleci } from "circleci-v2-sdk";
import { PatchProjectClaimsResponse } from "circleci-v2-sdk/dist/sdk/models/operations";

const sdk = new Circleci({
  security: {
    apiKeyHeader: "",
  },
});

sdk.oidcTokenManagement.patchProjectClaims({
  patchClaimsRequest: {
    audience: [
      "doloribus",
      "ut",
      "facilis",
      "cupiditate",
    ],
    ttl: "qui",
  },
  orgID: "1879fce9-53f7-43ef-bfbc-7abd74dd39c0",
  projectID: "f5d2cff7-c70a-4456-a6d4-36813f16d9f5",
}).then((res: PatchProjectClaimsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
