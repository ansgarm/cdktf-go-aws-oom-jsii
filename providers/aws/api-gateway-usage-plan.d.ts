import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#description ApiGatewayUsagePlan#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#name ApiGatewayUsagePlan#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#product_code ApiGatewayUsagePlan#product_code}.
     */
    readonly productCode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags ApiGatewayUsagePlan#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags_all ApiGatewayUsagePlan#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * api_stages block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_stages ApiGatewayUsagePlan#api_stages}
     */
    readonly apiStages?: ApiGatewayUsagePlanApiStages[];
    /**
     * quota_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#quota_settings ApiGatewayUsagePlan#quota_settings}
     */
    readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings[];
    /**
     * throttle_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle_settings ApiGatewayUsagePlan#throttle_settings}
     */
    readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings[];
}
export interface ApiGatewayUsagePlanApiStages {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_id ApiGatewayUsagePlan#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#stage ApiGatewayUsagePlan#stage}.
     */
    readonly stage: string;
}
export interface ApiGatewayUsagePlanQuotaSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#limit ApiGatewayUsagePlan#limit}.
     */
    readonly limit: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#offset ApiGatewayUsagePlan#offset}.
     */
    readonly offset?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#period ApiGatewayUsagePlan#period}.
     */
    readonly period: string;
}
export interface ApiGatewayUsagePlanThrottleSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#burst_limit ApiGatewayUsagePlan#burst_limit}.
     */
    readonly burstLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#rate_limit ApiGatewayUsagePlan#rate_limit}.
     */
    readonly rateLimit?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan}.
 */
export declare class ApiGatewayUsagePlan extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _productCode?;
    get productCode(): string;
    set productCode(value: string);
    resetProductCode(): void;
    get productCodeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _apiStages?;
    get apiStages(): ApiGatewayUsagePlanApiStages[];
    set apiStages(value: ApiGatewayUsagePlanApiStages[]);
    resetApiStages(): void;
    get apiStagesInput(): ApiGatewayUsagePlanApiStages[] | undefined;
    private _quotaSettings?;
    get quotaSettings(): ApiGatewayUsagePlanQuotaSettings[];
    set quotaSettings(value: ApiGatewayUsagePlanQuotaSettings[]);
    resetQuotaSettings(): void;
    get quotaSettingsInput(): ApiGatewayUsagePlanQuotaSettings[] | undefined;
    private _throttleSettings?;
    get throttleSettings(): ApiGatewayUsagePlanThrottleSettings[];
    set throttleSettings(value: ApiGatewayUsagePlanThrottleSettings[]);
    resetThrottleSettings(): void;
    get throttleSettingsInput(): ApiGatewayUsagePlanThrottleSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
