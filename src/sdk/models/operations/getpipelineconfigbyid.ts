import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetPipelineConfigByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pipeline-id",
  })
  pipelineId: string;
}

export class GetPipelineConfigByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineConfigByIdPathParams;
}

export class GetPipelineConfigByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetPipelineConfigByIdPipelineConfig
/**
 * The configuration strings for the pipeline.
 **/
export class GetPipelineConfigByIdPipelineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "compiled" })
  compiled: string;

  @SpeakeasyMetadata()
  @Expose({ name: "compiled-setup-config" })
  compiledSetupConfig?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "setup-config" })
  setupConfig?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;
}

export class GetPipelineConfigByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineConfig?: GetPipelineConfigByIdPipelineConfig;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getPipelineConfigByIdDefaultApplicationJSONObject?: GetPipelineConfigByIdDefaultApplicationJSON;
}
