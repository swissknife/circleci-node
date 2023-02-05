import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

// ListSchedulesForProject200ApplicationJSONScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class ListSchedulesForProject200ApplicationJSONScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
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

export class ListSchedulesForProject200ApplicationJSONScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: ListSchedulesForProject200ApplicationJSONScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: ListSchedulesForProject200ApplicationJSONScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
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

export class ListSchedulesForProject200ApplicationJSONScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: ListSchedulesForProject200ApplicationJSONScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: ListSchedulesForProject200ApplicationJSONScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}

// ListSchedulesForProject200ApplicationJSONSchedule
/** 
 * A schedule response
**/
export class ListSchedulesForProject200ApplicationJSONSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: ListSchedulesForProject200ApplicationJSONScheduleUser;

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

// ListSchedulesForProject200ApplicationJSON
/** 
 * A sequence of schedules
**/
export class ListSchedulesForProject200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListSchedulesForProject200ApplicationJSONSchedule })
  items: ListSchedulesForProject200ApplicationJSONSchedule[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class ListSchedulesForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSchedulesForProject200ApplicationJSONObject?: ListSchedulesForProject200ApplicationJSON;

  @SpeakeasyMetadata()
  listSchedulesForProjectDefaultApplicationJSONObject?: ListSchedulesForProjectDefaultApplicationJSON;
}