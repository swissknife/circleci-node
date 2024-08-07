/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Error response.
 */
export class GetCollaborationsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class Collaboration extends SpeakeasyBase {
    /**
     * URL to the user's avatar on the VCS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_url" })
    avatarUrl: string;

    /**
     * The UUID of the organization
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the organization
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The slug of the organization
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    /**
     * The VCS provider
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vcs-type" })
    vcsType: string;
}

export class GetCollaborationsResponse extends SpeakeasyBase {
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
     * Collaborations
     */
    @SpeakeasyMetadata({ elemType: Collaboration })
    classes?: Collaboration[];

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    object?: GetCollaborationsResponseBody;
}
