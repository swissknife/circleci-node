import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class CreateSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}
export enum CreateScheduleCreateScheduleParametersAttributionActorEnum {
    Current = "current",
    System = "system"
}
export enum CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum CreateScheduleCreateScheduleParametersTimetable2MonthsEnum {
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

export class CreateScheduleCreateScheduleParametersTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: CreateScheduleCreateScheduleParametersTimetable2MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}
export enum CreateScheduleCreateScheduleParametersTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum CreateScheduleCreateScheduleParametersTimetable1MonthsEnum {
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

export class CreateScheduleCreateScheduleParametersTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek: CreateScheduleCreateScheduleParametersTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: CreateScheduleCreateScheduleParametersTimetable1MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}

// CreateScheduleCreateScheduleParameters
/** 
 * The parameters for a create schedule request
**/
export class CreateScheduleCreateScheduleParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attribution-actor" })
  attributionActor: CreateScheduleCreateScheduleParametersAttributionActorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "timetable" })
  timetable: any;
}

export class CreateScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateScheduleCreateScheduleParameters;
}

export class CreateScheduleDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// CreateScheduleScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class CreateScheduleScheduleUser extends SpeakeasyBase {
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
export enum CreateScheduleScheduleTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum CreateScheduleScheduleTimetable2MonthsEnum {
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

export class CreateScheduleScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: CreateScheduleScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: CreateScheduleScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}
export enum CreateScheduleScheduleTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum CreateScheduleScheduleTimetable1MonthsEnum {
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

export class CreateScheduleScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek: CreateScheduleScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: CreateScheduleScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}

// CreateScheduleSchedule
/** 
 * A schedule response
**/
export class CreateScheduleSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => CreateScheduleScheduleUser)
  actor: CreateScheduleScheduleUser;

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

export class CreateScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: CreateScheduleSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createScheduleDefaultApplicationJSONObject?: CreateScheduleDefaultApplicationJSON;
}