/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemeBasicAuth = {
    password: string;
    username: string;
};

/** @internal */
export const SchemeBasicAuth$inboundSchema: z.ZodType<SchemeBasicAuth, z.ZodTypeDef, unknown> =
    z.object({
        password: z.string(),
        username: z.string(),
    });

/** @internal */
export type SchemeBasicAuth$Outbound = {
    password: string;
    username: string;
};

/** @internal */
export const SchemeBasicAuth$outboundSchema: z.ZodType<
    SchemeBasicAuth$Outbound,
    z.ZodTypeDef,
    SchemeBasicAuth
> = z.object({
    password: z.string(),
    username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemeBasicAuth$ {
    /** @deprecated use `SchemeBasicAuth$inboundSchema` instead. */
    export const inboundSchema = SchemeBasicAuth$inboundSchema;
    /** @deprecated use `SchemeBasicAuth$outboundSchema` instead. */
    export const outboundSchema = SchemeBasicAuth$outboundSchema;
    /** @deprecated use `SchemeBasicAuth$Outbound` instead. */
    export type Outbound = SchemeBasicAuth$Outbound;
}
