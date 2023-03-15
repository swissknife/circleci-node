import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum CreateContextRequestBodyOwner2TypeEnum {
  Organization = "organization",
}

export class CreateContextRequestBodyOwner2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateContextRequestBodyOwner2TypeEnum;
}
export enum CreateContextRequestBodyOwner1TypeEnum {
  Account = "account",
  Organization = "organization",
}

export class CreateContextRequestBodyOwner1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateContextRequestBodyOwner1TypeEnum;
}

export class CreateContextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner: any;
}

export class CreateContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateContextRequestBody;
}

export class CreateContextDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class CreateContextContext extends SpeakeasyBase {
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

export class CreateContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  context?: CreateContextContext;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createContextDefaultApplicationJSONObject?: CreateContextDefaultApplicationJSON;
}
