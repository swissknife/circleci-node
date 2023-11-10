/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetDecisionLogPolicyBundleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context" })
    context: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=decisionID" })
    decisionID: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownerID" })
    ownerID: string;
}

/**
 * Something unexpected happened on the server.
 */
export class GetDecisionLogPolicyBundlePolicyManagementResponse500ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

/**
 * There was no decision log found for given decision_id, and owner_id.
 *
 * @remarks
 *
 */
export class GetDecisionLogPolicyBundlePolicyManagementResponse404ResponseBody extends SpeakeasyBase {
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
export class GetDecisionLogPolicyBundlePolicyManagementResponseResponseBody extends SpeakeasyBase {
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
export class GetDecisionLogPolicyBundlePolicyManagementResponseBody extends SpeakeasyBase {
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
export class GetDecisionLogPolicyBundleResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class GetDecisionLogPolicyBundleResponse extends SpeakeasyBase {
    /**
     * Policy-Bundle retrieved successfully for given decision log ID
     */
    @SpeakeasyMetadata({ elemType: shared.Policy, elemDepth: 2 })
    twoHundredApplicationJsonPolicyBundle?: Record<string, shared.Policy[]>;

    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredApplicationJsonObject?: GetDecisionLogPolicyBundleResponseBody;

    /**
     * The request is unauthorized
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: GetDecisionLogPolicyBundlePolicyManagementResponseBody;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: GetDecisionLogPolicyBundlePolicyManagementResponseResponseBody;

    /**
     * There was no decision log found for given decision_id, and owner_id.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: GetDecisionLogPolicyBundlePolicyManagementResponse404ResponseBody;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    fiveHundredApplicationJsonObject?: GetDecisionLogPolicyBundlePolicyManagementResponse500ResponseBody;

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
    rawResponse?: AxiosResponse;
}
