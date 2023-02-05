import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ContinuePipelineRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: string;

  @SpeakeasyMetadata({ data: "json, name=continuation-key" })
  continuationKey: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;
}

export class ContinuePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ContinuePipelineRequestBody;
}

export class ContinuePipelineDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// ContinuePipelineMessageResponse
/** 
 * message response
**/
export class ContinuePipelineMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}

export class ContinuePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: ContinuePipelineMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  continuePipelineDefaultApplicationJSONObject?: ContinuePipelineDefaultApplicationJSON;
}