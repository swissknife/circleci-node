import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum CreateWebhookRequestBodyEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}
export enum CreateWebhookRequestBodyScopeTypeEnum {
    Project = "project"
}

// CreateWebhookRequestBodyScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class CreateWebhookRequestBodyScope extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateWebhookRequestBodyScopeTypeEnum;
}

// CreateWebhookRequestBody
/** 
 * The parameters for a create webhook request
**/
export class CreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: CreateWebhookRequestBodyEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => CreateWebhookRequestBodyScope)
  scope: CreateWebhookRequestBodyScope;

  @SpeakeasyMetadata()
  @Expose({ name: "signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verify-tls" })
  verifyTls: boolean;
}

export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateWebhookRequestBody;
}

export class CreateWebhookDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum CreateWebhookWebhookEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}

// CreateWebhookWebhookScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class CreateWebhookWebhookScope extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class CreateWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: CreateWebhookWebhookEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => CreateWebhookWebhookScope)
  scope: CreateWebhookWebhookScope;

  @SpeakeasyMetadata()
  @Expose({ name: "signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verify-tls" })
  verifyTls: boolean;
}

export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  webhook?: CreateWebhookWebhook;

  @SpeakeasyMetadata()
  createWebhookDefaultApplicationJSONObject?: CreateWebhookDefaultApplicationJSON;
}