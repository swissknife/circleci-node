/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteContextRequest extends SpeakeasyBase {
    /**
     * ID of the context (UUID)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
    contextId: string;
}

/**
 * Error response.
 */
export class DeleteContextDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * message response
 */
export class DeleteContextMessageResponse extends SpeakeasyBase {
    /**
     * A human-readable message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class DeleteContextResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A confirmation message
     */
    @SpeakeasyMetadata()
    messageResponse?: DeleteContextMessageResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    deleteContextDefaultApplicationJSONObject?: DeleteContextDefaultApplicationJSON;
}
