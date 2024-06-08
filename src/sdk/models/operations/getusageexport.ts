/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetUsageExportRequest extends SpeakeasyBase {
    /**
     * An opaque identifier of an organization.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * An opaque identifier of a usage export job.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=usage_export_job_id" })
    usageExportJobId: string;
}

/**
 * Unexpected request body provided.
 */
export class GetUsageExportResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class GetUsageExportResponse extends SpeakeasyBase {
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
     * Usage export fetched successfully
     */
    @SpeakeasyMetadata()
    getUsageExportJobStatus?: shared.GetUsageExportJobStatus;

    /**
     * Unexpected request body provided.
     */
    @SpeakeasyMetadata()
    object?: GetUsageExportResponseBody;
}
