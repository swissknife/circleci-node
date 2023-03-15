import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fingerprint",
  })
  fingerprint: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class GetCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCheckoutKeyPathParams;
}

export class GetCheckoutKeyDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum {
  DeployKey = "deploy-key",
  GithubUserKey = "github-user-key",
}

export class GetCheckoutKeyCheckoutKey extends SpeakeasyBase {
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
  type: GetCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum;
}

export class GetCheckoutKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutKey?: GetCheckoutKeyCheckoutKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCheckoutKeyDefaultApplicationJSONObject?: GetCheckoutKeyDefaultApplicationJSON;
}
