import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#comment CloudfrontOriginRequestPolicy#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#etag CloudfrontOriginRequestPolicy#etag}.
     */
    readonly etag?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#name CloudfrontOriginRequestPolicy#name}.
     */
    readonly name: string;
    /**
     * cookies_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
     */
    readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig[];
    /**
     * headers_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers_config CloudfrontOriginRequestPolicy#headers_config}
     */
    readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig[];
    /**
     * query_strings_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
     */
    readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig[];
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontOriginRequestPolicyCookiesConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}.
     */
    readonly cookieBehavior: string;
    /**
     * cookies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies CloudfrontOriginRequestPolicy#cookies}
     */
    readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies[];
}
export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontOriginRequestPolicyHeadersConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#header_behavior CloudfrontOriginRequestPolicy#header_behavior}.
     */
    readonly headerBehavior?: string;
    /**
     * headers block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers CloudfrontOriginRequestPolicy#headers}
     */
    readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders[];
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}.
     */
    readonly queryStringBehavior: string;
    /**
     * query_strings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings CloudfrontOriginRequestPolicy#query_strings}
     */
    readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}.
 */
export declare class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _cookiesConfig;
    get cookiesConfig(): CloudfrontOriginRequestPolicyCookiesConfig[];
    set cookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig[]);
    get cookiesConfigInput(): CloudfrontOriginRequestPolicyCookiesConfig[];
    private _headersConfig;
    get headersConfig(): CloudfrontOriginRequestPolicyHeadersConfig[];
    set headersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig[]);
    get headersConfigInput(): CloudfrontOriginRequestPolicyHeadersConfig[];
    private _queryStringsConfig;
    get queryStringsConfig(): CloudfrontOriginRequestPolicyQueryStringsConfig[];
    set queryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig[]);
    get queryStringsConfigInput(): CloudfrontOriginRequestPolicyQueryStringsConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
