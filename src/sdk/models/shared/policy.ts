/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class Policy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "created_by" })
    createdBy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
