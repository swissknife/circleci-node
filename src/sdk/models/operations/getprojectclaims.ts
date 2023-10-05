/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetProjectClaimsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgID" })
    orgID: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectID" })
    projectID: string;
}

/**
 * Something unexpected happened on the server.
 */
export class GetProjectClaims500ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

/**
 * The user is forbidden from making this request
 *
 * @remarks
 *
 */
export class GetProjectClaims403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

/**
 * The request is malformed (e.g, a given path parameter is invalid)
 *
 * @remarks
 *
 */
export class GetProjectClaims400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class GetProjectClaimsResponse extends SpeakeasyBase {
    /**
     * Claims successfully fetched.
     */
    @SpeakeasyMetadata()
    claimResponse?: shared.ClaimResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    getProjectClaims400ApplicationJSONObject?: GetProjectClaims400ApplicationJSON;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    getProjectClaims403ApplicationJSONObject?: GetProjectClaims403ApplicationJSON;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    getProjectClaims500ApplicationJSONObject?: GetProjectClaims500ApplicationJSON;

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
}
