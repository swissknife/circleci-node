import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}
export enum CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum {
    UserKey = "user-key",
    DeployKey = "deploy-key"
}

export class CreateCheckoutKeyCheckoutKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateCheckoutKeyCheckoutKeyInputCheckoutKeyInputTypeEnum;
}

export class CreateCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCheckoutKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateCheckoutKeyCheckoutKeyInput;
}

export class CreateCheckoutKeyDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
export enum CreateCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}

export class CreateCheckoutKeyCheckoutKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred: boolean;

  @SpeakeasyMetadata({ data: "json, name=public-key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
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
  createCheckoutKeyDefaultApplicationJSONObject?: CreateCheckoutKeyDefaultApplicationJSON;
}