import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Insights {
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
   * getAllInsightsBranches - Get all branches for a project
   *
   * Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.
   **/
  getAllInsightsBranches(
    req: operations.GetAllInsightsBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllInsightsBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllInsightsBranchesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/branches",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetAllInsightsBranchesResponse =
        new operations.GetAllInsightsBranchesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllInsightsBranches200ApplicationJSONAny = httpRes?.data;
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAllInsightsBranchesDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetAllInsightsBranchesDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getFlakyTests - Get flaky tests for a project
   *
   * Get a list of flaky tests for a given project. Flaky tests are branch agnostic.
   *              A flaky test is a test that passed and failed in the same commit.
   **/
  getFlakyTests(
    req: operations.GetFlakyTestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFlakyTestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFlakyTestsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/flaky-tests",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetFlakyTestsResponse =
        new operations.GetFlakyTestsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getFlakyTests200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetFlakyTests200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getFlakyTestsDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetFlakyTestsDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getJobTimeseries - Job timeseries data
   *
   * Get timeseries data for all jobs within a workflow.
   **/
  getJobTimeseries(
    req: operations.GetJobTimeseriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobTimeseriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobTimeseriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/time-series/{project-slug}/workflows/{workflow-name}/jobs",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetJobTimeseriesResponse =
        new operations.GetJobTimeseriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getJobTimeseries200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetJobTimeseries200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getJobTimeseriesDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetJobTimeseriesDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getOrgSummaryData - Get summary metrics with trends for the entire org, and for each project.
   *
   * Gets aggregated summary metrics with trends for the entire org.
   *               Also gets aggregated metrics and trends for each project belonging to the org.
   **/
  getOrgSummaryData(
    req: operations.GetOrgSummaryDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrgSummaryDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrgSummaryDataRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{org-slug}/summary",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrgSummaryDataResponse =
        new operations.GetOrgSummaryDataResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrgSummaryData200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrgSummaryData200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrgSummaryDataDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetOrgSummaryDataDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProjectWorkflowJobMetrics - Get summary metrics for a project workflow's jobs.
   *
   * Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   **/
  getProjectWorkflowJobMetrics(
    req: operations.GetProjectWorkflowJobMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectWorkflowJobMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectWorkflowJobMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/workflows/{workflow-name}/jobs",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProjectWorkflowJobMetricsResponse =
        new operations.GetProjectWorkflowJobMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowJobMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowJobMetrics200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowJobMetricsDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowJobMetricsDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProjectWorkflowMetrics - Get summary metrics for a project's workflows
   *
   * Get summary metrics for a project's workflows. Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   **/
  getProjectWorkflowMetrics(
    req: operations.GetProjectWorkflowMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectWorkflowMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectWorkflowMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/workflows",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProjectWorkflowMetricsResponse =
        new operations.GetProjectWorkflowMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowMetrics200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowMetricsDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowMetricsDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProjectWorkflowRuns - Get recent runs of a workflow
   *
   * Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting. The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   **/
  getProjectWorkflowRuns(
    req: operations.GetProjectWorkflowRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectWorkflowRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectWorkflowRunsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/workflows/{workflow-name}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProjectWorkflowRunsResponse =
        new operations.GetProjectWorkflowRunsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowRuns200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowRuns200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowRunsDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowRunsDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProjectWorkflowTestMetrics - Get test metrics for a project's workflows
   *
   * Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.
   **/
  getProjectWorkflowTestMetrics(
    req: operations.GetProjectWorkflowTestMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectWorkflowTestMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectWorkflowTestMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/workflows/{workflow-name}/test-metrics",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProjectWorkflowTestMetricsResponse =
        new operations.GetProjectWorkflowTestMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowTestMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowTestMetrics200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowTestMetricsDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowTestMetricsDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getProjectWorkflowsPageData - Get summary metrics and trends for a project across it's workflows and branches
   *
   * Get summary metrics and trends for a project at workflow and branch level.
   *              Workflow runs going back at most 90 days are included in the aggregation window.
   *              Trends are only supported upto last 30 days.
   *              Metrics are refreshed daily, and thus may not include executions from the last 24 hours.
   *              Please note that Insights is not a real time financial reporting tool and should not be used for credit reporting.
   *              The most up to date credit information can be found in Plan Overview in the CircleCI UI.
   **/
  getProjectWorkflowsPageData(
    req: operations.GetProjectWorkflowsPageDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectWorkflowsPageDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectWorkflowsPageDataRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/pages/{project-slug}/summary",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProjectWorkflowsPageDataResponse =
        new operations.GetProjectWorkflowsPageDataResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowsPageData200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowsPageData200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProjectWorkflowsPageDataDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectWorkflowsPageDataDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getWorkflowSummary - Get metrics and trends for workflows
   *
   * Get the metrics and trends for a particular workflow on a single branch or all branches
   **/
  getWorkflowSummary(
    req: operations.GetWorkflowSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkflowSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkflowSummaryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/insights/{project-slug}/workflows/{workflow-name}/summary",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetWorkflowSummaryResponse =
        new operations.GetWorkflowSummaryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWorkflowSummary200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWorkflowSummary200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWorkflowSummaryDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWorkflowSummaryDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
