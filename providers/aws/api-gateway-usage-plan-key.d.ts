import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_id ApiGatewayUsagePlanKey#key_id}.
     */
    readonly keyId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_type ApiGatewayUsagePlanKey#key_type}.
     */
    readonly keyType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#usage_plan_id ApiGatewayUsagePlanKey#usage_plan_id}.
     */
    readonly usagePlanId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key}.
 */
export declare class ApiGatewayUsagePlanKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanKeyConfig);
    get id(): string;
    private _keyId;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    private _keyType;
    get keyType(): string;
    set keyType(value: string);
    get keyTypeInput(): string;
    get name(): string;
    private _usagePlanId;
    get usagePlanId(): string;
    set usagePlanId(value: string);
    get usagePlanIdInput(): string;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
