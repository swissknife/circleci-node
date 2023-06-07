/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetDecisionSettingsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context" })
    context: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownerID" })
    ownerID: string;
}

/**
 * Something unexpected happened on the server.
 */
export class GetDecisionSettings500ApplicationJSON extends SpeakeasyBase {
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
export class GetDecisionSettings403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

/**
 * The request is unauthorized
 *
 * @remarks
 *
 */
export class GetDecisionSettings401ApplicationJSON extends SpeakeasyBase {
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
export class GetDecisionSettings400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class GetDecisionSettingsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Decision settings successfully retrieved.
     */
    @SpeakeasyMetadata()
    decisionSettings?: shared.DecisionSettings;

    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    getDecisionSettings400ApplicationJSONObject?: GetDecisionSettings400ApplicationJSON;

    /**
     * The request is unauthorized
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    getDecisionSettings401ApplicationJSONObject?: GetDecisionSettings401ApplicationJSON;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    getDecisionSettings403ApplicationJSONObject?: GetDecisionSettings403ApplicationJSON;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    getDecisionSettings500ApplicationJSONObject?: GetDecisionSettings500ApplicationJSON;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}