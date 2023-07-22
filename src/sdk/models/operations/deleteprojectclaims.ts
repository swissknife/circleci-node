/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteProjectClaimsRequest extends SpeakeasyBase {
    /**
     * comma separated list of claims to delete. Valid values are "audience" and "ttl".
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=claims" })
    claims: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgID" })
    orgID: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectID" })
    projectID: string;
}

/**
 * Something unexpected happened on the server.
 */
export class DeleteProjectClaims500ApplicationJSON extends SpeakeasyBase {
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
export class DeleteProjectClaims403ApplicationJSON extends SpeakeasyBase {
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
export class DeleteProjectClaims400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class DeleteProjectClaimsResponse extends SpeakeasyBase {
    /**
     * Claims successfully deleted.
     */
    @SpeakeasyMetadata()
    claimResponse?: shared.ClaimResponse;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    deleteProjectClaims400ApplicationJSONObject?: DeleteProjectClaims400ApplicationJSON;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    deleteProjectClaims403ApplicationJSONObject?: DeleteProjectClaims403ApplicationJSON;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    deleteProjectClaims500ApplicationJSONObject?: DeleteProjectClaims500ApplicationJSON;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
