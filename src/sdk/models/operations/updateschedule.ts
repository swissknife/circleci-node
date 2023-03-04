import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: UpdateScheduleUpdateScheduleParametersTimetableMonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour?: number;
}

// UpdateScheduleUpdateScheduleParameters
/** 
 * The parameters for an update schedule request
**/
export class UpdateScheduleUpdateScheduleParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attribution-actor" })
  attributionActor?: UpdateScheduleUpdateScheduleParametersAttributionActorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timetable" })
  @Type(() => UpdateScheduleUpdateScheduleParametersTimetable)
  timetable?: UpdateScheduleUpdateScheduleParametersTimetable;
}

export class UpdateScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateScheduleUpdateScheduleParameters;
}

export class UpdateScheduleDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// UpdateScheduleScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class UpdateScheduleScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "login" })
  login: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
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
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: UpdateScheduleScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: UpdateScheduleScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
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
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek: UpdateScheduleScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: UpdateScheduleScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}

// UpdateScheduleSchedule
/** 
 * A schedule response
**/
export class UpdateScheduleSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => UpdateScheduleScheduleUser)
  actor: UpdateScheduleScheduleUser;

  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timetable" })
  timetable: any;

  @SpeakeasyMetadata()
  @Expose({ name: "updated-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}

export class UpdateScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: UpdateScheduleSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  updateScheduleDefaultApplicationJSONObject?: UpdateScheduleDefaultApplicationJSON;
}