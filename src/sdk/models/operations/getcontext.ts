import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
  contextId: string;
}


export class GetContextContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GetContextDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContextPathParams;
}


export class GetContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  context?: GetContextContext;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getContextDefaultApplicationJSONObject?: GetContextDefaultApplicationJson;
}
