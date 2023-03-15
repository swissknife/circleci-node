import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Pipeline {
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
   * continuePipeline - Continue a pipeline
   *
   * Continue a pipeline from the setup phase.
   **/
  continuePipeline(
    req: operations.ContinuePipelineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContinuePipelineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContinuePipelineRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pipeline/continue";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ContinuePipelineResponse =
        new operations.ContinuePipelineResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ContinuePipelineMessageResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.continuePipelineDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ContinuePipelineDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getPipelineById - Get a pipeline by ID
   *
   * Returns a pipeline by the pipeline ID.
   **/
  getPipelineById(
    req: operations.GetPipelineByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}",
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
      const res: operations.GetPipelineByIdResponse =
        new operations.GetPipelineByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipeline = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetPipelineByIdPipeline
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPipelineByIdDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetPipelineByIdDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getPipelineByNumber - Get a pipeline by pipeline number
   *
   * Returns a pipeline by the pipeline number.
   **/
  getPipelineByNumber(
    req: operations.GetPipelineByNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineByNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineByNumberRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline/{pipeline-number}",
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
      const res: operations.GetPipelineByNumberResponse =
        new operations.GetPipelineByNumberResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipeline = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetPipelineByNumberPipeline
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPipelineByNumberDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetPipelineByNumberDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getPipelineConfigById - Get a pipeline's configuration
   *
   * Returns a pipeline's configuration by ID.
   **/
  getPipelineConfigById(
    req: operations.GetPipelineConfigByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineConfigByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineConfigByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}/config",
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
      const res: operations.GetPipelineConfigByIdResponse =
        new operations.GetPipelineConfigByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipelineConfig = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetPipelineConfigByIdPipelineConfig
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPipelineConfigByIdDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetPipelineConfigByIdDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listMyPipelines - Get your pipelines
   *
   * Returns a sequence of all pipelines for this project triggered by the user.
   **/
  listMyPipelines(
    req: operations.ListMyPipelinesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMyPipelinesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMyPipelinesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline/mine",
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
      const res: operations.ListMyPipelinesResponse =
        new operations.ListMyPipelinesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipelineListResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListMyPipelinesPipelineListResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listMyPipelinesDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListMyPipelinesDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listPipelines - Get a list of pipelines
   *
   * Returns all pipelines for the most recently built projects (max 250) you follow in an organization.
   **/
  listPipelines(
    req: operations.ListPipelinesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPipelinesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPipelinesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pipeline";

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
      const res: operations.ListPipelinesResponse =
        new operations.ListPipelinesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipelineListResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListPipelinesPipelineListResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listPipelinesDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListPipelinesDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listPipelinesForProject - Get all pipelines
   *
   * Returns all pipelines for this project.
   **/
  listPipelinesForProject(
    req: operations.ListPipelinesForProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPipelinesForProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPipelinesForProjectRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline",
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
      const res: operations.ListPipelinesForProjectResponse =
        new operations.ListPipelinesForProjectResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipelineListResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListPipelinesForProjectPipelineListResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listPipelinesForProjectDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListPipelinesForProjectDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listWorkflowsByPipelineId - Get a pipeline's workflows
   *
   * Returns a paginated list of workflows by pipeline ID.
   **/
  listWorkflowsByPipelineId(
    req: operations.ListWorkflowsByPipelineIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkflowsByPipelineIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkflowsByPipelineIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}/workflow",
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
      const res: operations.ListWorkflowsByPipelineIdResponse =
        new operations.ListWorkflowsByPipelineIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.workflowListResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListWorkflowsByPipelineIdWorkflowListResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listWorkflowsByPipelineIdDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListWorkflowsByPipelineIdDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * triggerPipeline - Trigger a new pipeline
   *
   * Triggers a new pipeline on the project.
   **/
  triggerPipeline(
    req: operations.TriggerPipelineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TriggerPipelineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TriggerPipelineRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.TriggerPipelineResponse =
        new operations.TriggerPipelineResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pipelineCreation = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.TriggerPipelinePipelineCreation
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.triggerPipelineDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.TriggerPipelineDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
