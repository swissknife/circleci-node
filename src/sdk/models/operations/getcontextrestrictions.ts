/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetContextRestrictionsRequest extends SpeakeasyBase {
    /**
     * An opaque identifier of a context.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context_id" })
    contextId: string;
}

/**
 * Internal server error.
 */
export class GetContextRestrictionsContextResponse500ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * API rate limits exceeded.
 */
export class GetContextRestrictionsContextResponse429ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Entity not found.
 */
export class GetContextRestrictionsContextResponseResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Credentials provided are invalid.
 */
export class GetContextRestrictionsContextResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Context ID provided is invalid.
 */
export class GetContextRestrictionsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class GetContextRestrictionsResponse extends SpeakeasyBase {
    /**
     * Context ID provided is invalid.
     */
    @SpeakeasyMetadata()
    fourHundredApplicationJsonObject?: GetContextRestrictionsResponseBody;

    /**
     * Credentials provided are invalid.
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: GetContextRestrictionsContextResponseBody;

    /**
     * Entity not found.
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: GetContextRestrictionsContextResponseResponseBody;

    /**
     * API rate limits exceeded.
     */
    @SpeakeasyMetadata()
    fourHundredAndTwentyNineApplicationJsonObject?: GetContextRestrictionsContextResponse429ResponseBody;

    /**
     * Internal server error.
     */
    @SpeakeasyMetadata()
    fiveHundredApplicationJsonObject?: GetContextRestrictionsContextResponse500ResponseBody;

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
     * Successful response.
     */
    @SpeakeasyMetadata()
    contextProjectRestrictionsList?: shared.ContextProjectRestrictionsList;
}
