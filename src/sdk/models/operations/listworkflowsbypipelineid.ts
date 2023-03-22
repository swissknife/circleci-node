/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListWorkflowsByPipelineIdRequest extends SpeakeasyBase {
  /**
   * A token to retrieve the next page of results.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;

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
export class ListWorkflowsByPipelineIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * The current status of the workflow.
 */
export enum ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum {
  Success = "success",
  Running = "running",
  NotRun = "not_run",
  Failed = "failed",
  Error = "error",
  Failing = "failing",
  OnHold = "on_hold",
  Canceled = "canceled",
  Unauthorized = "unauthorized",
}

/**
 * Tag used for the workflow
 */
export enum ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum {
  Setup = "setup",
}

/**
 * A workflow
 */
export class ListWorkflowsByPipelineIdWorkflowListResponseWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canceled_by" })
  canceledBy?: string;

  /**
   * The date and time the workflow was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "errored_by" })
  erroredBy?: string;

  /**
   * The unique ID of the workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The name of the workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The ID of the pipeline this workflow belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pipeline_id" })
  pipelineId: string;

  /**
   * The number of the pipeline this workflow belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pipeline_number" })
  pipelineNumber: number;

  /**
   * The project-slug for the pipeline this workflow belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "started_by" })
  startedBy: string;

  /**
   * The current status of the workflow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatusEnum;

  /**
   * The date and time the workflow stopped.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "stopped_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stoppedAt: Date;

  /**
   * Tag used for the workflow
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag?: ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTagEnum;
}

/**
 * A list of workflows and associated pagination token.
 */
export class ListWorkflowsByPipelineIdWorkflowListResponse extends SpeakeasyBase {
  /**
   * A list of workflows.
   */
  @SpeakeasyMetadata({
    elemType: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow,
  })
  @Expose({ name: "items" })
  @Type(() => ListWorkflowsByPipelineIdWorkflowListResponseWorkflow)
  items: ListWorkflowsByPipelineIdWorkflowListResponseWorkflow[];

  /**
   * A token to pass as a `page-token` query parameter to return the next page of results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListWorkflowsByPipelineIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * A paginated list of workflow objects.
   */
  @SpeakeasyMetadata()
  workflowListResponse?: ListWorkflowsByPipelineIdWorkflowListResponse;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  listWorkflowsByPipelineIdDefaultApplicationJSONObject?: ListWorkflowsByPipelineIdDefaultApplicationJSON;
}
