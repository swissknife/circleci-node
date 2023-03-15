import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListEnvironmentVariablesFromContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=context-id",
  })
  contextId: string;
}

export class ListEnvironmentVariablesFromContextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;
}

export class ListEnvironmentVariablesFromContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListEnvironmentVariablesFromContextPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEnvironmentVariablesFromContextQueryParams;
}

export class ListEnvironmentVariablesFromContextDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ListEnvironmentVariablesFromContext200ApplicationJSONItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "context_id" })
  contextId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "variable" })
  variable: string;
}

export class ListEnvironmentVariablesFromContext200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListEnvironmentVariablesFromContext200ApplicationJSONItems,
  })
  @Expose({ name: "items" })
  @Type(() => ListEnvironmentVariablesFromContext200ApplicationJSONItems)
  items: ListEnvironmentVariablesFromContext200ApplicationJSONItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListEnvironmentVariablesFromContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listEnvironmentVariablesFromContext200ApplicationJSONObject?: ListEnvironmentVariablesFromContext200ApplicationJSON;

  @SpeakeasyMetadata()
  listEnvironmentVariablesFromContextDefaultApplicationJSONObject?: ListEnvironmentVariablesFromContextDefaultApplicationJSON;
}
