# GetJobTimeseriesResponse


## Supported Types

### `operations.GetJobTimeseriesResponseBody`

```typescript
const value: operations.GetJobTimeseriesResponseBody = {
  items: [
    {
      maxEndedAt: new Date("2022-06-11T23:57:33.954Z"),
      metrics: {
        durationMetrics: {
          max: 684935,
          median: 656762,
          min: 862063,
          p95: 97258,
          total: 497777,
        },
        failedRuns: 581082,
        medianCreditsUsed: 241557,
        successfulRuns: 169025,
        throughput: 8595.81,
        totalCreditsUsed: 58534,
        totalRuns: 470621,
      },
      minStartedAt: new Date("2022-05-07T22:53:51.252Z"),
      name: "build-and-test",
      timestamp: new Date("2023-05-16T22:28:25.169Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

### `operations.GetJobTimeseriesInsightsResponseBody`

```typescript
const value: operations.GetJobTimeseriesInsightsResponseBody = {};
```

