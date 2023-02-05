import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetPipelineConfigByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline-id" })
  pipelineId: string;
}

export class GetPipelineConfigByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineConfigByIdPathParams;
}

export class GetPipelineConfigByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// GetPipelineConfigByIdPipelineConfig
/** 
 * The configuration strings for the pipeline.
**/
export class GetPipelineConfigByIdPipelineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compiled" })
  compiled: string;

  @SpeakeasyMetadata({ data: "json, name=compiled-setup-config" })
  compiledSetupConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=setup-config" })
  setupConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
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
  getPipelineConfigByIdDefaultApplicationJSONObject?: GetPipelineConfigByIdDefaultApplicationJSON;
}