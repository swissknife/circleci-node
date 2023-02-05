import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum GetWebhooksScopeTypeEnum {
    Project = "project"
}

export class GetWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope-id" })
  scopeId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope-type" })
  scopeType: GetWebhooksScopeTypeEnum;
}

export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWebhooksQueryParams;
}

export class GetWebhooksDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
export enum GetWebhooks200ApplicationJSONWebhookEventsEnum {
    WorkflowCompleted = "workflow-completed",
    JobCompleted = "job-completed"
}

// GetWebhooks200ApplicationJSONWebhookScope
/** 
 * The scope in which the relevant events that will trigger webhooks
**/
export class GetWebhooks200ApplicationJSONWebhookScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export class GetWebhooks200ApplicationJSONWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: GetWebhooks200ApplicationJSONWebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: GetWebhooks200ApplicationJSONWebhookScope;

  @SpeakeasyMetadata({ data: "json, name=signing-secret" })
  signingSecret: string;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verify-tls" })
  verifyTls: boolean;
}

// GetWebhooks200ApplicationJSON
/** 
 * A list of webhooks
**/
export class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetWebhooks200ApplicationJSONWebhook })
  items: GetWebhooks200ApplicationJSONWebhook[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;

  @SpeakeasyMetadata()
  getWebhooksDefaultApplicationJSONObject?: GetWebhooksDefaultApplicationJSON;
}