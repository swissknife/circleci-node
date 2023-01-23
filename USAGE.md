<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@swissknife/circle-ts";
import { AddEnvironmentVariableToContextRequest, AddEnvironmentVariableToContextResponse } from "@swissknife/circle-ts/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddEnvironmentVariableToContextRequest = {
  pathParams: {
    contextId: "sit",
    envVarName: "voluptas",
  },
  request: {
    value: "culpa",
  },
};

sdk.context.addEnvironmentVariableToContext(req).then((res: AddEnvironmentVariableToContextResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->