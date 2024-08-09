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
        contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
        envVarName: "POSTGRES_USER",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->