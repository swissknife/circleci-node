import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateWebhookRequestBodyScopeTypeEnum;
}


// CreateWebhookRequestBody
/** 
 * The parameters for a create webhook request
**/
export class CreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events: CreateWebhookRequestBodyEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: CreateWebhookRequestBodyScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CreateWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: CreateWebhookWebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: CreateWebhookWebhookScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
}


export class CreateWebhookDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateWebhookRequestBody;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: CreateWebhookWebhook;

  @SpeakeasyMetadata()
  createWebhookDefaultApplicationJsonObject?: CreateWebhookDefaultApplicationJson;
}
