import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";

export class SchemeAPIKeyHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Circle-Token" })
  apiKey: string;
}

export class SchemeAPIKeyQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=circle-token" })
  apiKey: string;
}

export class SchemeBasicAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header",
  })
  apiKeyHeader?: SchemeAPIKeyHeader;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=query",
  })
  apiKeyQuery?: SchemeAPIKeyQuery;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: SchemeBasicAuth;
}
