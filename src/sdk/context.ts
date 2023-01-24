import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Context {
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
   * addEnvironmentVariableToContext - Add or update an environment variable
   *
   * Create or update an environment variable within a context. Returns information about the environment variable, not including its value.
  **/
  addEnvironmentVariableToContext(
    req: operations.AddEnvironmentVariableToContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddEnvironmentVariableToContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddEnvironmentVariableToContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/context/{context-id}/environment-variable/{env-var-name}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddEnvironmentVariableToContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addEnvironmentVariableToContext200ApplicationJSONAnyOf = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addEnvironmentVariableToContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createContext - Create a new context
  **/
  createContext(
    req: operations.CreateContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/context";

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
        const res: operations.CreateContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.context = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteContext - Delete a context
  **/
  deleteContext(
    req: operations.DeleteContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/context/{context-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.messageResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteEnvironmentVariableFromContext - Remove an environment variable
   *
   * Delete an environment variable from a context.
  **/
  deleteEnvironmentVariableFromContext(
    req: operations.DeleteEnvironmentVariableFromContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvironmentVariableFromContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvironmentVariableFromContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/context/{context-id}/environment-variable/{env-var-name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEnvironmentVariableFromContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.messageResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteEnvironmentVariableFromContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getContext - Get a context
   *
   * Returns basic information about a context.
  **/
  getContext(
    req: operations.GetContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/context/{context-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.context = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listContexts - List contexts
   *
   * List all contexts for an owner.
  **/
  listContexts(
    req: operations.ListContextsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListContextsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListContextsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/context";
    
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
        const res: operations.ListContextsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listContexts200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listContextsDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listEnvironmentVariablesFromContext - List environment variables
   *
   * List information about environment variables in a context, not including their values.
  **/
  listEnvironmentVariablesFromContext(
    req: operations.ListEnvironmentVariablesFromContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEnvironmentVariablesFromContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEnvironmentVariablesFromContextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/context/{context-id}/environment-variable", req.pathParams);
    
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
        const res: operations.ListEnvironmentVariablesFromContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listEnvironmentVariablesFromContext200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listEnvironmentVariablesFromContextDefaultApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
