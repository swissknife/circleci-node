import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


// DeleteCheckoutKeyMessageResponse
/** 
 * message response
**/
export class DeleteCheckoutKeyMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteCheckoutKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCheckoutKeyPathParams;
}


export class DeleteCheckoutKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteCheckoutKeyMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCheckoutKeyDefaultApplicationJSONObject?: DeleteCheckoutKeyDefaultApplicationJson;
}
