import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class User {
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
   * getCollaborations - Collaborations
   *
   * Provides the set of organizations of which a user is a member or a collaborator.
   * 
   * The set of organizations that a user can collaborate on is composed of:
   * 
   * * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
   * * The parent organization of repository that the user can collaborate on, but is not necessarily a member of
   * * The organization of the current user's account
  **/
  getCollaborations(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCollaborationsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me/collaborations";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCollaborationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.collaborations = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCollaborationsDefaultApplicationJSONObject = plainToInstance(
                operations.GetCollaborationsDefaultApplicationJSON,
                httpRes?.data as operations.GetCollaborationsDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCurrentUser - User Information
   *
   * Provides information about the user that is currently signed in.
  **/
  getCurrentUser(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCurrentUserResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/me";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCurrentUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.user = plainToInstance(
                operations.GetCurrentUserUser,
                httpRes?.data as operations.GetCurrentUserUser,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCurrentUserDefaultApplicationJSONObject = plainToInstance(
                operations.GetCurrentUserDefaultApplicationJSON,
                httpRes?.data as operations.GetCurrentUserDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUser - User Information
   *
   * Provides information about the user with the given ID.
  **/
  getUser(
    req: operations.GetUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.user = plainToInstance(
                operations.GetUserUser,
                httpRes?.data as operations.GetUserUser,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getUserDefaultApplicationJSONObject = plainToInstance(
                operations.GetUserDefaultApplicationJSON,
                httpRes?.data as operations.GetUserDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
