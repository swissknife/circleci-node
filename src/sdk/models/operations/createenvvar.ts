import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class CreateEnvVarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class CreateEnvVarEnvironmentVariablePair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}

export class CreateEnvVarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnvVarPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEnvVarEnvironmentVariablePair;
}

export class CreateEnvVarDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class CreateEnvVarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environmentVariablePair?: CreateEnvVarEnvironmentVariablePair;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createEnvVarDefaultApplicationJSONObject?: CreateEnvVarDefaultApplicationJSON;
}