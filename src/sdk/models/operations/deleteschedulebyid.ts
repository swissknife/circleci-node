import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteScheduleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
  scheduleId: string;
}


// DeleteScheduleByIdMessageResponse
/** 
 * message response
**/
export class DeleteScheduleByIdMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class DeleteScheduleByIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteScheduleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScheduleByIdPathParams;
}


export class DeleteScheduleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteScheduleByIdMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteScheduleByIdDefaultApplicationJSONObject?: DeleteScheduleByIdDefaultApplicationJson;
}
