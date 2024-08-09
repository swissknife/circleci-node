/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type ListMyPipelinesRequest = {
    /**
     * A token to retrieve the next page of results.
     */
    pageToken?: string | undefined;
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    projectSlug: string;
};

/**
 * Error response.
 */
export type ListMyPipelinesResponseBody = {
    message?: string | undefined;
};

/**
 * The type of error.
 */
export const ListMyPipelinesType = {
    Config: "config",
    ConfigFetch: "config-fetch",
    Timeout: "timeout",
    Permission: "permission",
    Other: "other",
    TriggerRule: "trigger-rule",
    Plan: "plan",
} as const;
/**
 * The type of error.
 */
export type ListMyPipelinesType = ClosedEnum<typeof ListMyPipelinesType>;

/**
 * An error with a type and message.
 */
export type ListMyPipelinesErrors = {
    /**
     * A human-readable error message.
     */
    message: string;
    /**
     * The type of error.
     */
    type: ListMyPipelinesType;
};

/**
 * The current state of the pipeline.
 */
export const ListMyPipelinesState = {
    Created: "created",
    Errored: "errored",
    SetupPending: "setup-pending",
    Setup: "setup",
    Pending: "pending",
} as const;
/**
 * The current state of the pipeline.
 */
export type ListMyPipelinesState = ClosedEnum<typeof ListMyPipelinesState>;

/**
 * The user who triggered the Pipeline.
 */
export type ListMyPipelinesActor = {
    /**
     * URL to the user's avatar on the VCS
     */
    avatarUrl: string;
    /**
     * The login information for the user on the VCS.
     */
    login: string;
};

/**
 * The type of trigger.
 */
export const ListMyPipelinesPipelineType = {
    ScheduledPipeline: "scheduled_pipeline",
    Explicit: "explicit",
    Api: "api",
    Webhook: "webhook",
} as const;
/**
 * The type of trigger.
 */
export type ListMyPipelinesPipelineType = ClosedEnum<typeof ListMyPipelinesPipelineType>;

/**
 * A summary of the trigger.
 */
export type ListMyPipelinesTrigger = {
    /**
     * The user who triggered the Pipeline.
     */
    actor: ListMyPipelinesActor;
    /**
     * The date and time the trigger was received.
     */
    receivedAt: Date;
    /**
     * The type of trigger.
     */
    type: ListMyPipelinesPipelineType;
};

export type ListMyPipelines4 = {};

export type ListMyPipelinesTriggerParameters = ListMyPipelines4 | string | number | boolean;

/**
 * The latest commit in the pipeline.
 */
export type ListMyPipelinesCommit = {
    /**
     * The body of the commit message.
     */
    body: string;
    /**
     * The subject of the commit message.
     */
    subject: string;
};

/**
 * VCS information for the pipeline.
 */
export type ListMyPipelinesVcs = {
    /**
     * The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     */
    branch?: string | undefined;
    /**
     * The latest commit in the pipeline.
     */
    commit?: ListMyPipelinesCommit | undefined;
    /**
     * URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
     */
    originRepositoryUrl: string;
    /**
     * Name of the VCS provider (e.g. GitHub, Bitbucket).
     */
    providerName: string;
    /**
     * The code review id.
     */
    reviewId?: string | undefined;
    /**
     * The code review URL.
     */
    reviewUrl?: string | undefined;
    /**
     * The code revision the pipeline ran.
     */
    revision: string;
    /**
     * The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     */
    tag?: string | undefined;
    /**
     * URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
     */
    targetRepositoryUrl: string;
};

/**
 * A pipeline response.
 */
export type ListMyPipelinesPipeline = {
    /**
     * The date and time the pipeline was created.
     */
    createdAt: Date;
    /**
     * A sequence of errors that have occurred within the pipeline.
     */
    errors: Array<ListMyPipelinesErrors>;
    /**
     * The unique ID of the pipeline.
     */
    id: string;
    /**
     * The number of the pipeline.
     */
    number: number;
    /**
     * The project-slug for the pipeline.
     */
    projectSlug: string;
    /**
     * The current state of the pipeline.
     */
    state: ListMyPipelinesState;
    /**
     * A summary of the trigger.
     */
    trigger: ListMyPipelinesTrigger;
    triggerParameters?: { [k: string]: ListMyPipelines4 | string | number | boolean } | undefined;
    /**
     * The date and time the pipeline was last updated.
     */
    updatedAt?: Date | undefined;
    /**
     * VCS information for the pipeline.
     */
    vcs?: ListMyPipelinesVcs | undefined;
};

