/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Context } from "./context";
import { Insights } from "./insights";
import { Job } from "./job";
import { OIDCTokenManagement } from "./oidctokenmanagement";
import { Pipeline } from "./pipeline";
import { PolicyManagement } from "./policymanagement";
import { Project } from "./project";
import { Schedule } from "./schedule";
import { User } from "./user";
import { Webhook } from "./webhook";
import { Workflow } from "./workflow";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://circleci.com/api/v2"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v2";
    sdkVersion = "4.0.4";
    genVersion = "2.189.1";
    userAgent = "speakeasy-sdk/typescript 4.0.4 2.189.1 v2 circleci-v2-sdk";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * CircleCI API: This describes the resources that make up the CircleCI API v2.
 */
export class Circleci {
    public context: Context;
    public insights: Insights;
    public user: User;
    /**
     * Endpoints related to manage oidc identity tokens
     */
    public oidcTokenManagement: OIDCTokenManagement;
    /**
     * Endpoints related to managing policies and making policy decisions
     */
    public policyManagement: PolicyManagement;
    public pipeline: Pipeline;
    public project: Project;
    public job: Job;
    public schedule: Schedule;
    public webhook: Webhook;
    public workflow: Workflow;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.context = new Context(this.sdkConfiguration);
        this.insights = new Insights(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.oidcTokenManagement = new OIDCTokenManagement(this.sdkConfiguration);
        this.policyManagement = new PolicyManagement(this.sdkConfiguration);
        this.pipeline = new Pipeline(this.sdkConfiguration);
        this.project = new Project(this.sdkConfiguration);
        this.job = new Job(this.sdkConfiguration);
        this.schedule = new Schedule(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
        this.workflow = new Workflow(this.sdkConfiguration);
    }
}
