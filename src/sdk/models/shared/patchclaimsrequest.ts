/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PatchClaimsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "audience" })
    audience?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "ttl" })
    ttl?: string;
}
