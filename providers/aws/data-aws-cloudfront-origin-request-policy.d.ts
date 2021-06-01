import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html#id DataAwsCloudfrontOriginRequestPolicy#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html#name DataAwsCloudfrontOriginRequestPolicy#name}.
     */
    readonly name?: string;
}
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfig extends cdktf.ComplexComputedList {
    get cookieBehavior(): string;
    get cookies(): any;
}
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfig extends cdktf.ComplexComputedList {
    get headerBehavior(): string;
    get headers(): any;
}
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig extends cdktf.ComplexComputedList {
    get queryStringBehavior(): string;
    get queryStrings(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}.
 */
export declare class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontOriginRequestPolicyConfig);
    get comment(): string;
    cookiesConfig(index: string): DataAwsCloudfrontOriginRequestPolicyCookiesConfig;
    get etag(): string;
    headersConfig(index: string): DataAwsCloudfrontOriginRequestPolicyHeadersConfig;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    queryStringsConfig(index: string): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
