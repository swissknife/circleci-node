import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnvironmentVariablesFromContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;
}


export class ListEnvironmentVariablesFromContextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}


export class ListEnvironmentVariablesFromContext200ApplicationJsonItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context_id" })
  contextId: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=variable" })
  variable: string;
}


export class ListEnvironmentVariablesFromContext200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListEnvironmentVariablesFromContext200ApplicationJsonItems })
  items: ListEnvironmentVariablesFromContext200ApplicationJsonItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListEnvironmentVariablesFromContextDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListEnvironmentVariablesFromContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListEnvironmentVariablesFromContextPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEnvironmentVariablesFromContextQueryParams;
}


export class ListEnvironmentVariablesFromContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listEnvironmentVariablesFromContext200ApplicationJSONObject?: ListEnvironmentVariablesFromContext200ApplicationJson;

  @SpeakeasyMetadata()
  listEnvironmentVariablesFromContextDefaultApplicationJSONObject?: ListEnvironmentVariablesFromContextDefaultApplicationJson;
}
