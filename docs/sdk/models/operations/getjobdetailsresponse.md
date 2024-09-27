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
  createdAt: new Date("2023-12-25T07:51:55.110Z"),
  duration: 580238,
  executor: {
    resourceClass: "<value>",
  },
  latestWorkflow: {
    id: "cf02c183-4b0d-4788-9a51-5285ff99fec5",
    name: "build-and-test",
  },
  messages: [
    {
      message: "<value>",
      type: "<value>",
    },
  ],
  name: "<value>",
  number: 201266,
  organization: {
    name: "<value>",
  },
  parallelRuns: [
    {
      index: 487148,
      status: "<value>",
    },
  ],
  parallelism: 990369,
  pipeline: {
    id: "5034460f-c7c4-4c43-9457-de07e2029e7b",
  },
  project: {
    externalUrl: "https://github.com/CircleCI-Public/api-preview-docs",
    id: "e10e83aa-1403-423a-a012-544cf8f61647",
    name: "api-preview-docs",
    slug: "gh/CircleCI-Public/api-preview-docs",
  },
  queuedAt: new Date("2023-05-21T07:27:53.872Z"),
  startedAt: new Date("2024-10-21T22:27:43.595Z"),
  status: "canceled",
  webUrl: "https://lumpy-ceramic.info",
};
```

### `operations.GetJobDetailsResponseBody`

```typescript
const value: operations.GetJobDetailsResponseBody = {};
```

