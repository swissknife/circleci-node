/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AddEnvironmentVariableToContextRequestBody extends SpeakeasyBase {
    /**
     * The value of the environment variable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

export class AddEnvironmentVariableToContextRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: AddEnvironmentVariableToContextRequestBody;

    /**
     * ID of the context (UUID)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
    contextId: string;

    /**
     * The name of the environment variable
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=env-var-name" })
    envVarName: string;
}

/**
 * Error response.
 */
export class AddEnvironmentVariableToContextDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class AddEnvironmentVariableToContextResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The new environment variable
     */
    @SpeakeasyMetadata()
    addEnvironmentVariableToContext200ApplicationJSONOneOf?: any;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    addEnvironmentVariableToContextDefaultApplicationJSONObject?: AddEnvironmentVariableToContextDefaultApplicationJSON;
}
