import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#id DataAwsCloudfrontCachePolicy#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#name DataAwsCloudfrontCachePolicy#name}.
     */
    readonly name?: string;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {
    get cookieBehavior(): string;
    get cookies(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {
    get headerBehavior(): string;
    get headers(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {
    get queryStringBehavior(): string;
    get queryStrings(): any;
}
export declare class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {
    get cookiesConfig(): any;
    get enableAcceptEncodingBrotli(): boolean;
    get enableAcceptEncodingGzip(): boolean;
    get headersConfig(): any;
    get queryStringsConfig(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}.
 */
export declare class DataAwsCloudfrontCachePolicy extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontCachePolicyConfig);
    get comment(): string;
    get defaultTtl(): number;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get maxTtl(): number;
    get minTtl(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    parametersInCacheKeyAndForwardedToOrigin(index: string): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
