import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Workflow {
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
   * approvePendingApprovalJobById - Approve a job
   *
   * Approves a pending approval job in a workflow.
  **/
  approvePendingApprovalJobById(
    req: operations.ApprovePendingApprovalJobByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApprovePendingApprovalJobByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApprovePendingApprovalJobByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workflow/{id}/approve/{approval_request_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApprovePendingApprovalJobByIdResponse =
            new operations.ApprovePendingApprovalJobByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ApprovePendingApprovalJobByIdMessageResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.approvePendingApprovalJobByIdDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ApprovePendingApprovalJobByIdDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * cancelWorkflow - Cancel a workflow
   *
   * Cancels a running workflow.
  **/
  cancelWorkflow(
    req: operations.CancelWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workflow/{id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelWorkflowResponse =
            new operations.CancelWorkflowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CancelWorkflowMessageResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.cancelWorkflowDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CancelWorkflowDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkflowById - Get a workflow
   *
   * Returns summary fields of a workflow by ID.
  **/
  getWorkflowById(
    req: operations.GetWorkflowByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkflowByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkflowByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workflow/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkflowByIdResponse =
            new operations.GetWorkflowByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.workflow = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWorkflowByIdWorkflow,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getWorkflowByIdDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWorkflowByIdDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listWorkflowJobs - Get a workflow's jobs
   *
   * Returns a sequence of jobs for a workflow.
  **/
  listWorkflowJobs(
    req: operations.ListWorkflowJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkflowJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkflowJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workflow/{id}/job", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListWorkflowJobsResponse =
            new operations.ListWorkflowJobsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.workflowJobListResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListWorkflowJobsWorkflowJobListResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listWorkflowJobsDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListWorkflowJobsDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * rerunWorkflow - Rerun a workflow
   *
   * Reruns a workflow.
  **/
  rerunWorkflow(
    req: operations.RerunWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RerunWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RerunWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workflow/{id}/rerun", req.pathParams);

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
        const res: operations.RerunWorkflowResponse =
            new operations.RerunWorkflowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.rerunWorkflow202ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.RerunWorkflow202ApplicationJSON,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.rerunWorkflowDefaultApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.RerunWorkflowDefaultApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
