import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectBySlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}

export enum GetProjectBySlugProjectVcsInfoProviderEnum {
    Bitbucket = "Bitbucket",
    CircleCi = "CircleCI",
    GitHub = "GitHub"
}


// GetProjectBySlugProjectVcsInfo
/** 
 * Information about the VCS that hosts the project source code.
**/
export class GetProjectBySlugProjectVcsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: GetProjectBySlugProjectVcsInfoProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=vcs_url" })
  vcsUrl: string;
}


// GetProjectBySlugProject
/** 
 * NOTE: The definition of Project is subject to change.
**/
export class GetProjectBySlugProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=organization_name" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "json, name=organization_slug" })
  organizationSlug: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_info" })
  vcsInfo: GetProjectBySlugProjectVcsInfo;
}


export class GetProjectBySlugDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetProjectBySlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectBySlugPathParams;
}


export class GetProjectBySlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: GetProjectBySlugProject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectBySlugDefaultApplicationJsonObject?: GetProjectBySlugDefaultApplicationJson;
}
