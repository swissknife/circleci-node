/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTestsRequest extends SpeakeasyBase {
    /**
     * The number of the job.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
    jobNumber: any;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class GetTestsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class GetTestsItems extends SpeakeasyBase {
    /**
     * The programmatic location of the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "classname" })
    classname: string;

    /**
     * The file in which the test is defined.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file" })
    file: string;

    /**
     * The failure message associated with the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * The name of the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Indication of whether the test succeeded.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "result" })
    result: string;

    /**
     * The time it took to run the test in seconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "run_time" })
    runTime: number;

    /**
     * The program that generated the test results
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source: string;
}

/**
 * A paginated list of test results.
 */
export class GetTestsTestsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetTestsItems })
    @Expose({ name: "items" })
    @Type(() => GetTestsItems)
    items: GetTestsItems[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class GetTestsResponse extends SpeakeasyBase {
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
     * A paginated list of test results.
     */
    @SpeakeasyMetadata()
    testsResponse?: GetTestsTestsResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    object?: GetTestsResponseBody;
}
