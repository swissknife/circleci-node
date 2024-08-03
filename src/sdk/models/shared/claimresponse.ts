/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ClaimResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audience" })
    audience?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "audience_updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    audienceUpdatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "org_id" })
    orgId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ttl" })
    ttl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ttl_updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    ttlUpdatedAt?: Date;
}
