import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RerunWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


// RerunWorkflowRerunWorkflowParameters
/** 
 * The information you can supply when rerunning a workflow.
**/
export class RerunWorkflowRerunWorkflowParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable_ssh" })
  enableSsh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from_failed" })
  fromFailed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobs" })
  jobs?: string[];

  @SpeakeasyMetadata({ data: "json, name=sparse_tree" })
  sparseTree?: boolean;
}


// RerunWorkflow202ApplicationJson
/** 
 * A response to rerunning a workflow
**/
export class RerunWorkflow202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workflow_id" })
  workflowId: string;
}


export class RerunWorkflowDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RerunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RerunWorkflowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RerunWorkflowRerunWorkflowParameters;
}


export class RerunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rerunWorkflow202ApplicationJsonObject?: RerunWorkflow202ApplicationJson;

  @SpeakeasyMetadata()
  rerunWorkflowDefaultApplicationJsonObject?: RerunWorkflowDefaultApplicationJson;
}
