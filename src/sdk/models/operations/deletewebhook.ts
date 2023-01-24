import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook-id" })
  webhookId: string;
}


// DeleteWebhookMessageResponse
/** 
 * message response
**/
export class DeleteWebhookMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteWebhookDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhookPathParams;
}


export class DeleteWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteWebhookMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteWebhookDefaultApplicationJSONObject?: DeleteWebhookDefaultApplicationJson;
}
