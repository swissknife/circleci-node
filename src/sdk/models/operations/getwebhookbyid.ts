import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetWebhookByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook-id" })
  webhookId: string;
}

export class GetWebhookByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookByIdPathParams;
}

export class GetWebhookByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetWebhookByIdWebhookEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}

// GetWebhookByIdWebhookScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class GetWebhookByIdWebhookScope extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class GetWebhookByIdWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: GetWebhookByIdWebhookEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => GetWebhookByIdWebhookScope)
  scope: GetWebhookByIdWebhookScope;

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

export class GetWebhookByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: GetWebhookByIdWebhook;

  @SpeakeasyMetadata()
  getWebhookByIdDefaultApplicationJSONObject?: GetWebhookByIdDefaultApplicationJSON;
}