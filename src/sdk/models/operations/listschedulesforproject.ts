import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class ListSchedulesForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class ListSchedulesForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export class ListSchedulesForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSchedulesForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSchedulesForProjectQueryParams;
}

export class ListSchedulesForProjectDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

// ListSchedulesForProject200ApplicationJSONScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class ListSchedulesForProject200ApplicationJSONScheduleUser extends SpeakeasyBase {
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
export enum ListSchedulesForProject200ApplicationJSONScheduleTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum ListSchedulesForProject200ApplicationJSONScheduleTimetable2MonthsEnum {
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

// ListSchedulesForProject200ApplicationJSONScheduleTimetable2
/** 
 * Timetable that specifies when a schedule triggers.
**/
export class ListSchedulesForProject200ApplicationJSONScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek?: ListSchedulesForProject200ApplicationJSONScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: ListSchedulesForProject200ApplicationJSONScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}
export enum ListSchedulesForProject200ApplicationJSONScheduleTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}
export enum ListSchedulesForProject200ApplicationJSONScheduleTimetable1MonthsEnum {
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

// ListSchedulesForProject200ApplicationJSONScheduleTimetable1
/** 
 * Timetable that specifies when a schedule triggers.
**/
export class ListSchedulesForProject200ApplicationJSONScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days-of-week" })
  daysOfWeek: ListSchedulesForProject200ApplicationJSONScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "months" })
  months?: ListSchedulesForProject200ApplicationJSONScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "per-hour" })
  perHour: number;
}

// ListSchedulesForProject200ApplicationJSONSchedule
/** 
 * A schedule response
**/
export class ListSchedulesForProject200ApplicationJSONSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => ListSchedulesForProject200ApplicationJSONScheduleUser)
  actor: ListSchedulesForProject200ApplicationJSONScheduleUser;

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

// ListSchedulesForProject200ApplicationJSON
/** 
 * A sequence of schedules
**/
export class ListSchedulesForProject200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListSchedulesForProject200ApplicationJSONSchedule })
  @Expose({ name: "items" })
  @Type(() => ListSchedulesForProject200ApplicationJSONSchedule)
  items: ListSchedulesForProject200ApplicationJSONSchedule[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListSchedulesForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listSchedulesForProject200ApplicationJSONObject?: ListSchedulesForProject200ApplicationJSON;

  @SpeakeasyMetadata()
  listSchedulesForProjectDefaultApplicationJSONObject?: ListSchedulesForProjectDefaultApplicationJSON;
}