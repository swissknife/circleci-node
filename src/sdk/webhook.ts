/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhookCreateWebhook } from "../funcs/webhookCreateWebhook.js";
import { webhookDeleteWebhook } from "../funcs/webhookDeleteWebhook.js";
import { webhookGetWebhookById } from "../funcs/webhookGetWebhookById.js";
import { webhookGetWebhooks } from "../funcs/webhookGetWebhooks.js";
import { webhookUpdateWebhook } from "../funcs/webhookUpdateWebhook.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Webhook extends ClientSDK {
    /**
     * Create an outbound webhook
     *
     * @remarks
     * Creates an outbound webhook.
     */
    async createWebhook(
        request?: operations.CreateWebhookRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateWebhookResponse> {
        return unwrapAsync(webhookCreateWebhook(this, request, options));
    }

    /**
     * Delete an outbound webhook
     *
     * @remarks
     * Deletes an outbound webhook
     */
    async deleteWebhook(
        request: operations.DeleteWebhookRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteWebhookResponse> {
        return unwrapAsync(webhookDeleteWebhook(this, request, options));
    }

    /**
     * Get a webhook
     *
     * @remarks
     * Get an outbound webhook by id.
     */
    async getWebhookById(
        request: operations.GetWebhookByIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetWebhookByIdResponse> {
        return unwrapAsync(webhookGetWebhookById(this, request, options));
    }

    /**
     * List webhooks
     *
     * @remarks
     * Get a list of outbound webhooks that match the given scope-type and scope-id
     */
    async getWebhooks(
        request: operations.GetWebhooksRequest,
        options?: RequestOptions
    ): Promise<operations.GetWebhooksResponse> {
        return unwrapAsync(webhookGetWebhooks(this, request, options));
    }

    /**
     * Update an outbound webhook
     *
     * @remarks
     * Updates an outbound webhook.
     */
    async updateWebhook(
        request: operations.UpdateWebhookRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateWebhookResponse> {
        return unwrapAsync(webhookUpdateWebhook(this, request, options));
    }
}
