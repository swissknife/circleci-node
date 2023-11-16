/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListEnvVarsRequest extends SpeakeasyBase {
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class ListEnvVarsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * An environment variable is a map containing a value and an optional timestamp.
 */
export class EnvironmentVariable extends SpeakeasyBase {
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

/**
 * A sequence of environment variables.
 */
export class ListEnvVarsEnvironmentVariableListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: EnvironmentVariable })
    @Expose({ name: "items" })
    @Type(() => EnvironmentVariable)
    items: EnvironmentVariable[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListEnvVarsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A sequence of environment variables.
     */
    @SpeakeasyMetadata()
    environmentVariableListResponse?: ListEnvVarsEnvironmentVariableListResponse;

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
     * Error response.
     */
    @SpeakeasyMetadata()
    object?: ListEnvVarsResponseBody;
}
