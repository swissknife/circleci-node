import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetScheduleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
  scheduleId: string;
}


// GetScheduleByIdScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class GetScheduleByIdScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GetScheduleByIdScheduleTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum GetScheduleByIdScheduleTimetable1MonthsEnum {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL"
}


export class GetScheduleByIdScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: GetScheduleByIdScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: GetScheduleByIdScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}

export enum GetScheduleByIdScheduleTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum GetScheduleByIdScheduleTimetable2MonthsEnum {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL"
}


export class GetScheduleByIdScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: GetScheduleByIdScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: GetScheduleByIdScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}


// GetScheduleByIdSchedule
/** 
 * A schedule response
**/
export class GetScheduleByIdSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: GetScheduleByIdScheduleUser;

  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=timetable" })
  timetable: any;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;
}


export class GetScheduleByIdDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetScheduleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduleByIdPathParams;
}


export class GetScheduleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: GetScheduleByIdSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getScheduleByIdDefaultApplicationJSONObject?: GetScheduleByIdDefaultApplicationJson;
}