/**
 * List of pipelines
 */
export type ListMyPipelinesPipelineListResponse = {
    items: Array<ListMyPipelinesPipeline>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    nextPageToken: string;
};

export type ListMyPipelinesResponse =
    | ListMyPipelinesResponseBody
    | ListMyPipelinesPipelineListResponse;

/** @internal */
export const ListMyPipelinesRequest$inboundSchema: z.ZodType<
    ListMyPipelinesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "page-token": z.string().optional(),
        "project-slug": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "page-token": "pageToken",
            "project-slug": "projectSlug",
        });
    });

/** @internal */
export type ListMyPipelinesRequest$Outbound = {
    "page-token"?: string | undefined;
    "project-slug": string;
};

/** @internal */
export const ListMyPipelinesRequest$outboundSchema: z.ZodType<
    ListMyPipelinesRequest$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesRequest
> = z
    .object({
        pageToken: z.string().optional(),
        projectSlug: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            pageToken: "page-token",
            projectSlug: "project-slug",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesRequest$ {
    /** @deprecated use `ListMyPipelinesRequest$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesRequest$inboundSchema;
    /** @deprecated use `ListMyPipelinesRequest$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesRequest$outboundSchema;
    /** @deprecated use `ListMyPipelinesRequest$Outbound` instead. */
    export type Outbound = ListMyPipelinesRequest$Outbound;
}

/** @internal */
export const ListMyPipelinesResponseBody$inboundSchema: z.ZodType<
    ListMyPipelinesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type ListMyPipelinesResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const ListMyPipelinesResponseBody$outboundSchema: z.ZodType<
    ListMyPipelinesResponseBody$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesResponseBody$ {
    /** @deprecated use `ListMyPipelinesResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesResponseBody$inboundSchema;
    /** @deprecated use `ListMyPipelinesResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesResponseBody$outboundSchema;
    /** @deprecated use `ListMyPipelinesResponseBody$Outbound` instead. */
    export type Outbound = ListMyPipelinesResponseBody$Outbound;
}

/** @internal */
export const ListMyPipelinesType$inboundSchema: z.ZodNativeEnum<typeof ListMyPipelinesType> =
    z.nativeEnum(ListMyPipelinesType);

/** @internal */
export const ListMyPipelinesType$outboundSchema: z.ZodNativeEnum<typeof ListMyPipelinesType> =
    ListMyPipelinesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesType$ {
    /** @deprecated use `ListMyPipelinesType$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesType$inboundSchema;
    /** @deprecated use `ListMyPipelinesType$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesType$outboundSchema;
}

/** @internal */
export const ListMyPipelinesErrors$inboundSchema: z.ZodType<
    ListMyPipelinesErrors,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    type: ListMyPipelinesType$inboundSchema,
});

/** @internal */
export type ListMyPipelinesErrors$Outbound = {
    message: string;
    type: string;
};

/** @internal */
export const ListMyPipelinesErrors$outboundSchema: z.ZodType<
    ListMyPipelinesErrors$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesErrors
> = z.object({
    message: z.string(),
    type: ListMyPipelinesType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesErrors$ {
    /** @deprecated use `ListMyPipelinesErrors$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesErrors$inboundSchema;
    /** @deprecated use `ListMyPipelinesErrors$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesErrors$outboundSchema;
    /** @deprecated use `ListMyPipelinesErrors$Outbound` instead. */
    export type Outbound = ListMyPipelinesErrors$Outbound;
}

/** @internal */
export const ListMyPipelinesState$inboundSchema: z.ZodNativeEnum<typeof ListMyPipelinesState> =
    z.nativeEnum(ListMyPipelinesState);

/** @internal */
export const ListMyPipelinesState$outboundSchema: z.ZodNativeEnum<typeof ListMyPipelinesState> =
    ListMyPipelinesState$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesState$ {
    /** @deprecated use `ListMyPipelinesState$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesState$inboundSchema;
    /** @deprecated use `ListMyPipelinesState$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesState$outboundSchema;
}

/** @internal */
export const ListMyPipelinesActor$inboundSchema: z.ZodType<
    ListMyPipelinesActor,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        avatar_url: z.string(),
        login: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            avatar_url: "avatarUrl",
        });
    });

