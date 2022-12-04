import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetWebhooksScopeTypeEnum {
    Project = "project"
}


export class GetWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope-id" })
  scopeId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope-type" })
  scopeType: GetWebhooksScopeTypeEnum;
}

export enum GetWebhooks200ApplicationJsonWebhookEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}


// GetWebhooks200ApplicationJsonWebhookScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class GetWebhooks200ApplicationJsonWebhookScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class GetWebhooks200ApplicationJsonWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: GetWebhooks200ApplicationJsonWebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: GetWebhooks200ApplicationJsonWebhookScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
}


// GetWebhooks200ApplicationJson
/** 
 * A list of webhooks
**/
export class GetWebhooks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetWebhooks200ApplicationJsonWebhook })
  items: GetWebhooks200ApplicationJsonWebhook[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class GetWebhooksDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWebhooksQueryParams;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWebhooks200ApplicationJsonObject?: GetWebhooks200ApplicationJson;

  @SpeakeasyMetadata()
  getWebhooksDefaultApplicationJsonObject?: GetWebhooksDefaultApplicationJson;
}
