/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetProjectBySlugRequest extends SpeakeasyBase {
  /**
   * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

/**
 * Error response.
 */
export class GetProjectBySlugDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * The VCS provider
 */
export enum GetProjectBySlugProjectVcsInfoProviderEnum {
  Bitbucket = "Bitbucket",
  CircleCI = "CircleCI",
  GitHub = "GitHub",
}

/**
 * Information about the VCS that hosts the project source code.
 */
export class GetProjectBySlugProjectVcsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "default_branch" })
  defaultBranch: string;

  /**
   * The VCS provider
   */
  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: GetProjectBySlugProjectVcsInfoProviderEnum;

  /**
   * URL to the repository hosting the project's code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs_url" })
  vcsUrl: string;
}

/**
 * NOTE: The definition of Project is subject to change.
 */
export class GetProjectBySlugProject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The name of the project
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The id of the organization the project belongs to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "organization_id" })
  organizationId: string;

  /**
   * The name of the organization the project belongs to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "organization_name" })
  organizationName: string;

  /**
   * The slug of the organization the project belongs to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "organization_slug" })
  organizationSlug: string;

  /**
   * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  /**
   * Information about the VCS that hosts the project source code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs_info" })
  @Type(() => GetProjectBySlugProjectVcsInfo)
  vcsInfo: GetProjectBySlugProjectVcsInfo;
}

export class GetProjectBySlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * A project object
   */
  @SpeakeasyMetadata()
  project?: GetProjectBySlugProject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  getProjectBySlugDefaultApplicationJSONObject?: GetProjectBySlugDefaultApplicationJSON;
}