/** @internal */
export type ListMyPipelinesActor$Outbound = {
    avatar_url: string;
    login: string;
};

/** @internal */
export const ListMyPipelinesActor$outboundSchema: z.ZodType<
    ListMyPipelinesActor$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesActor
> = z
    .object({
        avatarUrl: z.string(),
        login: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            avatarUrl: "avatar_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesActor$ {
    /** @deprecated use `ListMyPipelinesActor$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesActor$inboundSchema;
    /** @deprecated use `ListMyPipelinesActor$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesActor$outboundSchema;
    /** @deprecated use `ListMyPipelinesActor$Outbound` instead. */
    export type Outbound = ListMyPipelinesActor$Outbound;
}

/** @internal */
export const ListMyPipelinesPipelineType$inboundSchema: z.ZodNativeEnum<
    typeof ListMyPipelinesPipelineType
> = z.nativeEnum(ListMyPipelinesPipelineType);

/** @internal */
export const ListMyPipelinesPipelineType$outboundSchema: z.ZodNativeEnum<
    typeof ListMyPipelinesPipelineType
> = ListMyPipelinesPipelineType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesPipelineType$ {
    /** @deprecated use `ListMyPipelinesPipelineType$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesPipelineType$inboundSchema;
    /** @deprecated use `ListMyPipelinesPipelineType$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesPipelineType$outboundSchema;
}

/** @internal */
export const ListMyPipelinesTrigger$inboundSchema: z.ZodType<
    ListMyPipelinesTrigger,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        actor: z.lazy(() => ListMyPipelinesActor$inboundSchema),
        received_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        type: ListMyPipelinesPipelineType$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            received_at: "receivedAt",
        });
    });

/** @internal */
export type ListMyPipelinesTrigger$Outbound = {
    actor: ListMyPipelinesActor$Outbound;
    received_at: string;
    type: string;
};

/** @internal */
export const ListMyPipelinesTrigger$outboundSchema: z.ZodType<
    ListMyPipelinesTrigger$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesTrigger
> = z
    .object({
        actor: z.lazy(() => ListMyPipelinesActor$outboundSchema),
        receivedAt: z.date().transform((v) => v.toISOString()),
        type: ListMyPipelinesPipelineType$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            receivedAt: "received_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesTrigger$ {
    /** @deprecated use `ListMyPipelinesTrigger$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesTrigger$inboundSchema;
    /** @deprecated use `ListMyPipelinesTrigger$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesTrigger$outboundSchema;
    /** @deprecated use `ListMyPipelinesTrigger$Outbound` instead. */
    export type Outbound = ListMyPipelinesTrigger$Outbound;
}

/** @internal */
export const ListMyPipelines4$inboundSchema: z.ZodType<ListMyPipelines4, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type ListMyPipelines4$Outbound = {};

/** @internal */
export const ListMyPipelines4$outboundSchema: z.ZodType<
    ListMyPipelines4$Outbound,
    z.ZodTypeDef,
    ListMyPipelines4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelines4$ {
    /** @deprecated use `ListMyPipelines4$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelines4$inboundSchema;
    /** @deprecated use `ListMyPipelines4$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelines4$outboundSchema;
    /** @deprecated use `ListMyPipelines4$Outbound` instead. */
    export type Outbound = ListMyPipelines4$Outbound;
}

/** @internal */
export const ListMyPipelinesTriggerParameters$inboundSchema: z.ZodType<
    ListMyPipelinesTriggerParameters,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ListMyPipelines4$inboundSchema),
    z.string(),
    z.number().int(),
    z.boolean(),
]);

/** @internal */
export type ListMyPipelinesTriggerParameters$Outbound =
    | ListMyPipelines4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const ListMyPipelinesTriggerParameters$outboundSchema: z.ZodType<
    ListMyPipelinesTriggerParameters$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesTriggerParameters
