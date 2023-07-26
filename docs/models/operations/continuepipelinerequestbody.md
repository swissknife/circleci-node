# ContinuePipelineRequestBody


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `configuration`                                            | *string*                                                   | :heavy_check_mark:                                         | A configuration string for the pipeline.                   |
| `continuationKey`                                          | *string*                                                   | :heavy_check_mark:                                         | A pipeline continuation key.                               |
| `parameters`                                               | Record<string, *any*>                                      | :heavy_minus_sign:                                         | An object containing pipeline parameters and their values. |