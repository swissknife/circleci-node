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
export class GetScheduleByIdResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class GetScheduleByIdUser extends SpeakeasyBase {
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
export class GetScheduleByIdSchedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => GetScheduleByIdUser)
    actor: GetScheduleByIdUser;

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
    object?: GetScheduleByIdResponseBody;
}
