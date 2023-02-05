import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TriggerPipelinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

// TriggerPipelineTriggerPipelineParameters
/** 
 * The information you can supply when triggering a pipeline.
**/
export class TriggerPipelineTriggerPipelineParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export class TriggerPipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TriggerPipelinePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TriggerPipelineTriggerPipelineParameters;
}

export class TriggerPipelineDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
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
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
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
  triggerPipelineDefaultApplicationJSONObject?: TriggerPipelineDefaultApplicationJSON;
}