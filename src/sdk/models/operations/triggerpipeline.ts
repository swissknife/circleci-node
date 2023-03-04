import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class TriggerPipelinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

// TriggerPipelineTriggerPipelineParameters
/** 
 * The information you can supply when triggering a pipeline.
**/
export class TriggerPipelineTriggerPipelineParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: string;
}

export class TriggerPipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TriggerPipelinePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TriggerPipelineTriggerPipelineParameters;
}

export class TriggerPipelineDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum TriggerPipelinePipelineCreationStateEnum {
    Created = "created",
    Errored = "errored",
    SetupPending = "setup-pending",
    Setup = "setup",
    Pending = "pending"
}

// TriggerPipelinePipelineCreation
/** 
 * A pipeline creation response.
**/
export class TriggerPipelinePipelineCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: number;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: TriggerPipelinePipelineCreationStateEnum;
}

export class TriggerPipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pipelineCreation?: TriggerPipelinePipelineCreation;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  triggerPipelineDefaultApplicationJSONObject?: TriggerPipelineDefaultApplicationJSON;
}