/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Events = {
    WorkflowCompleted: "workflow-completed",
    JobCompleted: "job-completed",
} as const;
export type Events = ClosedEnum<typeof Events>;

/**
 * Type of the scope being used
 */
export const CreateWebhookType = {
    Project: "project",
} as const;
/**
 * Type of the scope being used
 */
export type CreateWebhookType = ClosedEnum<typeof CreateWebhookType>;

/**
 * The scope in which the relevant events that will trigger webhooks
 */
export type Scope = {
    /**
     * ID of the scope being used (at the moment, only project ID is supported)
     */
    id: string;
    /**
     * Type of the scope being used
     */
    type: CreateWebhookType;
};

/**
 * The parameters for a create webhook request
 */
export type CreateWebhookRequestBody = {
    /**
     * Events that will trigger the webhook
     */
    events: Array<Events>;
    /**
     * Name of the webhook
     */
    name: string;
    /**
     * The scope in which the relevant events that will trigger webhooks
     */
    scope: Scope;
    /**
     * Secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     */
    signingSecret: string;
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     */
    url: string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     */
    verifyTls: boolean;
};

/**
 * Error response.
 */
export type CreateWebhookResponseBody = {
    message?: string | undefined;
};

export const CreateWebhookEvents = {
    WorkflowCompleted: "workflow-completed",
    JobCompleted: "job-completed",
} as const;
export type CreateWebhookEvents = ClosedEnum<typeof CreateWebhookEvents>;

/**
 * The scope in which the relevant events that will trigger webhooks
 */
export type CreateWebhookScope = {
    /**
     * ID of the scope being used (at the moment, only project ID is supported)
     */
    id: string;
    /**
     * Type of the scope being used
     */
    type: string;
};

/**
 * A webhook
 */
export type CreateWebhookWebhook = {
    /**
     * The date and time the webhook was created.
     */
    createdAt: Date;
    /**
     * Events that will trigger the webhook
     */
    events: Array<CreateWebhookEvents>;
    /**
     * The unique ID of the webhook
     */
    id: string;
    /**
     * Name of the webhook
     */
    name: string;
    /**
     * The scope in which the relevant events that will trigger webhooks
     */
    scope: CreateWebhookScope;
    /**
     * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     */
    signingSecret: string;
    /**
     * The date and time the webhook was last updated.
     */
    updatedAt: Date;
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     */
    url: string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     */
    verifyTls: boolean;
};

export type CreateWebhookResponse = CreateWebhookResponseBody | CreateWebhookWebhook;

/** @internal */
export const Events$inboundSchema: z.ZodNativeEnum<typeof Events> = z.nativeEnum(Events);

/** @internal */
export const Events$outboundSchema: z.ZodNativeEnum<typeof Events> = Events$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Events$ {
    /** @deprecated use `Events$inboundSchema` instead. */
    export const inboundSchema = Events$inboundSchema;
    /** @deprecated use `Events$outboundSchema` instead. */
    export const outboundSchema = Events$outboundSchema;
}

/** @internal */
export const CreateWebhookType$inboundSchema: z.ZodNativeEnum<typeof CreateWebhookType> =
    z.nativeEnum(CreateWebhookType);

/** @internal */
export const CreateWebhookType$outboundSchema: z.ZodNativeEnum<typeof CreateWebhookType> =
    CreateWebhookType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookType$ {
    /** @deprecated use `CreateWebhookType$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookType$inboundSchema;
    /** @deprecated use `CreateWebhookType$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookType$outboundSchema;
}

/** @internal */
export const Scope$inboundSchema: z.ZodType<Scope, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    type: CreateWebhookType$inboundSchema,
});

/** @internal */
export type Scope$Outbound = {
    id: string;
    type: string;
};

/** @internal */
export const Scope$outboundSchema: z.ZodType<Scope$Outbound, z.ZodTypeDef, Scope> = z.object({
    id: z.string(),
    type: CreateWebhookType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope$ {
    /** @deprecated use `Scope$inboundSchema` instead. */
    export const inboundSchema = Scope$inboundSchema;
    /** @deprecated use `Scope$outboundSchema` instead. */
    export const outboundSchema = Scope$outboundSchema;
    /** @deprecated use `Scope$Outbound` instead. */
    export type Outbound = Scope$Outbound;
}

/** @internal */
export const CreateWebhookRequestBody$inboundSchema: z.ZodType<
    CreateWebhookRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        events: z.array(Events$inboundSchema),
        name: z.string(),
        scope: z.lazy(() => Scope$inboundSchema),
        "signing-secret": z.string(),
        url: z.string(),
        "verify-tls": z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            "signing-secret": "signingSecret",
            "verify-tls": "verifyTls",
        });
    });

/** @internal */
export type CreateWebhookRequestBody$Outbound = {
    events: Array<string>;
    name: string;
    scope: Scope$Outbound;
    "signing-secret": string;
    url: string;
    "verify-tls": boolean;
};

/** @internal */
export const CreateWebhookRequestBody$outboundSchema: z.ZodType<
    CreateWebhookRequestBody$Outbound,
    z.ZodTypeDef,
    CreateWebhookRequestBody
> = z
    .object({
        events: z.array(Events$outboundSchema),
        name: z.string(),
        scope: z.lazy(() => Scope$outboundSchema),
        signingSecret: z.string(),
        url: z.string(),
        verifyTls: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            signingSecret: "signing-secret",
            verifyTls: "verify-tls",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequestBody$ {
    /** @deprecated use `CreateWebhookRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookRequestBody$inboundSchema;
    /** @deprecated use `CreateWebhookRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookRequestBody$outboundSchema;
    /** @deprecated use `CreateWebhookRequestBody$Outbound` instead. */
    export type Outbound = CreateWebhookRequestBody$Outbound;
}

/** @internal */
export const CreateWebhookResponseBody$inboundSchema: z.ZodType<
    CreateWebhookResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string().optional(),
});

