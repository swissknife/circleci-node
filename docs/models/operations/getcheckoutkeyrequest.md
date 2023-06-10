# GetCheckoutKeyRequest


## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `fingerprint`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | An SSH key fingerprint.                                                                        |
| `projectSlug`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. |