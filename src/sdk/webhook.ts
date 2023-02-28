import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Webhook {
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
   * createWebhook - Create a webhook
  **/
  createWebhook(
    req: operations.CreateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook";

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
        const res: operations.CreateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhook = plainToInstance(
                operations.CreateWebhookWebhook,
                httpRes?.data as operations.CreateWebhookWebhook,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createWebhookDefaultApplicationJSONObject = plainToInstance(
                operations.CreateWebhookDefaultApplicationJSON,
                httpRes?.data as operations.CreateWebhookDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteWebhook - Delete a webhook
  **/
  deleteWebhook(
    req: operations.DeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhook/{webhook-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = plainToInstance(
                operations.DeleteWebhookMessageResponse,
                httpRes?.data as operations.DeleteWebhookMessageResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteWebhookDefaultApplicationJSONObject = plainToInstance(
                operations.DeleteWebhookDefaultApplicationJSON,
                httpRes?.data as operations.DeleteWebhookDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhookById - Get a webhook
   *
   * Get a webhook by id.
  **/
  getWebhookById(
    req: operations.GetWebhookByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhookByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhook/{webhook-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhookByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhook = plainToInstance(
                operations.GetWebhookByIdWebhook,
                httpRes?.data as operations.GetWebhookByIdWebhook,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWebhookByIdDefaultApplicationJSONObject = plainToInstance(
                operations.GetWebhookByIdDefaultApplicationJSON,
                httpRes?.data as operations.GetWebhookByIdDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhooks - List webhooks
   *
   * Get a list of webhook that match the given scope-type and scope-id
  **/
  getWebhooks(
    req: operations.GetWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhook";
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWebhooks200ApplicationJSONObject = plainToInstance(
                operations.GetWebhooks200ApplicationJSON,
                httpRes?.data as operations.GetWebhooks200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWebhooksDefaultApplicationJSONObject = plainToInstance(
                operations.GetWebhooksDefaultApplicationJSON,
                httpRes?.data as operations.GetWebhooksDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateWebhook - Update a webhook
  **/
  updateWebhook(
    req: operations.UpdateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhook/{webhook-id}", req.pathParams);

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
        const res: operations.UpdateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.webhook = plainToInstance(
                operations.UpdateWebhookWebhook,
                httpRes?.data as operations.UpdateWebhookWebhook,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateWebhookDefaultApplicationJSONObject = plainToInstance(
                operations.UpdateWebhookDefaultApplicationJSON,
                httpRes?.data as operations.UpdateWebhookDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
