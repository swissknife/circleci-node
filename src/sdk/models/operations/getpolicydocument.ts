/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetPolicyDocumentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context" })
    context: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownerID" })
    ownerID: string;

    /**
     * the policy name set by the rego policy_name rule
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyName" })
    policyName: string;
}

/**
 * Something unexpected happened on the server.
 */
export class GetPolicyDocumentPolicyManagementResponse500ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

/**
 * There was no policy that was found with the given owner_id and policy name.
 *
 * @remarks
 *
 */
export class GetPolicyDocumentPolicyManagementResponse404ResponseBody extends SpeakeasyBase {
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
export class GetPolicyDocumentPolicyManagementResponseResponseBody extends SpeakeasyBase {
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
export class GetPolicyDocumentPolicyManagementResponseBody extends SpeakeasyBase {
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
export class GetPolicyDocumentResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class GetPolicyDocumentResponse extends SpeakeasyBase {
    /**
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredApplicationJsonObject?: GetPolicyDocumentResponseBody;

    /**
     * The request is unauthorized
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: GetPolicyDocumentPolicyManagementResponseBody;

    /**
     * The user is forbidden from making this request
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: GetPolicyDocumentPolicyManagementResponseResponseBody;

    /**
     * There was no policy that was found with the given owner_id and policy name.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: GetPolicyDocumentPolicyManagementResponse404ResponseBody;

    /**
     * Something unexpected happened on the server.
     */
    @SpeakeasyMetadata()
    fiveHundredApplicationJsonObject?: GetPolicyDocumentPolicyManagementResponse500ResponseBody;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Policy retrieved successfully.
     */
    @SpeakeasyMetadata()
    policy?: shared.Policy;

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
