# GetEnvVarRequest


## Fields

| Field                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The name of the environment variable.                                                                                                                                                                                                                                                                                               |
| `projectSlug`                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. For projects that use GitLab or GitHub App, use `circleci` as the `vcs-slug`, replace `org-name` with the organization ID (found in Organization Settings), and replace `repo-name` with the project ID (found in Project Settings). |