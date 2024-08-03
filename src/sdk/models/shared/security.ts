/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SchemeBasicAuth } from "./schemebasicauth";

export class Security extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=header;name=Circle-Token",
    })
    apiKeyHeader?: string;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=apiKey;subtype=query;name=circle-token",
    })
    apiKeyQuery?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basicAuth?: SchemeBasicAuth;
}
