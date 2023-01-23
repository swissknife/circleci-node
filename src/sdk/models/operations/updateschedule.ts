import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
  scheduleId: string;
}

export enum UpdateScheduleUpdateScheduleParametersAttributionActorEnum {
    Current = "current",
    System = "system"
}

export enum UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum {
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


// UpdateScheduleUpdateScheduleParametersTimetable
/** 
 * Timetable that specifies when a schedule triggers.
**/
export class UpdateScheduleUpdateScheduleParametersTimetable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay?: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour?: number;
}


// UpdateScheduleUpdateScheduleParameters
/** 
 * The parameters for an update schedule request
**/
export class UpdateScheduleUpdateScheduleParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution-actor" })
  attributionActor?: UpdateScheduleUpdateScheduleParametersAttributionActorEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timetable" })
  timetable?: UpdateScheduleUpdateScheduleParametersTimetable;
}


// UpdateScheduleScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class UpdateScheduleScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum UpdateScheduleScheduleTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum UpdateScheduleScheduleTimetable1MonthsEnum {
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


export class UpdateScheduleScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: UpdateScheduleScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: UpdateScheduleScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}

export enum UpdateScheduleScheduleTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum UpdateScheduleScheduleTimetable2MonthsEnum {
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


export class UpdateScheduleScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: UpdateScheduleScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: UpdateScheduleScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}


// UpdateScheduleSchedule
/** 
 * A schedule response
**/
export class UpdateScheduleSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: UpdateScheduleScheduleUser;

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


export class UpdateScheduleDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class UpdateScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateScheduleUpdateScheduleParameters;
}


export class UpdateScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: UpdateScheduleSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateScheduleDefaultApplicationJSONObject?: UpdateScheduleDefaultApplicationJson;
}
