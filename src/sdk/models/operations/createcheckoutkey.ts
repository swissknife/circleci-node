/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

/**
 * The type of checkout key to create. This may be either `deploy-key` or `user-key`.
 */
export enum CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType {
    UserKey = "user-key",
    DeployKey = "deploy-key",
}

export class CreateCheckoutKeyCheckoutKeyInput extends SpeakeasyBase {
    /**
     * The type of checkout key to create. This may be either `deploy-key` or `user-key`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputType;
}

export class CreateCheckoutKeyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateCheckoutKeyCheckoutKeyInput;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CreateCheckoutKeyDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
 */
export enum CreateCheckoutKeyCheckoutKeyCheckoutKeyType {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key",
}

/**
 * A checkout key
 */
export class CreateCheckoutKeyCheckoutKey extends SpeakeasyBase {
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
    type: CreateCheckoutKeyCheckoutKeyCheckoutKeyType;
}

export class CreateCheckoutKeyResponse extends SpeakeasyBase {
    /**
     * The checkout key.
     */
    @SpeakeasyMetadata()
    checkoutKey?: CreateCheckoutKeyCheckoutKey;

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
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    createCheckoutKeyDefaultApplicationJSONObject?: CreateCheckoutKeyDefaultApplicationJSON;
}
