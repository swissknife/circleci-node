/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteScheduleByIdRequest extends SpeakeasyBase {
    /**
     * The unique ID of the schedule.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule-id" })
    scheduleId: string;
}

/**
 * Error response.
 */
export class DeleteScheduleByIdResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * message response
 */
export class DeleteScheduleByIdMessageResponse extends SpeakeasyBase {
    /**
     * A human-readable message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class DeleteScheduleByIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A confirmation message.
     */
    @SpeakeasyMetadata()
    messageResponse?: DeleteScheduleByIdMessageResponse;

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
    object?: DeleteScheduleByIdResponseBody;
}
