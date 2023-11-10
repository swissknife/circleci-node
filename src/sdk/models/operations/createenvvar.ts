/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * An environment variable request requires a name and a value
 */
export class CreateEnvVarEnvironmentVariable extends SpeakeasyBase {
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

export class CreateEnvVarRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateEnvVarEnvironmentVariable;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CreateEnvVarResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * An environment variable is a map containing a value and an optional timestamp.
 */
export class CreateEnvVarProjectEnvironmentVariable extends SpeakeasyBase {
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

export class CreateEnvVarResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The environment variable.
     */
    @SpeakeasyMetadata()
    environmentVariable?: CreateEnvVarProjectEnvironmentVariable;

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
    object?: CreateEnvVarResponseBody;
}
