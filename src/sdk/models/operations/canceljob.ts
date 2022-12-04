import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
  jobNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


// CancelJobMessageResponse
/** 
 * message response
**/
export class CancelJobMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class CancelJobDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CancelJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelJobPathParams;
}


export class CancelJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: CancelJobMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelJobDefaultApplicationJsonObject?: CancelJobDefaultApplicationJson;
}
