import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum ListContextsOwnerTypeEnum {
  Account = "account",
  Organization = "organization",
}

export class ListContextsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=owner-id",
  })
  ownerId?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=owner-slug",
  })
  ownerSlug?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=owner-type",
  })
  ownerType?: ListContextsOwnerTypeEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-token",
  })
  pageToken?: string;
}

export class ListContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListContextsQueryParams;
}

export class ListContextsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ListContexts200ApplicationJSONContext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class ListContexts200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ListContexts200ApplicationJSONContext })
  @Expose({ name: "items" })
  @Type(() => ListContexts200ApplicationJSONContext)
  items: ListContexts200ApplicationJSONContext[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class ListContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  listContexts200ApplicationJSONObject?: ListContexts200ApplicationJSON;

  @SpeakeasyMetadata()
  listContextsDefaultApplicationJSONObject?: ListContextsDefaultApplicationJSON;
}
