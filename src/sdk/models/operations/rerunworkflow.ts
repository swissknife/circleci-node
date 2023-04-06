/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The information you can supply when rerunning a workflow.
 */
export class RerunWorkflowRerunWorkflowParameters extends SpeakeasyBase {
  /**
   * Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enable_ssh" })
  enableSsh?: boolean;

  /**
   * Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from_failed" })
  fromFailed?: boolean;

  /**
   * A list of job IDs to rerun.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs?: string[];

  /**
   * Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sparse_tree" })
  sparseTree?: boolean;
}

export class RerunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: RerunWorkflowRerunWorkflowParameters;

  /**
   * The unique ID of the workflow.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

/**
 * Error response.
 */
export class RerunWorkflowDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * A response to rerunning a workflow
 */
export class RerunWorkflow202ApplicationJSON extends SpeakeasyBase {
  /**
   * The ID of the newly-created workflow.
   */
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

  /**
   * A confirmation message.
   */
  @SpeakeasyMetadata()
  rerunWorkflow202ApplicationJSONObject?: RerunWorkflow202ApplicationJSON;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  rerunWorkflowDefaultApplicationJSONObject?: RerunWorkflowDefaultApplicationJSON;
}
