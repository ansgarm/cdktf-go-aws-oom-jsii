import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html#quota_code ServicequotasServiceQuota#quota_code}.
     */
    readonly quotaCode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html#service_code ServicequotasServiceQuota#service_code}.
     */
    readonly serviceCode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html#value ServicequotasServiceQuota#value}.
     */
    readonly value: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html aws_servicequotas_service_quota}.
 */
export declare class ServicequotasServiceQuota extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html aws_servicequotas_service_quota} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServicequotasServiceQuotaConfig);
    get adjustable(): boolean;
    get arn(): string;
    get defaultValue(): number;
    get id(): string;
    private _quotaCode;
    get quotaCode(): string;
    set quotaCode(value: string);
    get quotaCodeInput(): string;
    get quotaName(): string;
    get requestId(): string;
    get requestStatus(): string;
    private _serviceCode;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string;
    get serviceName(): string;
    private _value;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
