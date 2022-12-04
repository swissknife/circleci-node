import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateContextRequestBodyOwner1TypeEnum {
    Account = "account",
    Organization = "organization"
}


export class CreateContextRequestBodyOwner1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateContextRequestBodyOwner1TypeEnum;
}

export enum CreateContextRequestBodyOwner2TypeEnum {
    Organization = "organization"
}


export class CreateContextRequestBodyOwner2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateContextRequestBodyOwner2TypeEnum;
}


export class CreateContextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: any;
}


export class CreateContextContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CreateContextDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateContextRequestBody;
}


export class CreateContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  context?: CreateContextContext;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createContextDefaultApplicationJsonObject?: CreateContextDefaultApplicationJson;
}
