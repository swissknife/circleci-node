/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export class GetContextRequest extends SpeakeasyBase {
    /**
     * ID of the context (UUID)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
    contextId: string;
}

/**
 * Error response.
 */
export class GetContextDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The context
 */
export class GetContextContext extends SpeakeasyBase {
    /**
     * The date and time the context was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The unique ID of the context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The user defined name of the context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class GetContextResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The context
     */
    @SpeakeasyMetadata()
    context?: GetContextContext;

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
    getContextDefaultApplicationJSONObject?: GetContextDefaultApplicationJSON;
}
