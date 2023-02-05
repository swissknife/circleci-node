import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Pipeline {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
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
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ContinuePipelineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.messageResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.continuePipelineDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/pipeline/{pipeline-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPipelineByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipeline = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPipelineByIdDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/pipeline/{pipeline-number}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPipelineByNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipeline = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPipelineByNumberDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/pipeline/{pipeline-id}/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPipelineConfigByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipelineConfig = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPipelineConfigByIdDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/pipeline/mine", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListMyPipelinesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipelineListResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listMyPipelinesDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPipelinesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipelineListResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listPipelinesDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/pipeline", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPipelinesForProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipelineListResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listPipelinesForProjectDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/pipeline/{pipeline-id}/workflow", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListWorkflowsByPipelineIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.workflowListResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listWorkflowsByPipelineIdDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/pipeline", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TriggerPipelineResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pipelineCreation = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.triggerPipelineDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
