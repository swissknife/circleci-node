/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Endpoints related to managing policies and making policy decisions
 */
export class PolicyManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Creates policy bundle for the context
     *
     * @remarks
     * This endpoint replaces the current policy bundle with the provided policy bundle
     */
    async createPolicyBundle(
        req: operations.CreatePolicyBundleRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreatePolicyBundleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreatePolicyBundleRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/policy-bundle",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "bundlePayload", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.7, application/json;q=0.5, application/json;q=0.3, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreatePolicyBundleResponse =
            new operations.CreatePolicyBundleResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [200, 201].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.bundleDiff = utils.objectToClass(httpRes?.data, shared.BundleDiff);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createPolicyBundle400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreatePolicyBundle400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createPolicyBundle401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreatePolicyBundle401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createPolicyBundle403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreatePolicyBundle403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 413:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createPolicyBundle413ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreatePolicyBundle413ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createPolicyBundle500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreatePolicyBundle500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieves the owner's decision audit log by given decisionID
     *
     * @remarks
     * This endpoint will retrieve a decision for a given decision log ID
     */
    async getDecisionLog(
        req: operations.GetDecisionLogRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDecisionLogResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDecisionLogRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision/{decisionID}",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.7, application/json;q=0.5, application/json;q=0.3, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetDecisionLogResponse = new operations.GetDecisionLogResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.decisionLog = utils.objectToClass(httpRes?.data, shared.DecisionLog);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLog400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLog400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLog401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLog401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLog403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLog403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLog404ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLog404ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLog500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLog500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieves Policy Bundle for a given decision log ID
     *
     * @remarks
     * This endpoint will retrieve a policy bundle for a given decision log ID
     */
    async getDecisionLogPolicyBundle(
        req: operations.GetDecisionLogPolicyBundleRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDecisionLogPolicyBundleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDecisionLogPolicyBundleRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision/{decisionID}/policy-bundle",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.7, application/json;q=0.5, application/json;q=0.3, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetDecisionLogPolicyBundleResponse =
            new operations.GetDecisionLogPolicyBundleResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.policyBundle = utils.objectToClass(httpRes?.data);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogPolicyBundle400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogPolicyBundle400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogPolicyBundle401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogPolicyBundle401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogPolicyBundle403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogPolicyBundle403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogPolicyBundle404ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogPolicyBundle404ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogPolicyBundle500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogPolicyBundle500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieves the owner's decision audit logs.
     *
     * @remarks
     * This endpoint will return a list of decision audit logs that were made using this owner's policies.
     */
    async getDecisionLogs(
        req: operations.GetDecisionLogsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDecisionLogsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDecisionLogsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.6, application/json;q=0.4, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetDecisionLogsResponse = new operations.GetDecisionLogsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.decisionLogs = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.decisionLogs = utils.objectToClass(
                        httpRes?.data,
                        shared.DecisionLog,
                        resFieldDepth
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogs400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogs400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogs401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogs401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogs403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogs403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionLogs500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionLogs500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get the decision settings
     *
     * @remarks
     * This endpoint retrieves the current decision settings (eg enable/disable policy evaluation)
     */
    async getDecisionSettings(
        req: operations.GetDecisionSettingsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDecisionSettingsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDecisionSettingsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision/settings",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.6, application/json;q=0.4, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetDecisionSettingsResponse =
            new operations.GetDecisionSettingsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.decisionSettings = utils.objectToClass(
                        httpRes?.data,
                        shared.DecisionSettings
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionSettings400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionSettings400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionSettings401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionSettings401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionSettings403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionSettings403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDecisionSettings500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDecisionSettings500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieves Policy Bundle
     *
     * @remarks
     * This endpoint will retrieve a policy bundle
     */
    async getPolicyBundle(
        req: operations.GetPolicyBundleRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPolicyBundleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPolicyBundleRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/policy-bundle",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.6, application/json;q=0.4, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetPolicyBundleResponse = new operations.GetPolicyBundleResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.policyBundle = utils.objectToClass(httpRes?.data);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyBundle400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyBundle400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyBundle401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyBundle401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyBundle403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyBundle403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyBundle500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyBundle500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Retrieves a policy document
     *
     * @remarks
     * This endpoint will retrieve a policy document.
     */
    async getPolicyDocument(
        req: operations.GetPolicyDocumentRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetPolicyDocumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPolicyDocumentRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/policy-bundle/{policyName}",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.7, application/json;q=0.5, application/json;q=0.3, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetPolicyDocumentResponse = new operations.GetPolicyDocumentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.policy = utils.objectToClass(httpRes?.data, shared.Policy);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyDocument400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyDocument400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyDocument401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyDocument401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyDocument403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyDocument403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyDocument404ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyDocument404ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getPolicyDocument500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetPolicyDocument500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Makes a decision
     *
     * @remarks
     * This endpoint will evaluate input data (config+metadata) against owner's stored policies and return a decision.
     */
    async makeDecision(
        req: operations.MakeDecisionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.MakeDecisionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MakeDecisionRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.5, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.MakeDecisionResponse = new operations.MakeDecisionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.decision = utils.objectToClass(httpRes?.data, shared.Decision);
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.makeDecision400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.MakeDecision400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.makeDecision401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.MakeDecision401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.makeDecision500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.MakeDecision500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Set the decision settings
     *
     * @remarks
     * This endpoint allows modifying decision settings (eg enable/disable policy evaluation)
     */
    async setDecisionSettings(
        req: operations.SetDecisionSettingsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.SetDecisionSettingsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SetDecisionSettingsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/owner/{ownerID}/context/{context}/decision/settings",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "decisionSettings", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.6, application/json;q=0.4, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SetDecisionSettingsResponse =
            new operations.SetDecisionSettingsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.decisionSettings = utils.objectToClass(
                        httpRes?.data,
                        shared.DecisionSettings
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.setDecisionSettings400ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.SetDecisionSettings400ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.setDecisionSettings401ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.SetDecisionSettings401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.setDecisionSettings403ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.SetDecisionSettings403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.setDecisionSettings500ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.SetDecisionSettings500ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
