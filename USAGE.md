<!-- Start SDK Example Usage -->
```typescript
import {
  AddEnvironmentVariableToContextRequest,
  AddEnvironmentVariableToContextResponse
} from "circleci-v2-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Circleci } from "circleci-v2-sdk";
const sdk = new Circleci({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AddEnvironmentVariableToContextRequest = {
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  envVarName: "est",
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->