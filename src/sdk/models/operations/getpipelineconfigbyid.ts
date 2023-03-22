/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetPipelineConfigByIdRequest extends SpeakeasyBase {
  /**
   * The unique ID of the pipeline.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pipeline-id",
  })
  pipelineId: string;
}

/**
 * Error response.
 */
export class GetPipelineConfigByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * The configuration strings for the pipeline.
 */
export class GetPipelineConfigByIdPipelineConfig extends SpeakeasyBase {
  /**
   * The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "compiled" })
  compiled: string;

  /**
   * The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "compiled-setup-config" })
  compiledSetupConfig?: string;

  /**
   * The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist
   */
  @SpeakeasyMetadata()
  @Expose({ name: "setup-config" })
  setupConfig?: string;

  /**
   * The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;
}

export class GetPipelineConfigByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * The configuration strings for the pipeline.
   */
  @SpeakeasyMetadata()
  pipelineConfig?: GetPipelineConfigByIdPipelineConfig;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  getPipelineConfigByIdDefaultApplicationJSONObject?: GetPipelineConfigByIdDefaultApplicationJSON;
}
