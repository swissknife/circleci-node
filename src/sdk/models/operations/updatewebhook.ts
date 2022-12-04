import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: UpdateWebhookRequestBodyEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls?: boolean;
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class UpdateWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: UpdateWebhookWebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: UpdateWebhookWebhookScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
}


export class UpdateWebhookDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateWebhookRequestBody;
}


export class UpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: UpdateWebhookWebhook;

  @SpeakeasyMetadata()
  updateWebhookDefaultApplicationJsonObject?: UpdateWebhookDefaultApplicationJson;
}
