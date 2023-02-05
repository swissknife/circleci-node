import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CancelJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
  jobNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class CancelJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelJobPathParams;
}

export class CancelJobDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// CancelJobMessageResponse
/** 
 * message response
**/
export class CancelJobMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}

export class CancelJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: CancelJobMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelJobDefaultApplicationJSONObject?: CancelJobDefaultApplicationJSON;
}