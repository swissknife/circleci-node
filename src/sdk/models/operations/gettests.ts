import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-number" })
  jobNumber: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
  projectSlug: string;
}


export class GetTestsTestsResponseItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: string;

  @SpeakeasyMetadata({ data: "json, name=run_time" })
  runTime: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;
}


export class GetTestsTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetTestsTestsResponseItems })
  items: GetTestsTestsResponseItems[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken: string;
}


export class GetTestsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTestsPathParams;
}


export class GetTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testsResponse?: GetTestsTestsResponse;

  @SpeakeasyMetadata()
  getTestsDefaultApplicationJsonObject?: GetTestsDefaultApplicationJson;
}