/** @internal */
export type CreateWebhookResponseBody$Outbound = {
    message?: string | undefined;
};

/** @internal */
export const CreateWebhookResponseBody$outboundSchema: z.ZodType<
    CreateWebhookResponseBody$Outbound,
    z.ZodTypeDef,
    CreateWebhookResponseBody
> = z.object({
    message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookResponseBody$ {
    /** @deprecated use `CreateWebhookResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookResponseBody$inboundSchema;
    /** @deprecated use `CreateWebhookResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookResponseBody$outboundSchema;
    /** @deprecated use `CreateWebhookResponseBody$Outbound` instead. */
    export type Outbound = CreateWebhookResponseBody$Outbound;
}

/** @internal */
export const CreateWebhookEvents$inboundSchema: z.ZodNativeEnum<typeof CreateWebhookEvents> =
    z.nativeEnum(CreateWebhookEvents);

/** @internal */
export const CreateWebhookEvents$outboundSchema: z.ZodNativeEnum<typeof CreateWebhookEvents> =
    CreateWebhookEvents$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookEvents$ {
    /** @deprecated use `CreateWebhookEvents$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookEvents$inboundSchema;
    /** @deprecated use `CreateWebhookEvents$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookEvents$outboundSchema;
}

/** @internal */
export const CreateWebhookScope$inboundSchema: z.ZodType<
    CreateWebhookScope,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    type: z.string(),
});

/** @internal */
export type CreateWebhookScope$Outbound = {
    id: string;
    type: string;
};

/** @internal */
export const CreateWebhookScope$outboundSchema: z.ZodType<
    CreateWebhookScope$Outbound,
    z.ZodTypeDef,
    CreateWebhookScope
> = z.object({
    id: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookScope$ {
    /** @deprecated use `CreateWebhookScope$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookScope$inboundSchema;
    /** @deprecated use `CreateWebhookScope$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookScope$outboundSchema;
    /** @deprecated use `CreateWebhookScope$Outbound` instead. */
    export type Outbound = CreateWebhookScope$Outbound;
}

/** @internal */
export const CreateWebhookWebhook$inboundSchema: z.ZodType<
    CreateWebhookWebhook,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "created-at": z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        events: z.array(CreateWebhookEvents$inboundSchema),
        id: z.string(),
        name: z.string(),
        scope: z.lazy(() => CreateWebhookScope$inboundSchema),
        "signing-secret": z.string(),
        "updated-at": z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        url: z.string(),
        "verify-tls": z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            "created-at": "createdAt",
            "signing-secret": "signingSecret",
            "updated-at": "updatedAt",
            "verify-tls": "verifyTls",
        });
    });

/** @internal */
export type CreateWebhookWebhook$Outbound = {
    "created-at": string;
    events: Array<string>;
    id: string;
    name: string;
    scope: CreateWebhookScope$Outbound;
    "signing-secret": string;
    "updated-at": string;
    url: string;
    "verify-tls": boolean;
};

/** @internal */
export const CreateWebhookWebhook$outboundSchema: z.ZodType<
    CreateWebhookWebhook$Outbound,
    z.ZodTypeDef,
    CreateWebhookWebhook
> = z
    .object({
        createdAt: z.date().transform((v) => v.toISOString()),
        events: z.array(CreateWebhookEvents$outboundSchema),
        id: z.string(),
        name: z.string(),
        scope: z.lazy(() => CreateWebhookScope$outboundSchema),
        signingSecret: z.string(),
        updatedAt: z.date().transform((v) => v.toISOString()),
        url: z.string(),
        verifyTls: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created-at",
            signingSecret: "signing-secret",
            updatedAt: "updated-at",
            verifyTls: "verify-tls",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookWebhook$ {
    /** @deprecated use `CreateWebhookWebhook$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookWebhook$inboundSchema;
    /** @deprecated use `CreateWebhookWebhook$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookWebhook$outboundSchema;
    /** @deprecated use `CreateWebhookWebhook$Outbound` instead. */
    export type Outbound = CreateWebhookWebhook$Outbound;
}

/** @internal */
export const CreateWebhookResponse$inboundSchema: z.ZodType<
    CreateWebhookResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CreateWebhookResponseBody$inboundSchema),
    z.lazy(() => CreateWebhookWebhook$inboundSchema),
]);

/** @internal */
export type CreateWebhookResponse$Outbound =
    | CreateWebhookResponseBody$Outbound
    | CreateWebhookWebhook$Outbound;

/** @internal */
export const CreateWebhookResponse$outboundSchema: z.ZodType<
    CreateWebhookResponse$Outbound,
    z.ZodTypeDef,
    CreateWebhookResponse
> = z.union([
    z.lazy(() => CreateWebhookResponseBody$outboundSchema),
    z.lazy(() => CreateWebhookWebhook$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookResponse$ {
    /** @deprecated use `CreateWebhookResponse$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookResponse$inboundSchema;
    /** @deprecated use `CreateWebhookResponse$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookResponse$outboundSchema;
    /** @deprecated use `CreateWebhookResponse$Outbound` instead. */
    export type Outbound = CreateWebhookResponse$Outbound;
}
