# ReportingWindow

The time window used to calculate summary metrics. If not provided, defaults to last-90-days

## Example Usage

```typescript
import { ReportingWindow } from "circleci-v2-sdk/sdk/models/operations";

let value: ReportingWindow = "last-90-days";
```

## Values

```typescript
"last-7-days" | "last-90-days" | "last-24-hours" | "last-30-days" | "last-60-days"
```