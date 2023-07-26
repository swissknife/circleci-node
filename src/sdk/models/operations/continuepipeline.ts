/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ContinuePipelineRequestBody extends SpeakeasyBase {
    /**
     * A configuration string for the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "configuration" })
    configuration: string;

    /**
     * A pipeline continuation key.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "continuation-key" })
    continuationKey: string;

    /**
     * An object containing pipeline parameters and their values.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters?: Record<string, any>;
}

/**
 * Error response.
 */
export class ContinuePipelineDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * message response
 */
export class ContinuePipelineMessageResponse extends SpeakeasyBase {
    /**
     * A human-readable message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class ContinuePipelineResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A confirmation message.
     */
    @SpeakeasyMetadata()
    messageResponse?: ContinuePipelineMessageResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    continuePipelineDefaultApplicationJSONObject?: ContinuePipelineDefaultApplicationJSON;
}
