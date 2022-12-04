import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSchedulesForProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class ListSchedulesForProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}


// ListSchedulesForProject200ApplicationJsonScheduleUser
/** 
 * The attribution actor who will run the scheduled pipeline.
**/
export class ListSchedulesForProject200ApplicationJsonScheduleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum ListSchedulesForProject200ApplicationJsonScheduleTimetable1DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum ListSchedulesForProject200ApplicationJsonScheduleTimetable1MonthsEnum {
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


export class ListSchedulesForProject200ApplicationJsonScheduleTimetable1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth?: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek: ListSchedulesForProject200ApplicationJsonScheduleTimetable1DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: ListSchedulesForProject200ApplicationJsonScheduleTimetable1MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}

export enum ListSchedulesForProject200ApplicationJsonScheduleTimetable2DaysOfWeekEnum {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI"
}

export enum ListSchedulesForProject200ApplicationJsonScheduleTimetable2MonthsEnum {
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


export class ListSchedulesForProject200ApplicationJsonScheduleTimetable2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days-of-month" })
  daysOfMonth: number[];

  @SpeakeasyMetadata({ data: "json, name=days-of-week" })
  daysOfWeek?: ListSchedulesForProject200ApplicationJsonScheduleTimetable2DaysOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=hours-of-day" })
  hoursOfDay: number[];

  @SpeakeasyMetadata({ data: "json, name=months" })
  months?: ListSchedulesForProject200ApplicationJsonScheduleTimetable2MonthsEnum[];

  @SpeakeasyMetadata({ data: "json, name=per-hour" })
  perHour: number;
}


// ListSchedulesForProject200ApplicationJsonSchedule
/** 
 * A schedule response
**/
export class ListSchedulesForProject200ApplicationJsonSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor: ListSchedulesForProject200ApplicationJsonScheduleUser;

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


// ListSchedulesForProject200ApplicationJson
/** 
 * A sequence of schedules
**/
export class ListSchedulesForProject200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListSchedulesForProject200ApplicationJsonSchedule })
  items: ListSchedulesForProject200ApplicationJsonSchedule[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListSchedulesForProjectDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSchedulesForProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSchedulesForProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSchedulesForProjectQueryParams;
}


export class ListSchedulesForProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSchedulesForProject200ApplicationJsonObject?: ListSchedulesForProject200ApplicationJson;

  @SpeakeasyMetadata()
  listSchedulesForProjectDefaultApplicationJsonObject?: ListSchedulesForProjectDefaultApplicationJson;
}
