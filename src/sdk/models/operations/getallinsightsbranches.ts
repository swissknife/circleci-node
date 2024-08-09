/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type GetAllInsightsBranchesRequest = {
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings).
     */
    projectSlug: string;
    /**
     * The name of a workflow. If not passed we will scope the API call to the project.
     */
    workflowName?: string | undefined;
};

/**
 * Error response.
 */
export type GetAllInsightsBranchesInsightsResponseBody = {
    message?: string | undefined;
};

/**
 * Project branches response.
 */
export type GetAllInsightsBranchesResponseBody = {
    /**
     * A list of all the branches for a given project.
     */
    branches: Array<string>;
    /**
     * The unique ID of the organization
     */
    orgId?: any | undefined;
    /**
     * The unique ID of the project
     */
    projectId?: any | undefined;
};

export type GetAllInsightsBranchesResponse =
    | GetAllInsightsBranchesInsightsResponseBody
    | GetAllInsightsBranchesResponseBody;

/** @internal */
export const GetAllInsightsBranchesRequest$inboundSchema: z.ZodType<
    GetAllInsightsBranchesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "project-slug": z.string(),
        "workflow-name": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "project-slug": "projectSlug",
            "workflow-name": "workflowName",
        });
    });

/** @internal */
export type GetAllInsightsBranchesRequest$Outbound = {
    "project-slug": string;
    "workflow-name"?: string | undefined;
};

/** @internal */
export const GetAllInsightsBranchesRequest$outboundSchema: z.ZodType<
    GetAllInsightsBranchesRequest$Outbound,
    z.ZodTypeDef,
    GetAllInsightsBranchesRequest
> = z
    .object({
        projectSlug: z.string(),
        workflowName: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            projectSlug: "project-slug",
            workflowName: "workflow-name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllInsightsBranchesRequest$ {
    /** @deprecated use `GetAllInsightsBranchesRequest$inboundSchema` instead. */
    export const inboundSchema = GetAllInsightsBranchesRequest$inboundSchema;
    /** @deprecated use `GetAllInsightsBranchesRequest$outboundSchema` instead. */
    export const outboundSchema = GetAllInsightsBranchesRequest$outboundSchema;
    /** @deprecated use `GetAllInsightsBranchesRequest$Outbound` instead. */
    export type Outbound = GetAllInsightsBranchesRequest$Outbound;
}

/** @internal */
export const GetAllInsightsBranchesInsightsResponseBody$inboundSchema: z.ZodType<
    GetAllInsightsBranchesInsightsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type GetAllInsightsBranchesInsightsResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const GetAllInsightsBranchesInsightsResponseBody$outboundSchema: z.ZodType<
    GetAllInsightsBranchesInsightsResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllInsightsBranchesInsightsResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllInsightsBranchesInsightsResponseBody$ {
    /** @deprecated use `GetAllInsightsBranchesInsightsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllInsightsBranchesInsightsResponseBody$inboundSchema;
    /** @deprecated use `GetAllInsightsBranchesInsightsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllInsightsBranchesInsightsResponseBody$outboundSchema;
    /** @deprecated use `GetAllInsightsBranchesInsightsResponseBody$Outbound` instead. */
    export type Outbound = GetAllInsightsBranchesInsightsResponseBody$Outbound;
}

/** @internal */
export const GetAllInsightsBranchesResponseBody$inboundSchema: z.ZodType<
    GetAllInsightsBranchesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        branches: z.array(z.string()),
        org_id: z.any().optional(),
        project_id: z.any().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            org_id: "orgId",
            project_id: "projectId",
        });
    });

/** @internal */
export type GetAllInsightsBranchesResponseBody$Outbound = {
    branches: Array<string>;
    org_id?: any | undefined;
    project_id?: any | undefined;
};

/** @internal */
export const GetAllInsightsBranchesResponseBody$outboundSchema: z.ZodType<
    GetAllInsightsBranchesResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllInsightsBranchesResponseBody
> = z
    .object({
        branches: z.array(z.string()),
        orgId: z.any().optional(),
        projectId: z.any().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            orgId: "org_id",
            projectId: "project_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllInsightsBranchesResponseBody$ {
    /** @deprecated use `GetAllInsightsBranchesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllInsightsBranchesResponseBody$inboundSchema;
    /** @deprecated use `GetAllInsightsBranchesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllInsightsBranchesResponseBody$outboundSchema;
    /** @deprecated use `GetAllInsightsBranchesResponseBody$Outbound` instead. */
    export type Outbound = GetAllInsightsBranchesResponseBody$Outbound;
}

/** @internal */
export const GetAllInsightsBranchesResponse$inboundSchema: z.ZodType<
    GetAllInsightsBranchesResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetAllInsightsBranchesInsightsResponseBody$inboundSchema),
    z.lazy(() => GetAllInsightsBranchesResponseBody$inboundSchema),
]);

/** @internal */
export type GetAllInsightsBranchesResponse$Outbound =
    | GetAllInsightsBranchesInsightsResponseBody$Outbound
    | GetAllInsightsBranchesResponseBody$Outbound;

/** @internal */
export const GetAllInsightsBranchesResponse$outboundSchema: z.ZodType<
    GetAllInsightsBranchesResponse$Outbound,
    z.ZodTypeDef,
    GetAllInsightsBranchesResponse
> = z.union([
    z.lazy(() => GetAllInsightsBranchesInsightsResponseBody$outboundSchema),
    z.lazy(() => GetAllInsightsBranchesResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllInsightsBranchesResponse$ {
    /** @deprecated use `GetAllInsightsBranchesResponse$inboundSchema` instead. */
    export const inboundSchema = GetAllInsightsBranchesResponse$inboundSchema;
    /** @deprecated use `GetAllInsightsBranchesResponse$outboundSchema` instead. */
    export const outboundSchema = GetAllInsightsBranchesResponse$outboundSchema;
    /** @deprecated use `GetAllInsightsBranchesResponse$Outbound` instead. */
    export type Outbound = GetAllInsightsBranchesResponse$Outbound;
}
