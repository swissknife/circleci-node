/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class User {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Collaborations
     *
     * @remarks
     * Provides the set of organizations of which a user is a member or a collaborator.
     *
     * The set of organizations that a user can collaborate on is composed of:
     *
     * * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
     * * The parent organization of repository that the user can collaborate on, but is not necessarily a member of
     * * The organization of the current user's account
     */
    async getCollaborations(
        config?: AxiosRequestConfig
    ): Promise<operations.GetCollaborationsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/me/collaborations";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCollaborationsResponse = new operations.GetCollaborationsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.collaborations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.collaborations = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCollaborationsCollaboration,
                        resFieldDepth
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getCollaborationsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCollaborationsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * User Information
     *
     * @remarks
     * Provides information about the user that is currently signed in.
     */
    async getCurrentUser(config?: AxiosRequestConfig): Promise<operations.GetCurrentUserResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/me";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCurrentUserResponse = new operations.GetCurrentUserResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.user = utils.objectToClass(httpRes?.data, operations.GetCurrentUserUser);
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getCurrentUserDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCurrentUserDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * User Information
     *
     * @remarks
     * Provides information about the user with the given ID.
     */
    async getUser(
        req: operations.GetUserRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetUserResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/user/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetUserResponse = new operations.GetUserResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.user = utils.objectToClass(httpRes?.data, operations.GetUserUser);
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getUserDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetUserDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
