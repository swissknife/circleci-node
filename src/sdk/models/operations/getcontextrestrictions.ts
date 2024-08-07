/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
 * Context ID provided is invalid.
 */
export class GetContextRestrictionsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class GetContextRestrictionsResponse extends SpeakeasyBase {
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

    /**
     * Context ID provided is invalid.
     */
    @SpeakeasyMetadata()
    object?: GetContextRestrictionsResponseBody;
}
