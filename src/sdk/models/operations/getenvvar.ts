import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetEnvVarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetEnvVarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvVarPathParams;
}

export class GetEnvVarDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export class GetEnvVarEnvironmentVariablePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export class GetEnvVarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentVariablePair?: GetEnvVarEnvironmentVariablePair;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEnvVarDefaultApplicationJSONObject?: GetEnvVarDefaultApplicationJSON;
}