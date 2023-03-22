/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum UpdateWebhookRequestBodyEventsEnum {
  WorkflowCompleted = "workflow-completed",
  JobCompleted = "job-completed",
}

/**
 * The parameters for an update webhook request
 */
export class UpdateWebhookRequestBody extends SpeakeasyBase {
  /**
   * Events that will trigger the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events?: UpdateWebhookRequestBodyEventsEnum[];

  /**
   * Name of the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Secret used to build an HMAC hash of the payload and passed as a header in the webhook request
   */
  @SpeakeasyMetadata()
  @Expose({ name: "signing-secret" })
  signingSecret?: string;

  /**
   * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  /**
   * Whether to enforce TLS certificate verification when delivering the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "verify-tls" })
  verifyTls?: boolean;
}

export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdateWebhookRequestBody;

  /**
   * ID of the webhook (UUID)
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhook-id",
  })
  webhookId: string;
}

/**
 * Error response.
 */
export class UpdateWebhookDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export enum UpdateWebhookWebhookEventsEnum {
  WorkflowCompleted = "workflow-completed",
  JobCompleted = "job-completed",
}

/**
 * The scope in which the relevant events that will trigger webhooks
 */
export class UpdateWebhookWebhookScope extends SpeakeasyBase {
  /**
   * ID of the scope being used (at the moment, only project ID is supported)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Type of the scope being used
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

/**
 * A webhook
 */
export class UpdateWebhookWebhook extends SpeakeasyBase {
  /**
   * The date and time the webhook was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  /**
   * Events that will trigger the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events: UpdateWebhookWebhookEventsEnum[];

  /**
   * The unique ID of the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Name of the webhook
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The scope in which the relevant events that will trigger webhooks
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  @Type(() => UpdateWebhookWebhookScope)
  scope: UpdateWebhookWebhookScope;

  /**
   * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
   */
  @SpeakeasyMetadata()
  @Expose({ name: "signing-secret" })
  signingSecret: string;

  /**
   * The date and time the webhook was last updated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  /**
   * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  /**
   * Whether to enforce TLS certificate verification when delivering the webhook
   */
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
  rawResponse?: AxiosResponse;

  /**
   * A webhook
   */
  @SpeakeasyMetadata()
  webhook?: UpdateWebhookWebhook;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  updateWebhookDefaultApplicationJSONObject?: UpdateWebhookDefaultApplicationJSON;
}
