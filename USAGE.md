<!-- Start SDK Example Usage -->
```typescript
import {
  AddEnvironmentVariableToContextRequest,
  AddEnvironmentVariableToContextResponse 
} from "circleci-v2-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "circleci-v2-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
});
    
const req: AddEnvironmentVariableToContextRequest = {
  pathParams: {
    contextId: "unde",
    envVarName: "deserunt",
  },
  request: {
    value: "porro",
  },
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->