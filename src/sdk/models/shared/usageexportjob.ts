/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum UsageExportJobState {
    Created = "created",
    Processing = "processing",
    Failed = "failed",
    Completed = "completed",
}

export class UsageExportJob extends SpeakeasyBase {
    /**
     * A list of pre signed urls that the client can use to download the results of a Usage Export.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "download_urls" })
    downloadUrls: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "end" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    end: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "start" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    start: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state: UsageExportJobState;

    @SpeakeasyMetadata()
    @Expose({ name: "usage_export_job_id" })
    usageExportJobId: string;
}
