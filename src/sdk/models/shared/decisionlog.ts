/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Decision } from "./decision";
import { Expose, Transform, Type } from "class-transformer";

export class DecisionLogMetadataVcs extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "branch" })
    branch?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origin_repository_url" })
    originRepositoryUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "release_tag" })
    releaseTag?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "target_repository_url" })
    targetRepositoryUrl?: string;
}

export class DecisionLogMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "build_number" })
    buildNumber?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ssh_rerun" })
    sshRerun?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "vcs" })
    @Type(() => DecisionLogMetadataVcs)
    vcs?: DecisionLogMetadataVcs;
}

export class DecisionLog extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "decision" })
    @Type(() => Decision)
    decision?: Decision;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => DecisionLogMetadata)
    metadata?: DecisionLogMetadata;

    /**
     * policy-name-to-hash-map
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policies" })
    policies?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "time_taken_ms" })
    timeTakenMs?: number;
}
