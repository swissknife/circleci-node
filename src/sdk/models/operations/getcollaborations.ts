import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetCollaborationsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetCollaborationsCollaboration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs-type" })
  vcsType: string;
}

export class GetCollaborationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCollaborationsCollaboration })
  collaborations?: GetCollaborationsCollaboration[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCollaborationsDefaultApplicationJSONObject?: GetCollaborationsDefaultApplicationJSON;
}