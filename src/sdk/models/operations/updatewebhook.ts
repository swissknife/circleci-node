import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class UpdateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook-id" })
  webhookId: string;
}
export enum UpdateWebhookRequestBodyEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}

// UpdateWebhookRequestBody
/** 
 * The parameters for an update webhook request
**/
export class UpdateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events?: UpdateWebhookRequestBodyEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "signing-secret" })
  signingSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verify-tls" })
  verifyTls?: boolean;
}

export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateWebhookRequestBody;
}

export class UpdateWebhookDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum UpdateWebhookWebhookEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}

// UpdateWebhookWebhookScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class UpdateWebhookWebhookScope extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class UpdateWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: UpdateWebhookWebhookEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => UpdateWebhookWebhookScope)
  scope: UpdateWebhookWebhookScope;

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

export class UpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: UpdateWebhookWebhook;

  @SpeakeasyMetadata()
  updateWebhookDefaultApplicationJSONObject?: UpdateWebhookDefaultApplicationJSON;
}