import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebhookByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook-id" })
  webhookId: string;
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class GetWebhookByIdWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: GetWebhookByIdWebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: GetWebhookByIdWebhookScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
}


export class GetWebhookByIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetWebhookByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookByIdPathParams;
}


export class GetWebhookByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: GetWebhookByIdWebhook;

  @SpeakeasyMetadata()
  getWebhookByIdDefaultApplicationJSONObject?: GetWebhookByIdDefaultApplicationJson;
}
