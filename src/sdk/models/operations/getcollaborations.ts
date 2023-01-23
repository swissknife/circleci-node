import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCollaborationsCollaboration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=vcs-type" })
  vcsType: string;
}


export class GetCollaborationsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCollaborationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCollaborationsCollaboration })
  collaborations?: GetCollaborationsCollaboration[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCollaborationsDefaultApplicationJSONObject?: GetCollaborationsDefaultApplicationJson;
}
