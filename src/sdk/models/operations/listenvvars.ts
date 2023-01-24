import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnvVarsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class ListEnvVarsEnvironmentVariableListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair })
  items: ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListEnvVarsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListEnvVarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListEnvVarsPathParams;
}


export class ListEnvVarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentVariableListResponse?: ListEnvVarsEnvironmentVariableListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listEnvVarsDefaultApplicationJSONObject?: ListEnvVarsDefaultApplicationJson;
}
