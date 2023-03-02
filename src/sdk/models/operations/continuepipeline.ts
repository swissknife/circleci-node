import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class ContinuePipelineRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration: string;

  @SpeakeasyMetadata()
  @Expose({ name: "continuation-key" })
  continuationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;
}

export class ContinuePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ContinuePipelineRequestBody;
}

export class ContinuePipelineDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// ContinuePipelineMessageResponse
/** 
 * message response
**/
export class ContinuePipelineMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
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