/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetScheduleByIdRequest extends SpeakeasyBase {
    /**
     * The unique ID of the schedule.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
    scheduleId: string;
}

/**
 * Error response.
 */
export class GetScheduleByIdDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class GetScheduleByIdScheduleUser extends SpeakeasyBase {
    /**
     * The unique ID of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The login information for the user on the VCS.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "login" })
    login: string;

    /**
     * The name of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Day in a week, in three letters format
 */
export enum GetScheduleByIdScheduleTimetable2DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum GetScheduleByIdScheduleTimetable2Months {
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
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class GetScheduleByIdScheduleTimetable2 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek?: GetScheduleByIdScheduleTimetable2DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: GetScheduleByIdScheduleTimetable2Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * Day in a week, in three letters format
 */
export enum GetScheduleByIdScheduleTimetable1DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum GetScheduleByIdScheduleTimetable1Months {
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
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class GetScheduleByIdScheduleTimetable1 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth?: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek: GetScheduleByIdScheduleTimetable1DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: GetScheduleByIdScheduleTimetable1Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * A schedule response
 */
export class GetScheduleByIdSchedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => GetScheduleByIdScheduleUser)
    actor: GetScheduleByIdScheduleUser;

    /**
     * The date and time the pipeline was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Description of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The unique ID of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Pipeline parameters represented as key-value pairs. Must contain branch or tag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters: Record<string, any>;

    /**
     * The project-slug for the schedule
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project-slug" })
    projectSlug: string;

    /**
     * Timetable that specifies when a schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timetable" })
    timetable: any;

    /**
     * The date and time the pipeline was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}

export class GetScheduleByIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A schedule object.
     */
    @SpeakeasyMetadata()
    schedule?: GetScheduleByIdSchedule;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    getScheduleByIdDefaultApplicationJSONObject?: GetScheduleByIdDefaultApplicationJSON;
}
