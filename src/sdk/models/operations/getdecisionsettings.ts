/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
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
export class GetDecisionSettingsPolicyManagementResponse500ResponseBody extends SpeakeasyBase {
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
export class GetDecisionSettingsPolicyManagementResponseResponseBody extends SpeakeasyBase {
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
export class GetDecisionSettingsPolicyManagementResponseBody extends SpeakeasyBase {
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
export class GetDecisionSettingsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class GetDecisionSettingsResponse extends SpeakeasyBase {
    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredApplicationJsonObject?: GetDecisionSettingsResponseBody;

    /**
     * The request is unauthorized
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: GetDecisionSettingsPolicyManagementResponseBody;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: GetDecisionSettingsPolicyManagementResponseResponseBody;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    fiveHundredApplicationJsonObject?: GetDecisionSettingsPolicyManagementResponse500ResponseBody;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Decision settings successfully retrieved.
     */
    @SpeakeasyMetadata()
    decisionSettings?: shared.DecisionSettings;

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