> = z.union([
    z.lazy(() => ListMyPipelines4$outboundSchema),
    z.string(),
    z.number().int(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesTriggerParameters$ {
    /** @deprecated use `ListMyPipelinesTriggerParameters$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesTriggerParameters$inboundSchema;
    /** @deprecated use `ListMyPipelinesTriggerParameters$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesTriggerParameters$outboundSchema;
    /** @deprecated use `ListMyPipelinesTriggerParameters$Outbound` instead. */
    export type Outbound = ListMyPipelinesTriggerParameters$Outbound;
}

/** @internal */
export const ListMyPipelinesCommit$inboundSchema: z.ZodType<
    ListMyPipelinesCommit,
    z.ZodTypeDef,
    unknown
> = z.object({
    body: z.string(),
    subject: z.string(),
});

/** @internal */
export type ListMyPipelinesCommit$Outbound = {
    body: string;
    subject: string;
};

/** @internal */
export const ListMyPipelinesCommit$outboundSchema: z.ZodType<
    ListMyPipelinesCommit$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesCommit
> = z.object({
    body: z.string(),
    subject: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesCommit$ {
    /** @deprecated use `ListMyPipelinesCommit$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesCommit$inboundSchema;
    /** @deprecated use `ListMyPipelinesCommit$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesCommit$outboundSchema;
    /** @deprecated use `ListMyPipelinesCommit$Outbound` instead. */
    export type Outbound = ListMyPipelinesCommit$Outbound;
}

/** @internal */
export const ListMyPipelinesVcs$inboundSchema: z.ZodType<
    ListMyPipelinesVcs,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        branch: z.string().optional(),
        commit: z.lazy(() => ListMyPipelinesCommit$inboundSchema).optional(),
        origin_repository_url: z.string(),
        provider_name: z.string(),
        review_id: z.string().optional(),
        review_url: z.string().optional(),
        revision: z.string(),
        tag: z.string().optional(),
        target_repository_url: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            origin_repository_url: "originRepositoryUrl",
            provider_name: "providerName",
            review_id: "reviewId",
            review_url: "reviewUrl",
            target_repository_url: "targetRepositoryUrl",
        });
    });

/** @internal */
export type ListMyPipelinesVcs$Outbound = {
    branch?: string | undefined;
    commit?: ListMyPipelinesCommit$Outbound | undefined;
    origin_repository_url: string;
    provider_name: string;
    review_id?: string | undefined;
    review_url?: string | undefined;
    revision: string;
    tag?: string | undefined;
    target_repository_url: string;
};

/** @internal */
export const ListMyPipelinesVcs$outboundSchema: z.ZodType<
    ListMyPipelinesVcs$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesVcs
> = z
    .object({
        branch: z.string().optional(),
        commit: z.lazy(() => ListMyPipelinesCommit$outboundSchema).optional(),
        originRepositoryUrl: z.string(),
        providerName: z.string(),
        reviewId: z.string().optional(),
        reviewUrl: z.string().optional(),
        revision: z.string(),
        tag: z.string().optional(),
        targetRepositoryUrl: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            originRepositoryUrl: "origin_repository_url",
            providerName: "provider_name",
            reviewId: "review_id",
            reviewUrl: "review_url",
            targetRepositoryUrl: "target_repository_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesVcs$ {
    /** @deprecated use `ListMyPipelinesVcs$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesVcs$inboundSchema;
    /** @deprecated use `ListMyPipelinesVcs$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesVcs$outboundSchema;
    /** @deprecated use `ListMyPipelinesVcs$Outbound` instead. */
    export type Outbound = ListMyPipelinesVcs$Outbound;
}

/** @internal */
export const ListMyPipelinesPipeline$inboundSchema: z.ZodType<
    ListMyPipelinesPipeline,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        errors: z.array(z.lazy(() => ListMyPipelinesErrors$inboundSchema)),
        id: z.string(),
        number: z.number().int(),
        project_slug: z.string(),
        state: ListMyPipelinesState$inboundSchema,
        trigger: z.lazy(() => ListMyPipelinesTrigger$inboundSchema),
        trigger_parameters: z
            .record(
                z.union([
                    z.lazy(() => ListMyPipelines4$inboundSchema),
                    z.string(),
                    z.number().int(),
                    z.boolean(),
                ])
            )
            .optional(),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        vcs: z.lazy(() => ListMyPipelinesVcs$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            project_slug: "projectSlug",
            trigger_parameters: "triggerParameters",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type ListMyPipelinesPipeline$Outbound = {
    created_at: string;
    errors: Array<ListMyPipelinesErrors$Outbound>;
    id: string;
    number: number;
    project_slug: string;
    state: string;
    trigger: ListMyPipelinesTrigger$Outbound;
    trigger_parameters?:
        | { [k: string]: ListMyPipelines4$Outbound | string | number | boolean }
        | undefined;
    updated_at?: string | undefined;
    vcs?: ListMyPipelinesVcs$Outbound | undefined;
};

/** @internal */
export const ListMyPipelinesPipeline$outboundSchema: z.ZodType<
    ListMyPipelinesPipeline$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesPipeline
> = z
    .object({
        createdAt: z.date().transform((v) => v.toISOString()),
        errors: z.array(z.lazy(() => ListMyPipelinesErrors$outboundSchema)),
        id: z.string(),
        number: z.number().int(),
        projectSlug: z.string(),
        state: ListMyPipelinesState$outboundSchema,
        trigger: z.lazy(() => ListMyPipelinesTrigger$outboundSchema),
        triggerParameters: z
            .record(
                z.union([
                    z.lazy(() => ListMyPipelines4$outboundSchema),
                    z.string(),
                    z.number().int(),
                    z.boolean(),
                ])
            )
            .optional(),
        updatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        vcs: z.lazy(() => ListMyPipelinesVcs$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            projectSlug: "project_slug",
            triggerParameters: "trigger_parameters",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesPipeline$ {
    /** @deprecated use `ListMyPipelinesPipeline$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesPipeline$inboundSchema;
    /** @deprecated use `ListMyPipelinesPipeline$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesPipeline$outboundSchema;
    /** @deprecated use `ListMyPipelinesPipeline$Outbound` instead. */
    export type Outbound = ListMyPipelinesPipeline$Outbound;
}

/** @internal */
export const ListMyPipelinesPipelineListResponse$inboundSchema: z.ZodType<
    ListMyPipelinesPipelineListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        items: z.array(z.lazy(() => ListMyPipelinesPipeline$inboundSchema)),
        next_page_token: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            next_page_token: "nextPageToken",
        });
    });

/** @internal */
export type ListMyPipelinesPipelineListResponse$Outbound = {
    items: Array<ListMyPipelinesPipeline$Outbound>;
    next_page_token: string;
};

/** @internal */
export const ListMyPipelinesPipelineListResponse$outboundSchema: z.ZodType<
    ListMyPipelinesPipelineListResponse$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesPipelineListResponse
> = z
    .object({
        items: z.array(z.lazy(() => ListMyPipelinesPipeline$outboundSchema)),
        nextPageToken: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            nextPageToken: "next_page_token",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesPipelineListResponse$ {
    /** @deprecated use `ListMyPipelinesPipelineListResponse$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesPipelineListResponse$inboundSchema;
    /** @deprecated use `ListMyPipelinesPipelineListResponse$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesPipelineListResponse$outboundSchema;
    /** @deprecated use `ListMyPipelinesPipelineListResponse$Outbound` instead. */
    export type Outbound = ListMyPipelinesPipelineListResponse$Outbound;
}

/** @internal */
export const ListMyPipelinesResponse$inboundSchema: z.ZodType<
    ListMyPipelinesResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ListMyPipelinesResponseBody$inboundSchema),
    z.lazy(() => ListMyPipelinesPipelineListResponse$inboundSchema),
]);

/** @internal */
export type ListMyPipelinesResponse$Outbound =
    | ListMyPipelinesResponseBody$Outbound
    | ListMyPipelinesPipelineListResponse$Outbound;

/** @internal */
export const ListMyPipelinesResponse$outboundSchema: z.ZodType<
    ListMyPipelinesResponse$Outbound,
    z.ZodTypeDef,
    ListMyPipelinesResponse
> = z.union([
    z.lazy(() => ListMyPipelinesResponseBody$outboundSchema),
    z.lazy(() => ListMyPipelinesPipelineListResponse$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyPipelinesResponse$ {
    /** @deprecated use `ListMyPipelinesResponse$inboundSchema` instead. */
    export const inboundSchema = ListMyPipelinesResponse$inboundSchema;
    /** @deprecated use `ListMyPipelinesResponse$outboundSchema` instead. */
    export const outboundSchema = ListMyPipelinesResponse$outboundSchema;
    /** @deprecated use `ListMyPipelinesResponse$Outbound` instead. */
    export type Outbound = ListMyPipelinesResponse$Outbound;
}
