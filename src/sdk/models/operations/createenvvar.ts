import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvVarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class CreateEnvVarEnvironmentVariablePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class CreateEnvVarDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateEnvVarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnvVarPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEnvVarEnvironmentVariablePair;
}


export class CreateEnvVarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentVariablePair?: CreateEnvVarEnvironmentVariablePair;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createEnvVarDefaultApplicationJsonObject?: CreateEnvVarDefaultApplicationJson;
}
