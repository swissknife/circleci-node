<!-- Start SDK Example Usage -->


```typescript
import { Circleci } from "circleci-v2-sdk";

(async () => {
    const sdk = new Circleci({
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.context.addEnvironmentVariableToContext({
        requestBody: {
            value: "some-secret-value",
        },
        contextId: "0407a4cd-7d9d-4359-a2ad-0a7c67c0ba96",
        envVarName: "Pants reproachfully",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->