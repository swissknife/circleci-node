import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Schedule {
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
   * createSchedule - Create a schedule
   *
   * Creates a schedule and returns the created schedule.
   **/
  createSchedule(
    req: operations.CreateScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateScheduleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/schedule",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
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
      const res: operations.CreateScheduleResponse =
        new operations.CreateScheduleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.schedule = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.CreateScheduleSchedule
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createScheduleDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateScheduleDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * deleteScheduleById - Delete a schedule
   *
   * Deletes the schedule by id.
   **/
  deleteScheduleById(
    req: operations.DeleteScheduleByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteScheduleByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteScheduleByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteScheduleByIdResponse =
        new operations.DeleteScheduleByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.DeleteScheduleByIdMessageResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteScheduleByIdDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteScheduleByIdDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getScheduleById - Get a schedule
   *
   * Get a schedule by id.
   **/
  getScheduleById(
    req: operations.GetScheduleByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduleByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduleByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
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
      const res: operations.GetScheduleByIdResponse =
        new operations.GetScheduleByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.schedule = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetScheduleByIdSchedule
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getScheduleByIdDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetScheduleByIdDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listSchedulesForProject - Get all schedules
   *
   * Returns all schedules for this project.
   **/
  listSchedulesForProject(
    req: operations.ListSchedulesForProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSchedulesForProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSchedulesForProjectRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/schedule",
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
      const res: operations.ListSchedulesForProjectResponse =
        new operations.ListSchedulesForProjectResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listSchedulesForProject200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListSchedulesForProject200ApplicationJSON
              );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listSchedulesForProjectDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListSchedulesForProjectDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateSchedule - Update a schedule
   *
   * Updates a schedule and returns the updated schedule.
   **/
  updateSchedule(
    req: operations.UpdateScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateScheduleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateScheduleResponse =
        new operations.UpdateScheduleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.schedule = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.UpdateScheduleSchedule
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateScheduleDefaultApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdateScheduleDefaultApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
