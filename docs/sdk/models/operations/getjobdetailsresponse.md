# GetJobDetailsResponse


## Supported Types

### `operations.GetJobDetailsJobDetails`

```typescript
const value: operations.GetJobDetailsJobDetails = {
  contexts: [
    {
      name: "<value>",
    },
  ],
  createdAt: new Date("2024-05-19T10:28:52.033Z"),
  duration: 659971,
  executor: {
    resourceClass: "<value>",
  },
  latestWorkflow: {
    id: "9cf02c18-34b0-4d78-98a5-15285ff99fec",
    name: "build-and-test",
  },
  messages: [
    {
      message: "<value>",
      type: "<value>",
    },
  ],
  name: "<value>",
  number: 1,
  organization: {
    name: "<value>",
  },
  parallelRuns: [
    {
      index: 365539,
      status: "<value>",
    },
  ],
  parallelism: 201266,
  pipeline: {
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  },
  project: {
    externalUrl: "https://github.com/CircleCI-Public/api-preview-docs",
    id: "7fe10e83-aa14-4032-93a0-12544cf8f616",
    name: "api-preview-docs",
    slug: "gh/CircleCI-Public/api-preview-docs",
  },
  queuedAt: new Date("2023-06-25T18:34:36.250Z"),
  startedAt: new Date("2023-12-22T02:52:36.760Z"),
  status: "not_running",
  webUrl: "https://unfinished-premise.info",
};
```

### `operations.GetJobDetailsResponseBody`

```typescript
const value: operations.GetJobDetailsResponseBody = {};
```

