/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The attribution-actor of the scheduled pipeline.
 */
export enum AttributionActor {
    Current = "current",
    System = "system",
}

/**
 * The parameters for a create schedule request
 */
export class CreateScheduleCreateScheduleParameters extends SpeakeasyBase {
    /**
     * The attribution-actor of the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attribution-actor" })
    attributionActor: AttributionActor;

    /**
     * Description of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

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
     * Timetable that specifies when a schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timetable" })
    timetable: any;
}

export class CreateScheduleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateScheduleCreateScheduleParameters;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CreateScheduleResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class User extends SpeakeasyBase {
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
export class CreateScheduleSchedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => User)
    actor: User;

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

export class CreateScheduleResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A schedule object.
     */
    @SpeakeasyMetadata()
    schedule?: CreateScheduleSchedule;

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
    object?: CreateScheduleResponseBody;
}
