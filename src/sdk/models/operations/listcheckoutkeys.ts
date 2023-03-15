import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCheckoutKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class ListCheckoutKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCheckoutKeysPathParams;
}

export class ListCheckoutKeysDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyTypeEnum {
  DeployKey = "deploy-key",
  GithubUserKey = "github-user-key",
}

export class ListCheckoutKeysCheckoutKeyListResponseCheckoutKey extends SpeakeasyBase {
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
  type: ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyTypeEnum;
}

export class ListCheckoutKeysCheckoutKeyListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey,
  })
  @Expose({ name: "items" })
  @Type(() => ListCheckoutKeysCheckoutKeyListResponseCheckoutKey)
  items: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListCheckoutKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutKeyListResponse?: ListCheckoutKeysCheckoutKeyListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listCheckoutKeysDefaultApplicationJSONObject?: ListCheckoutKeysDefaultApplicationJSON;
}
