/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetFlakyTestsRequest extends SpeakeasyBase {
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class GetFlakyTestsInsightsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class FlakyTests extends SpeakeasyBase {
    /**
     * The class the test belongs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "classname" })
    classname: string;

    /**
     * The file the test belongs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file" })
    file: string;

    /**
     * The name of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job-name" })
    jobName: string;

    /**
     * The number of the job.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job-number" })
    jobNumber: number;

    /**
     * The number of the pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pipeline-number" })
    pipelineNumber: number;

    /**
     * The source of the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source: string;

    /**
     * The name of the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "test-name" })
    testName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "time-wasted" })
    timeWasted?: number;

    /**
     * The number of times the test flaked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "times-flaked" })
    timesFlaked: number;

    /**
     * The date and time when workflow was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow-created-at" })
    workflowCreatedAt: string;

    /**
     * The ID of the workflow associated with the provided test counts
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow-id" })
    workflowId: any;

    /**
     * The name of the workflow.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow-name" })
    workflowName: string;
}

/**
 * Flaky tests response
 */
export class GetFlakyTestsResponseBody extends SpeakeasyBase {
    /**
     * A list of all instances of flakes. Note that a test is no longer considered flaky after 2 weeks have passed without a flake. Each flake resets this timer.
     */
    @SpeakeasyMetadata({ elemType: FlakyTests })
    @Expose({ name: "flaky-tests" })
    @Type(() => FlakyTests)
    flakyTests: FlakyTests[];

    /**
     * A count of unique tests that have failed. If your project has N tests that have flaked multiple times each, this will be equal to N.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total-flaky-tests" })
    totalFlakyTests: number;
}

export class GetFlakyTestsResponse extends SpeakeasyBase {
    /**
     * A list of flaky tests for a project
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: GetFlakyTestsResponseBody;

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
     * Error response.
     */
    @SpeakeasyMetadata()
    defaultApplicationJsonObject?: GetFlakyTestsInsightsResponseBody;
}
