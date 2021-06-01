import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#quota_code DataAwsServicequotasServiceQuota#quota_code}.
     */
    readonly quotaCode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#quota_name DataAwsServicequotasServiceQuota#quota_name}.
     */
    readonly quotaName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#service_code DataAwsServicequotasServiceQuota#service_code}.
     */
    readonly serviceCode: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota}.
 */
export declare class DataAwsServicequotasServiceQuota extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceQuotaConfig);
    get adjustable(): boolean;
    get arn(): string;
    get defaultValue(): number;
    get globalQuota(): boolean;
    get id(): string;
    private _quotaCode?;
    get quotaCode(): string;
    set quotaCode(value: string);
    resetQuotaCode(): void;
    get quotaCodeInput(): string | undefined;
    private _quotaName?;
    get quotaName(): string;
    set quotaName(value: string);
    resetQuotaName(): void;
    get quotaNameInput(): string | undefined;
    private _serviceCode;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string;
    get serviceName(): string;
    get value(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
