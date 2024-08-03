/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreatePolicyBundleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bundlePayload?: shared.BundlePayload;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context" })
    context: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dry" })
    dry?: boolean;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownerID" })
    ownerID: string;
}

/**
 * The request exceeds the maximum payload size for policy bundles ~2.5Mib
 *
 * @remarks
 *
 */
export class CreatePolicyBundlePolicyManagementResponse413ResponseBody extends SpeakeasyBase {
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
export class CreatePolicyBundleResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;
}

export class CreatePolicyBundleResponse extends SpeakeasyBase {
    /**
     * Policy-Bundle diff successfully returned.
     */
    @SpeakeasyMetadata()
    bundleDiff?: shared.BundleDiff;

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
     * The request is malformed (e.g, a given path parameter is invalid)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    object?: CreatePolicyBundleResponseBody;

    /**
     * The request exceeds the maximum payload size for policy bundles ~2.5Mib
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    object1?: CreatePolicyBundlePolicyManagementResponse413ResponseBody;
}
