/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListSchedulesForProjectRequest extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
    pageToken?: string;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class ListSchedulesForProjectDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class ListSchedulesForProject200ApplicationJSONScheduleUser extends SpeakeasyBase {
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
 * A schedule response
 */
export class ListSchedulesForProject200ApplicationJSONSchedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => ListSchedulesForProject200ApplicationJSONScheduleUser)
    actor: ListSchedulesForProject200ApplicationJSONScheduleUser;

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

/**
 * A sequence of schedules
 */
export class ListSchedulesForProject200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ListSchedulesForProject200ApplicationJSONSchedule })
    @Expose({ name: "items" })
    @Type(() => ListSchedulesForProject200ApplicationJSONSchedule)
    items: ListSchedulesForProject200ApplicationJSONSchedule[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListSchedulesForProjectResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
     * A sequence of schedules.
     */
    @SpeakeasyMetadata()
    listSchedulesForProject200ApplicationJSONObject?: ListSchedulesForProject200ApplicationJSON;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    listSchedulesForProjectDefaultApplicationJSONObject?: ListSchedulesForProjectDefaultApplicationJSON;
}
