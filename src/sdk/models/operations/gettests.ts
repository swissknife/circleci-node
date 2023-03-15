import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=job-number",
  })
  jobNumber: any;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project-slug",
  })
  projectSlug: string;
}

export class GetTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTestsPathParams;
}

export class GetTestsDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetTestsTestsResponseItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classname" })
  classname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "file" })
  file: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result: string;

  @SpeakeasyMetadata()
  @Expose({ name: "run_time" })
  runTime: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: string;
}

export class GetTestsTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetTestsTestsResponseItems })
  @Expose({ name: "items" })
  @Type(() => GetTestsTestsResponseItems)
  items: GetTestsTestsResponseItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "next_page_token" })
  nextPageToken: string;
}

export class GetTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  testsResponse?: GetTestsTestsResponse;

  @SpeakeasyMetadata()
  getTestsDefaultApplicationJSONObject?: GetTestsDefaultApplicationJSON;
}
