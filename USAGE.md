<!-- Start SDK Example Usage [usage] -->
```typescript
import { Circleci } from "circleci-v2-sdk";

async function run() {
    const sdk = new Circleci({
        security: {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.context.addEnvironmentVariableToContext({
        requestBody: {
            value: "some-secret-value",
        },
        contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
        envVarName: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->