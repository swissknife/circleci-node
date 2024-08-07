/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

const securityMetadataKey = "security";

export type SecurityProperties = {
  params: Record<string, string>;
  headers: Record<string, string>;
};

export function parseSecurityProperties(security: any): SecurityProperties {
  return parseSecurityClass(security);
}

function parseSecurityDecorator(securityAnn: string): SecurityDecorator {
  // scheme=true;type=apiKey;subtype=header"
  let option = false;
  let scheme = false;
  let name = "";
  let securityType = "";
  let securitySubType = "";

  securityAnn.split(";").forEach((securityAnnPart) => {
    const [sKey, sVal]: string[] = securityAnnPart.split("=");
    switch (sKey) {
      case "name":
        name = sVal;
        break;
      case "type":
        securityType = sVal;
        break;
      case "subtype":
        securitySubType = sVal;
        break;
      case "option":
        option = sVal == "true";
        break;
      case "scheme":
        scheme = sVal == "true";
    }
  });

  return new SecurityDecorator(
    name,
    securityType,
    option,
    scheme,
    securitySubType,
  );
}

function parseSecurityClass(security: any): SecurityProperties {
  const fieldNames: string[] = Object.getOwnPropertyNames(security);
  const properties: SecurityProperties = {
    params: {},
    headers: {},
  };
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      security,
      fname,
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null) return;

    const value = security[fname];

    if (securityDecorator.Option) {
      return parseSecurityOption(properties, value);
    } else if (securityDecorator.Scheme) {
      if (securityDecorator.SubType === "basic" && value !== Object(value)) {
        return parseSecurityScheme(properties, securityDecorator, security);
      } else {
        return parseSecurityScheme(properties, securityDecorator, value);
      }
    }
  });

  return properties;
}

function parseSecurityOption(
  properties: SecurityProperties,
  optionType: any,
): void {
  const fieldNames: string[] = Object.getOwnPropertyNames(optionType);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      optionType,
      fname,
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null || !securityDecorator.Scheme) return;
    return parseSecurityScheme(
      properties,
      securityDecorator,
      optionType[fname],
    );
  });
}

function parseSecurityScheme(
  properties: SecurityProperties,
  schemeDecorator: SecurityDecorator,
  scheme: any,
): void {
  if (scheme === Object(scheme)) {
    if (
      schemeDecorator.Type === "http" &&
      schemeDecorator.SubType === "basic"
    ) {
      return parseBasicAuthScheme(properties, scheme);
    }

    const fieldNames: string[] = Object.getOwnPropertyNames(scheme);
    fieldNames.forEach((fname) => {
      const securityAnn: string = Reflect.getMetadata(
        securityMetadataKey,
        scheme,
        fname,
      );
      if (securityAnn == null) return;
      const securityDecorator: SecurityDecorator =
        parseSecurityDecorator(securityAnn);
      if (securityDecorator == null || securityDecorator.Name === "") return;

      return parseSecuritySchemeValue(
        properties,
        schemeDecorator,
        securityDecorator,
        scheme[fname],
      );
    });
  } else {
    return parseSecuritySchemeValue(
      properties,
      schemeDecorator,
      schemeDecorator,
      scheme,
    );
  }
}

function parseSecuritySchemeValue(
  properties: SecurityProperties,
  schemeDecorator: SecurityDecorator,
  securityDecorator: SecurityDecorator,
  value: any,
): void {
  switch (schemeDecorator.Type) {
    case "apiKey":
      switch (schemeDecorator.SubType) {
        case "header":
          properties.headers[securityDecorator.Name] = value;
          break;
        case "query":
          properties.params[securityDecorator.Name] = value;
          break;
        case "cookie": {
          const securityDecoratorName: string = securityDecorator.Name;
          const val: string = value;
          properties.headers["Cookie"] = `${securityDecoratorName}=${val}`;
          break;
        }
        default:
          throw new Error("not supported");
      }
      break;
    case "openIdConnect":
      properties.headers[securityDecorator.Name] = value;
      break;
    case "oauth2":
      properties.headers[securityDecorator.Name] = value
        .toLowerCase()
        .startsWith("bearer ")
        ? value
        : `Bearer ${value}`;
      break;
    case "http":
      switch (schemeDecorator.SubType) {
        case "basic":
          break;
        case "bearer":
          properties.headers[securityDecorator.Name] = value
            .toLowerCase()
            .startsWith("bearer ")
            ? value
            : `Bearer ${value}`;
          break;
        default:
          throw new Error("not supported");
      }
      break;
    default:
      throw new Error("not supported");
  }
}

function parseBasicAuthScheme(
  properties: SecurityProperties,
  scheme: any,
): void {
  let username,
    password = "";

  const fieldNames: string[] = Object.getOwnPropertyNames(scheme);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      scheme,
      fname,
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null || securityDecorator.Name === "") return;

    switch (securityDecorator.Name) {
      case "username":
        username = scheme[fname];
        break;
      case "password":
        password = scheme[fname];
        break;
    }
  });

  properties.headers["Authorization"] = `Basic ${Buffer.from(
    `${username}:${password}`,
  ).toString("base64")}`;
}

class SecurityDecorator {
  Name: string;
  Type: string;
  Option: boolean;
  Scheme: boolean;
  SubType: string;
  constructor(
    Name: string,
    Type: string,
    Option: boolean,
    Scheme: boolean,
    SubType: string,
  ) {
    this.Name = Name;
    this.Type = Type;
    this.Option = Option;
    this.Scheme = Scheme;
    this.SubType = SubType;
  }
}
