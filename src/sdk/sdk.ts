/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Context } from "./context";
import { Insights } from "./insights";
import { Job } from "./job";
import * as shared from "./models/shared";
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
    security?: shared.Security;
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
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v2";
    sdkVersion = "3.48.3";
    genVersion = "2.75.2";

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
    public job: Job;
    /**
     * Endpoints related to manage oidc identity tokens
     */
    public oidcTokenManagement: OIDCTokenManagement;
    public pipeline: Pipeline;
    /**
     * Endpoints related to managing policies and making policy decisions
     */
    public policyManagement: PolicyManagement;
    public project: Project;
    public schedule: Schedule;
    public user: User;
    public webhook: Webhook;
    public workflow: Workflow;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.context = new Context(this.sdkConfiguration);
        this.insights = new Insights(this.sdkConfiguration);
        this.job = new Job(this.sdkConfiguration);
        this.oidcTokenManagement = new OIDCTokenManagement(this.sdkConfiguration);
        this.pipeline = new Pipeline(this.sdkConfiguration);
        this.policyManagement = new PolicyManagement(this.sdkConfiguration);
        this.project = new Project(this.sdkConfiguration);
        this.schedule = new Schedule(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
        this.workflow = new Workflow(this.sdkConfiguration);
    }
}
