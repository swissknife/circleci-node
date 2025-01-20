<!-- Start SDK Example Usage [usage] -->
```typescript
import { Circleci } from "circleci-v2-sdk";

const circleci = new Circleci({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await circleci.context.addEnvironmentVariableToContext({
    requestBody: {
      value: "some-secret-value",
    },
    contextId: "00ac7939-2dac-470a-a639-ebd1d3b53886",
    envVarName: "POSTGRES_USER",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->