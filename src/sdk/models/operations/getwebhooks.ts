import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

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
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class GetWebhooks200ApplicationJSONWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: GetWebhooks200ApplicationJSONWebhookEventsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => GetWebhooks200ApplicationJSONWebhookScope)
  scope: GetWebhooks200ApplicationJSONWebhookScope;

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

// GetWebhooks200ApplicationJSON
/** 
 * A list of webhooks
**/
export class GetWebhooks200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetWebhooks200ApplicationJSONWebhook })
  @Expose({ name: "items" })
  @Type(() => GetWebhooks200ApplicationJSONWebhook)
  items: GetWebhooks200ApplicationJSONWebhook[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJSON;

  @SpeakeasyMetadata()
  getWebhooksDefaultApplicationJSONObject?: GetWebhooksDefaultApplicationJSON;
}