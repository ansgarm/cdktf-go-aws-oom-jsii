import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#comment CloudfrontCachePolicy#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#default_ttl CloudfrontCachePolicy#default_ttl}.
     */
    readonly defaultTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#etag CloudfrontCachePolicy#etag}.
     */
    readonly etag?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#max_ttl CloudfrontCachePolicy#max_ttl}.
     */
    readonly maxTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#min_ttl CloudfrontCachePolicy#min_ttl}.
     */
    readonly minTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#name CloudfrontCachePolicy#name}.
     */
    readonly name: string;
    /**
     * parameters_in_cache_key_and_forwarded_to_origin block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
     */
    readonly parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookie_behavior CloudfrontCachePolicy#cookie_behavior}.
     */
    readonly cookieBehavior: string;
    /**
     * cookies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies CloudfrontCachePolicy#cookies}
     */
    readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#header_behavior CloudfrontCachePolicy#header_behavior}.
     */
    readonly headerBehavior?: string;
    /**
     * headers block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers CloudfrontCachePolicy#headers}
     */
    readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}.
     */
    readonly items?: string[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_string_behavior CloudfrontCachePolicy#query_string_behavior}.
     */
    readonly queryStringBehavior: string;
    /**
     * query_strings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings CloudfrontCachePolicy#query_strings}
     */
    readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}.
     */
    readonly enableAcceptEncodingBrotli?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}.
     */
    readonly enableAcceptEncodingGzip?: boolean;
    /**
     * cookies_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies_config CloudfrontCachePolicy#cookies_config}
     */
    readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig[];
    /**
     * headers_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers_config CloudfrontCachePolicy#headers_config}
     */
    readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig[];
    /**
     * query_strings_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings_config CloudfrontCachePolicy#query_strings_config}
     */
    readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}.
 */
export declare class CloudfrontCachePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number | undefined;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string | undefined;
    get id(): string;
    private _maxTtl?;
    get maxTtl(): number;
    set maxTtl(value: number);
    resetMaxTtl(): void;
    get maxTtlInput(): number | undefined;
    private _minTtl?;
    get minTtl(): number;
    set minTtl(value: number);
    resetMinTtl(): void;
    get minTtlInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parametersInCacheKeyAndForwardedToOrigin?;
    get parametersInCacheKeyAndForwardedToOrigin(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[];
    set parametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[]);
    resetParametersInCacheKeyAndForwardedToOrigin(): void;
    get parametersInCacheKeyAndForwardedToOriginInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
