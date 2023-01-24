import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCheckoutKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export enum GetCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}


export class GetCheckoutKeyCheckoutKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred: boolean;

  @SpeakeasyMetadata({ data: "json, name=public-key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCheckoutKeyCheckoutKeyCheckoutKeyTypeEnum;
}


export class GetCheckoutKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCheckoutKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCheckoutKeyPathParams;
}


export class GetCheckoutKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutKey?: GetCheckoutKeyCheckoutKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCheckoutKeyDefaultApplicationJSONObject?: GetCheckoutKeyDefaultApplicationJson;
}
