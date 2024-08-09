/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type CancelJobByJobNumberRequest = {
    /**
     * The number of the job.
     */
    jobNumber?: any | undefined;
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    projectSlug: string;
};

/**
 * Error response.
 */
export type CancelJobByJobNumberResponseBody = {
    message?: string | undefined;
};

/**
 * message response
 */
export type CancelJobByJobNumberMessageResponse = {
    /**
     * A human-readable message
     */
    message: string;
};

export type CancelJobByJobNumberResponse =
    | CancelJobByJobNumberMessageResponse
    | CancelJobByJobNumberResponseBody;

/** @internal */
export const CancelJobByJobNumberRequest$inboundSchema: z.ZodType<
    CancelJobByJobNumberRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "job-number": z.any().optional(),
        "project-slug": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "job-number": "jobNumber",
            "project-slug": "projectSlug",
        });
    });

/** @internal */
export type CancelJobByJobNumberRequest$Outbound = {
    "job-number"?: any | undefined;
    "project-slug": string;
};

/** @internal */
export const CancelJobByJobNumberRequest$outboundSchema: z.ZodType<
    CancelJobByJobNumberRequest$Outbound,
    z.ZodTypeDef,
    CancelJobByJobNumberRequest
> = z
    .object({
        jobNumber: z.any().optional(),
        projectSlug: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            jobNumber: "job-number",
            projectSlug: "project-slug",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelJobByJobNumberRequest$ {
    /** @deprecated use `CancelJobByJobNumberRequest$inboundSchema` instead. */
    export const inboundSchema = CancelJobByJobNumberRequest$inboundSchema;
    /** @deprecated use `CancelJobByJobNumberRequest$outboundSchema` instead. */
    export const outboundSchema = CancelJobByJobNumberRequest$outboundSchema;
    /** @deprecated use `CancelJobByJobNumberRequest$Outbound` instead. */
    export type Outbound = CancelJobByJobNumberRequest$Outbound;
}

/** @internal */
export const CancelJobByJobNumberResponseBody$inboundSchema: z.ZodType<
    CancelJobByJobNumberResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type CancelJobByJobNumberResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const CancelJobByJobNumberResponseBody$outboundSchema: z.ZodType<
    CancelJobByJobNumberResponseBody$Outbound,
    z.ZodTypeDef,
    CancelJobByJobNumberResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelJobByJobNumberResponseBody$ {
    /** @deprecated use `CancelJobByJobNumberResponseBody$inboundSchema` instead. */
    export const inboundSchema = CancelJobByJobNumberResponseBody$inboundSchema;
    /** @deprecated use `CancelJobByJobNumberResponseBody$outboundSchema` instead. */
    export const outboundSchema = CancelJobByJobNumberResponseBody$outboundSchema;
    /** @deprecated use `CancelJobByJobNumberResponseBody$Outbound` instead. */
    export type Outbound = CancelJobByJobNumberResponseBody$Outbound;
}

/** @internal */
export const CancelJobByJobNumberMessageResponse$inboundSchema: z.ZodType<
    CancelJobByJobNumberMessageResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
});

/** @internal */
export type CancelJobByJobNumberMessageResponse$Outbound = {
    message: string;
};

/** @internal */
export const CancelJobByJobNumberMessageResponse$outboundSchema: z.ZodType<
    CancelJobByJobNumberMessageResponse$Outbound,
    z.ZodTypeDef,
    CancelJobByJobNumberMessageResponse
> = z.object({
    message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelJobByJobNumberMessageResponse$ {
    /** @deprecated use `CancelJobByJobNumberMessageResponse$inboundSchema` instead. */
    export const inboundSchema = CancelJobByJobNumberMessageResponse$inboundSchema;
    /** @deprecated use `CancelJobByJobNumberMessageResponse$outboundSchema` instead. */
    export const outboundSchema = CancelJobByJobNumberMessageResponse$outboundSchema;
    /** @deprecated use `CancelJobByJobNumberMessageResponse$Outbound` instead. */
    export type Outbound = CancelJobByJobNumberMessageResponse$Outbound;
}

/** @internal */
export const CancelJobByJobNumberResponse$inboundSchema: z.ZodType<
    CancelJobByJobNumberResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CancelJobByJobNumberMessageResponse$inboundSchema),
    z.lazy(() => CancelJobByJobNumberResponseBody$inboundSchema),
]);

/** @internal */
export type CancelJobByJobNumberResponse$Outbound =
    | CancelJobByJobNumberMessageResponse$Outbound
    | CancelJobByJobNumberResponseBody$Outbound;

/** @internal */
export const CancelJobByJobNumberResponse$outboundSchema: z.ZodType<
    CancelJobByJobNumberResponse$Outbound,
    z.ZodTypeDef,
    CancelJobByJobNumberResponse
> = z.union([
    z.lazy(() => CancelJobByJobNumberMessageResponse$outboundSchema),
    z.lazy(() => CancelJobByJobNumberResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelJobByJobNumberResponse$ {
    /** @deprecated use `CancelJobByJobNumberResponse$inboundSchema` instead. */
    export const inboundSchema = CancelJobByJobNumberResponse$inboundSchema;
    /** @deprecated use `CancelJobByJobNumberResponse$outboundSchema` instead. */
    export const outboundSchema = CancelJobByJobNumberResponse$outboundSchema;
    /** @deprecated use `CancelJobByJobNumberResponse$Outbound` instead. */
    export type Outbound = CancelJobByJobNumberResponse$Outbound;
}
