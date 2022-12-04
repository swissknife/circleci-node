import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCheckoutKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export enum ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}


export class ListCheckoutKeysCheckoutKeyListResponseCheckoutKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created-at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred: boolean;

  @SpeakeasyMetadata({ data: "json, name=public-key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyTypeEnum;
}


export class ListCheckoutKeysCheckoutKeyListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey })
  items: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class ListCheckoutKeysDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListCheckoutKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCheckoutKeysPathParams;
}


export class ListCheckoutKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutKeyListResponse?: ListCheckoutKeysCheckoutKeyListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCheckoutKeysDefaultApplicationJsonObject?: ListCheckoutKeysDefaultApplicationJson;
}
