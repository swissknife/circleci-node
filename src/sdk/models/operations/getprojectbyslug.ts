import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetProjectBySlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export class GetProjectBySlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectBySlugPathParams;
}

export class GetProjectBySlugDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
export enum GetProjectBySlugProjectVcsInfoProviderEnum {
    Bitbucket = "Bitbucket",
    CircleCI = "CircleCI",
    GitHub = "GitHub"
}

// GetProjectBySlugProjectVcsInfo
/** 
 * Information about the VCS that hosts the project source code.
**/
export class GetProjectBySlugProjectVcsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "default_branch" })
  defaultBranch: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: GetProjectBySlugProjectVcsInfoProviderEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs_url" })
  vcsUrl: string;
}

// GetProjectBySlugProject
/** 
 * NOTE: The definition of Project is subject to change.
**/
export class GetProjectBySlugProject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization_id" })
  organizationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization_name" })
  organizationName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization_slug" })
  organizationSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vcs_info" })
  @Type(() => GetProjectBySlugProjectVcsInfo)
  vcsInfo: GetProjectBySlugProjectVcsInfo;
}

export class GetProjectBySlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: GetProjectBySlugProject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProjectBySlugDefaultApplicationJSONObject?: GetProjectBySlugDefaultApplicationJSON;
}