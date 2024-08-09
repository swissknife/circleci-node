/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BundlePayload = {
    policies?: { [k: string]: string } | undefined;
};

/** @internal */
export const BundlePayload$inboundSchema: z.ZodType<BundlePayload, z.ZodTypeDef, unknown> =
    z.object({
        policies: z.record(z.string()).optional(),
    });

/** @internal */
export type BundlePayload$Outbound = {
    policies?: { [k: string]: string } | undefined;
};

/** @internal */
export const BundlePayload$outboundSchema: z.ZodType<
    BundlePayload$Outbound,
    z.ZodTypeDef,
    BundlePayload
> = z.object({
    policies: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BundlePayload$ {
    /** @deprecated use `BundlePayload$inboundSchema` instead. */
    export const inboundSchema = BundlePayload$inboundSchema;
    /** @deprecated use `BundlePayload$outboundSchema` instead. */
    export const outboundSchema = BundlePayload$outboundSchema;
    /** @deprecated use `BundlePayload$Outbound` instead. */
    export type Outbound = BundlePayload$Outbound;
}
