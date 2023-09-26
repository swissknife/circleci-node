/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CancelJobRequest extends SpeakeasyBase {
    /**
     * The number of the job.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
    jobNumber: any;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CancelJobDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * message response
 */
export class CancelJobMessageResponse extends SpeakeasyBase {
    /**
     * A human-readable message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class CancelJobResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    messageResponse?: CancelJobMessageResponse;

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

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    cancelJobDefaultApplicationJSONObject?: CancelJobDefaultApplicationJSON;
}
