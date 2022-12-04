import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export enum CreateScheduleCreateScheduleParametersAttributionActorEnum {
    Current = "current",
    System = "system"
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
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: CreateScheduleCreateScheduleParametersTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: CreateScheduleCreateScheduleParametersTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
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
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: CreateScheduleCreateScheduleParametersTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: CreateScheduleCreateScheduleParametersTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}


// CreateScheduleCreateScheduleParameters
/** 
 * The parameters for a create schedule request
**/
export class CreateScheduleCreateScheduleParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution-actor" })
  attributionActor: CreateScheduleCreateScheduleParametersAttributionActorEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timetable" })
  timetable: any;
}


// CreateScheduleScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class CreateScheduleScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
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
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: CreateScheduleScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: CreateScheduleScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
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
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: CreateScheduleScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: CreateScheduleScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}


// CreateScheduleSchedule
/** 
 * A schedule response
**/
export class CreateScheduleSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: CreateScheduleScheduleUser;

  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=project-slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "json, name=timetable" })
  timetable: any;

  @SpeakeasyMetadata({ data: "json, name=updated-at" })
  updatedAt: Date;
}


export class CreateScheduleDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateScheduleCreateScheduleParameters;
}


export class CreateScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: CreateScheduleSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createScheduleDefaultApplicationJsonObject?: CreateScheduleDefaultApplicationJson;
}
