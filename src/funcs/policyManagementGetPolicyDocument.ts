/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CircleciCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Retrieves a policy document
 *
 * @remarks
 * This endpoint will retrieve a policy document.
 */
export async function policyManagementGetPolicyDocument(
    client$: CircleciCore,
    request: operations.GetPolicyDocumentRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.GetPolicyDocumentResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetPolicyDocumentRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        context: encodeSimple$("context", payload$.context, {
            explode: false,
            charEncoding: "percent",
        }),
        ownerID: encodeSimple$("ownerID", payload$.ownerID, {
            explode: false,
            charEncoding: "percent",
        }),
        policyName: encodeSimple$("policyName", payload$.policyName, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/owner/{ownerID}/context/{context}/policy-bundle/{policyName}")(
        pathParams$
    );

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "GetPolicyDocument",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: [],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        operations.GetPolicyDocumentResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.GetPolicyDocumentResponse$inboundSchema),
        m$.json([400, 401, 403, 500], operations.GetPolicyDocumentResponse$inboundSchema),
        m$.json(404, operations.GetPolicyDocumentResponse$inboundSchema)
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
