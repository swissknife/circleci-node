import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}
export enum CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum {
  UserKey = "user-key",
  DeployKey = "deploy-key",
}

export class CreateCheckoutKeyCheckoutKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum;
}

export class CreateCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCheckoutKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateCheckoutKeyCheckoutKeyInput;
}

export class CreateCheckoutKeyDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum CreateCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum {
  DeployKey = "deploy-key",
  GithubUserKey = "github-user-key",
}

export class CreateCheckoutKeyCheckoutKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created-at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata()
  @Expose({ name: "preferred" })
  preferred: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "public-key" })
  publicKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum;
}

export class CreateCheckoutKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutKey?: CreateCheckoutKeyCheckoutKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createCheckoutKeyDefaultApplicationJSONObject?: CreateCheckoutKeyDefaultApplicationJSON;
}
