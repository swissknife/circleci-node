import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListEnvVarsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class ListEnvVarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListEnvVarsPathParams;
}

export class ListEnvVarsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class ListEnvVarsEnvironmentVariableListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair,
  })
  @Expose({ name: "items" })
  @Type(() => ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair)
  items: ListEnvVarsEnvironmentVariableListResponseEnvironmentVariablePair[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListEnvVarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentVariableListResponse?: ListEnvVarsEnvironmentVariableListResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listEnvVarsDefaultApplicationJSONObject?: ListEnvVarsDefaultApplicationJSON;
}
