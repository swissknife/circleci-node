/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Endpoints related to manage oidc identity tokens
 */

export class OIDCTokenManagement {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete org-level claims
     *
     * @remarks
     * Deletes org-level custom claims of OIDC identity tokens
     */
    async deleteOrgClaims(
        req: operations.DeleteOrgClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/oidc-custom-claims",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteOrgClaimsResponse = new operations.DeleteOrgClaimsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteOrgClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteOrgClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteOrgClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete project-level claims
     *
     * @remarks
     * Deletes project-level custom claims of OIDC identity tokens
     */
    async deleteProjectClaims(
        req: operations.DeleteProjectClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteProjectClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProjectClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/project/{projectID}/oidc-custom-claims",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteProjectClaimsResponse =
            new operations.DeleteProjectClaimsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteProjectClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteProjectClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteProjectClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get org-level claims
     *
     * @remarks
     * Fetches org-level custom claims of OIDC identity tokens
     */
    async getOrgClaims(
        req: operations.GetOrgClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/oidc-custom-claims",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetOrgClaimsResponse = new operations.GetOrgClaimsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetOrgClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetOrgClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetOrgClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get project-level claims
     *
     * @remarks
     * Fetches project-level custom claims of OIDC identity tokens
     */
    async getProjectClaims(
        req: operations.GetProjectClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetProjectClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProjectClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/project/{projectID}/oidc-custom-claims",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetProjectClaimsResponse = new operations.GetProjectClaimsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetProjectClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetProjectClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetProjectClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Patch org-level claims
     *
     * @remarks
     * Creates/Updates org-level custom claims of OIDC identity tokens
     */
    async patchOrgClaims(
        req: operations.PatchOrgClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchOrgClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchOrgClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/oidc-custom-claims",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "patchClaimsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PatchOrgClaimsResponse = new operations.PatchOrgClaimsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchOrgClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchOrgClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchOrgClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Patch project-level claims
     *
     * @remarks
     * Creates/Updates project-level custom claims of OIDC identity tokens
     */
    async patchProjectClaims(
        req: operations.PatchProjectClaimsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchProjectClaimsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchProjectClaimsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/org/{orgID}/project/{projectID}/oidc-custom-claims",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "patchClaimsRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PatchProjectClaimsResponse =
            new operations.PatchProjectClaimsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.claimResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ClaimResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchProjectClaimsResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fourHundredAndThreeApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchProjectClaimsOIDCTokenManagementResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.fiveHundredApplicationJsonObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.PatchProjectClaimsOIDCTokenManagementResponseResponseBody
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
