import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteScheduleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
  scheduleId: string;
}

export class DeleteScheduleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScheduleByIdPathParams;
}

export class DeleteScheduleByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// DeleteScheduleByIdMessageResponse
/** 
 * message response
**/
export class DeleteScheduleByIdMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}

export class DeleteScheduleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: DeleteScheduleByIdMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteScheduleByIdDefaultApplicationJSONObject?: DeleteScheduleByIdDefaultApplicationJSON;
}