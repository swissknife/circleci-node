/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CircleciCore } from "../core.js";
import * as m$ from "../lib/matchers.js";
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
 * Collaborations
 *
 * @remarks
 * Provides the set of organizations of which a user is a member or a collaborator.
 *
 * The set of organizations that a user can collaborate on is composed of:
 *
 * * Organizations that the current user belongs to across VCS types (e.g. BitBucket, GitHub)
 * * The parent organization of repository that the user can collaborate on, but is not necessarily a member of
 * * The organization of the current user's account
 */
export async function userGetCollaborations(
    client$: CircleciCore,
    options?: RequestOptions
): Promise<
    Result<
        operations.GetCollaborationsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const path$ = pathToFunc("/me/collaborations")();

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "getCollaborations",
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
        operations.GetCollaborationsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.GetCollaborationsResponse$inboundSchema),
        m$.json("default", operations.GetCollaborationsResponse$inboundSchema)
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
