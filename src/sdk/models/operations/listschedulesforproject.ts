/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class ListSchedulesForProjectScheduleResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class ListSchedulesForProjectUser extends SpeakeasyBase {
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
export class Schedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => ListSchedulesForProjectUser)
    actor: ListSchedulesForProjectUser;

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
export class ListSchedulesForProjectResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Schedule })
    @Expose({ name: "items" })
    @Type(() => Schedule)
    items: Schedule[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListSchedulesForProjectResponse extends SpeakeasyBase {
    /**
     * A sequence of schedules.
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: ListSchedulesForProjectResponseBody;

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
    rawResponse: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    defaultApplicationJsonObject?: ListSchedulesForProjectScheduleResponseBody;
}
