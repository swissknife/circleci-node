import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RerunWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

// RerunWorkflowRerunWorkflowParameters
/**
 * The information you can supply when rerunning a workflow.
 **/
export class RerunWorkflowRerunWorkflowParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enable_ssh" })
  enableSsh?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "from_failed" })
  fromFailed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "sparse_tree" })
  sparseTree?: boolean;
}

export class RerunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RerunWorkflowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RerunWorkflowRerunWorkflowParameters;
}

export class RerunWorkflowDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// RerunWorkflow202ApplicationJSON
/**
 * A response to rerunning a workflow
 **/
export class RerunWorkflow202ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "workflow_id" })
  workflowId: string;
}

export class RerunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  rerunWorkflow202ApplicationJSONObject?: RerunWorkflow202ApplicationJSON;

  @SpeakeasyMetadata()
  rerunWorkflowDefaultApplicationJSONObject?: RerunWorkflowDefaultApplicationJSON;
}
