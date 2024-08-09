/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Advanced = {
    /**
     * Except for the default branch, cancel running pipelines on a branch when a new pipeline starts on that branch.
     */
    autocancelBuilds?: boolean | undefined;
    /**
     * Run builds for pull requests from forks.
     */
    buildForkPrs?: boolean | undefined;
    /**
     * Once enabled, we will only build branches that have associated pull requests open.
     */
    buildPrsOnly?: boolean | undefined;
    /**
     * When set to true, job re-runs with SSH debugging access will be disabled for the project.
     */
    disableSsh?: boolean | undefined;
    /**
     * Run builds for forked pull requests with this project's configuration, environment variables, and secrets.
     */
    forksReceiveSecretEnvVars?: boolean | undefined;
    /**
     * Free and Open Source. Enabling this grants additional credits, and lets others see your builds, both through the web UI and the API.
     */
    oss?: boolean | undefined;
    /**
     * This field is used in conjunction with the `build_prs_only`, it allows you to specify a list of branches that will always triger a build. The value passed will overwrite the existing value.
     */
    prOnlyBranchOverrides?: Array<string> | undefined;
    /**
     * Report the status of every pushed commit to GitHub's status API. Updates reported per job.
     */
    setGithubStatus?: boolean | undefined;
    /**
     * Enabling allows you to conditionally trigger configurations outside of the primary `.circleci` parent directory.
     */
    setupWorkflows?: boolean | undefined;
    /**
     * Whether updating these settings requires a user to be an organization administrator. When disabled, updating settings can be done by any member.
     */
    writeSettingsRequiresAdmin?: boolean | undefined;
};

export type ProjectSettings = {
    advanced?: Advanced | undefined;
};

/** @internal */
export const Advanced$inboundSchema: z.ZodType<Advanced, z.ZodTypeDef, unknown> = z
    .object({
        autocancel_builds: z.boolean().optional(),
        build_fork_prs: z.boolean().optional(),
        build_prs_only: z.boolean().optional(),
        disable_ssh: z.boolean().optional(),
        forks_receive_secret_env_vars: z.boolean().optional(),
        oss: z.boolean().optional(),
        pr_only_branch_overrides: z.array(z.string()).optional(),
        set_github_status: z.boolean().optional(),
        setup_workflows: z.boolean().optional(),
        write_settings_requires_admin: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            autocancel_builds: "autocancelBuilds",
            build_fork_prs: "buildForkPrs",
            build_prs_only: "buildPrsOnly",
            disable_ssh: "disableSsh",
            forks_receive_secret_env_vars: "forksReceiveSecretEnvVars",
            pr_only_branch_overrides: "prOnlyBranchOverrides",
            set_github_status: "setGithubStatus",
            setup_workflows: "setupWorkflows",
            write_settings_requires_admin: "writeSettingsRequiresAdmin",
        });
    });

/** @internal */
export type Advanced$Outbound = {
    autocancel_builds?: boolean | undefined;
    build_fork_prs?: boolean | undefined;
    build_prs_only?: boolean | undefined;
    disable_ssh?: boolean | undefined;
    forks_receive_secret_env_vars?: boolean | undefined;
    oss?: boolean | undefined;
    pr_only_branch_overrides?: Array<string> | undefined;
    set_github_status?: boolean | undefined;
    setup_workflows?: boolean | undefined;
    write_settings_requires_admin?: boolean | undefined;
};

/** @internal */
export const Advanced$outboundSchema: z.ZodType<Advanced$Outbound, z.ZodTypeDef, Advanced> = z
    .object({
        autocancelBuilds: z.boolean().optional(),
        buildForkPrs: z.boolean().optional(),
        buildPrsOnly: z.boolean().optional(),
        disableSsh: z.boolean().optional(),
        forksReceiveSecretEnvVars: z.boolean().optional(),
        oss: z.boolean().optional(),
        prOnlyBranchOverrides: z.array(z.string()).optional(),
        setGithubStatus: z.boolean().optional(),
        setupWorkflows: z.boolean().optional(),
        writeSettingsRequiresAdmin: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            autocancelBuilds: "autocancel_builds",
            buildForkPrs: "build_fork_prs",
            buildPrsOnly: "build_prs_only",
            disableSsh: "disable_ssh",
            forksReceiveSecretEnvVars: "forks_receive_secret_env_vars",
            prOnlyBranchOverrides: "pr_only_branch_overrides",
            setGithubStatus: "set_github_status",
            setupWorkflows: "setup_workflows",
            writeSettingsRequiresAdmin: "write_settings_requires_admin",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Advanced$ {
    /** @deprecated use `Advanced$inboundSchema` instead. */
    export const inboundSchema = Advanced$inboundSchema;
    /** @deprecated use `Advanced$outboundSchema` instead. */
    export const outboundSchema = Advanced$outboundSchema;
    /** @deprecated use `Advanced$Outbound` instead. */
    export type Outbound = Advanced$Outbound;
}

/** @internal */
export const ProjectSettings$inboundSchema: z.ZodType<ProjectSettings, z.ZodTypeDef, unknown> =
    z.object({
        advanced: z.lazy(() => Advanced$inboundSchema).optional(),
    });

/** @internal */
export type ProjectSettings$Outbound = {
    advanced?: Advanced$Outbound | undefined;
};

/** @internal */
export const ProjectSettings$outboundSchema: z.ZodType<
    ProjectSettings$Outbound,
    z.ZodTypeDef,
    ProjectSettings
> = z.object({
    advanced: z.lazy(() => Advanced$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectSettings$ {
    /** @deprecated use `ProjectSettings$inboundSchema` instead. */
    export const inboundSchema = ProjectSettings$inboundSchema;
    /** @deprecated use `ProjectSettings$outboundSchema` instead. */
    export const outboundSchema = ProjectSettings$outboundSchema;
    /** @deprecated use `ProjectSettings$Outbound` instead. */
    export type Outbound = ProjectSettings$Outbound;
}
