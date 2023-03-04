import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Job {
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
   * cancelJob - Cancel job
   *
   * Cancel job with a given job number.
  **/
  cancelJob(
    req: operations.CancelJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/job/{job-number}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelJobResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.messageResponse = plainToInstance(
                operations.CancelJobMessageResponse,
                httpRes?.data as operations.CancelJobMessageResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.cancelJobDefaultApplicationJSONObject = plainToInstance(
                operations.CancelJobDefaultApplicationJSON,
                httpRes?.data as operations.CancelJobDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getJobArtifacts - Get a job's artifacts
   *
   * Returns a job's artifacts.
  **/
  getJobArtifacts(
    req: operations.GetJobArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobArtifactsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/{job-number}/artifacts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetJobArtifactsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.artifactListResponse = plainToInstance(
                operations.GetJobArtifactsArtifactListResponse,
                httpRes?.data as operations.GetJobArtifactsArtifactListResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getJobArtifactsDefaultApplicationJSONObject = plainToInstance(
                operations.GetJobArtifactsDefaultApplicationJSON,
                httpRes?.data as operations.GetJobArtifactsDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getJobDetails - Get job details
   *
   * Returns job details.
  **/
  getJobDetails(
    req: operations.GetJobDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJobDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJobDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/job/{job-number}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetJobDetailsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.jobDetails = plainToInstance(
                operations.GetJobDetailsJobDetails,
                httpRes?.data as operations.GetJobDetailsJobDetails,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getJobDetailsDefaultApplicationJSONObject = plainToInstance(
                operations.GetJobDetailsDefaultApplicationJSON,
                httpRes?.data as operations.GetJobDetailsDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTests - Get test metadata
   *
   * Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.
  **/
  getTests(
    req: operations.GetTestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/project/{project-slug}/{job-number}/tests", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTestsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.testsResponse = plainToInstance(
                operations.GetTestsTestsResponse,
                httpRes?.data as operations.GetTestsTestsResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getTestsDefaultApplicationJSONObject = plainToInstance(
                operations.GetTestsDefaultApplicationJSON,
                httpRes?.data as operations.GetTestsDefaultApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
