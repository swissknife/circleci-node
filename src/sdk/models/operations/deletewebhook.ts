import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=webhook-id",
  })
  webhookId: string;
}

export class DeleteWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhookPathParams;
}

export class DeleteWebhookDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// DeleteWebhookMessageResponse
/**
 * message response
 **/
export class DeleteWebhookMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class DeleteWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteWebhookMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  deleteWebhookDefaultApplicationJSONObject?: DeleteWebhookDefaultApplicationJSON;
}
