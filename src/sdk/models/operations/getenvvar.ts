/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetEnvVarRequest extends SpeakeasyBase {
    /**
     * The name of the environment variable.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
    name: string;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class GetEnvVarDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * An environment variable is a map containing a value and an optional timestamp.
 */
export class GetEnvVarEnvironmentVariable extends SpeakeasyBase {
    /**
     * The creation timestamp of the environment variable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created-at" })
    createdAt?: any;

    /**
     * The name of the environment variable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The value of the environment variable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

export class GetEnvVarResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The environment variable.
     */
    @SpeakeasyMetadata()
    environmentVariable?: GetEnvVarEnvironmentVariable;

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
    getEnvVarDefaultApplicationJSONObject?: GetEnvVarDefaultApplicationJSON;
}
