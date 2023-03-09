import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Project {
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
   * createCheckoutKey - Create a new checkout key
   *
   * Creates a new checkout key. This API request is only usable with a user API token.
  **/
  createCheckoutKey(
    req: operations.CreateCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCheckoutKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key", req.pathParams);

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
        const res: operations.CreateCheckoutKeyResponse =
            new operations.CreateCheckoutKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.checkoutKey = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateCheckoutKeyCheckoutKey,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createCheckoutKeyDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateCheckoutKeyDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createEnvVar - Create an environment variable
   *
   * Creates a new environment variable.
  **/
  createEnvVar(
    req: operations.CreateEnvVarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEnvVarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEnvVarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar", req.pathParams);

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
        const res: operations.CreateEnvVarResponse =
            new operations.CreateEnvVarResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.environmentVariablePair = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateEnvVarEnvironmentVariablePair,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createEnvVarDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateEnvVarDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteCheckoutKey - Delete a checkout key
   *
   * Deletes the checkout key.
  **/
  deleteCheckoutKey(
    req: operations.DeleteCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCheckoutKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCheckoutKeyResponse =
            new operations.DeleteCheckoutKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCheckoutKeyMessageResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteCheckoutKeyDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCheckoutKeyDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteEnvVar - Delete an environment variable
   *
   * Deletes the environment variable named :name.
  **/
  deleteEnvVar(
    req: operations.DeleteEnvVarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEnvVarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEnvVarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteEnvVarResponse =
            new operations.DeleteEnvVarResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteEnvVarMessageResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteEnvVarDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteEnvVarDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCheckoutKey - Get a checkout key
   *
   * Returns an individual checkout key.
  **/
  getCheckoutKey(
    req: operations.GetCheckoutKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCheckoutKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCheckoutKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key/{fingerprint}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCheckoutKeyResponse =
            new operations.GetCheckoutKeyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.checkoutKey = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCheckoutKeyCheckoutKey,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCheckoutKeyDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCheckoutKeyDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getEnvVar - Get a masked environment variable
   *
   * Returns the masked value of environment variable :name.
  **/
  getEnvVar(
    req: operations.GetEnvVarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnvVarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnvVarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEnvVarResponse =
            new operations.GetEnvVarResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.environmentVariablePair = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEnvVarEnvironmentVariablePair,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getEnvVarDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEnvVarDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProjectBySlug - Get a project
   *
   * Retrieves a project by project slug.
  **/
  getProjectBySlug(
    req: operations.GetProjectBySlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectBySlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectBySlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectBySlugResponse =
            new operations.GetProjectBySlugResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.project = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectBySlugProject,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getProjectBySlugDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProjectBySlugDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listCheckoutKeys - Get all checkout keys
   *
   * Returns a sequence of checkout keys for `:project`.
  **/
  listCheckoutKeys(
    req: operations.ListCheckoutKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCheckoutKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCheckoutKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListCheckoutKeysResponse =
            new operations.ListCheckoutKeysResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.checkoutKeyListResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListCheckoutKeysCheckoutKeyListResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listCheckoutKeysDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListCheckoutKeysDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listEnvVars - List all environment variables
   *
   * Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.
  **/
  listEnvVars(
    req: operations.ListEnvVarsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEnvVarsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEnvVarsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListEnvVarsResponse =
            new operations.ListEnvVarsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.environmentVariableListResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListEnvVarsEnvironmentVariableListResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listEnvVarsDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListEnvVarsDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
