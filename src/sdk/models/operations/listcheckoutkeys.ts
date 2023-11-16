/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCheckoutKeysRequest extends SpeakeasyBase {
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class ListCheckoutKeysResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
 */
export enum ListCheckoutKeysCheckoutKeyType {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key",
}

/**
 * A checkout key
 */
export class CheckoutKey extends SpeakeasyBase {
    /**
     * The date and time the checkout key was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * An SSH key fingerprint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fingerprint" })
    fingerprint: string;

    /**
     * A boolean value that indicates if this key is preferred.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferred" })
    preferred: boolean;

    /**
     * A public SSH key.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public-key" })
    publicKey: string;

    /**
     * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ListCheckoutKeysCheckoutKeyType;
}

/**
 * A sequence of checkout keys.
 */
export class ListCheckoutKeysCheckoutKeyListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CheckoutKey })
    @Expose({ name: "items" })
    @Type(() => CheckoutKey)
    items: CheckoutKey[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListCheckoutKeysResponse extends SpeakeasyBase {
    /**
     * A sequence of checkout keys.
     */
    @SpeakeasyMetadata()
    checkoutKeyListResponse?: ListCheckoutKeysCheckoutKeyListResponse;

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
    object?: ListCheckoutKeysResponseBody;
}
