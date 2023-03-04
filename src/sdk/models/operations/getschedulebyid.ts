import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetScheduleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
  scheduleId: string;
}

export class GetScheduleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScheduleByIdPathParams;
}

export class GetScheduleByIdDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// GetScheduleByIdScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class GetScheduleByIdScheduleUser extends SpeakeasyBase {
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
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: GetScheduleByIdScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: GetScheduleByIdScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
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
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek: GetScheduleByIdScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: GetScheduleByIdScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}

// GetScheduleByIdSchedule
/** 
 * A schedule response
**/
export class GetScheduleByIdSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => GetScheduleByIdScheduleUser)
  actor: GetScheduleByIdScheduleUser;

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

export class GetScheduleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedule?: GetScheduleByIdSchedule;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getScheduleByIdDefaultApplicationJSONObject?: GetScheduleByIdDefaultApplicationJSON;
}