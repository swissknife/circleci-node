import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ListContextsOwnerTypeEnum {
    Account = "account",
    Organization = "organization"
}

export class ListContextsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner-id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner-slug" })
  ownerSlug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner-type" })
  ownerType?: ListContextsOwnerTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page-token" })
  pageToken?: string;
}

export class ListContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListContextsQueryParams;
}

export class ListContextsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export class ListContexts200ApplicationJSONContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class ListContexts200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ListContexts200ApplicationJSONContext })
  items: ListContexts200ApplicationJSONContext[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}

export class ListContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listContexts200ApplicationJSONObject?: ListContexts200ApplicationJSON;

  @SpeakeasyMetadata()
  listContextsDefaultApplicationJSONObject?: ListContextsDefaultApplicationJSON;
}