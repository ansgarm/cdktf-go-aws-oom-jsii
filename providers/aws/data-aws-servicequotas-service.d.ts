import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicequotasServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html#service_name DataAwsServicequotasService#service_name}.
     */
    readonly serviceName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service}.
 */
export declare class DataAwsServicequotasService extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceConfig);
    get id(): string;
    get serviceCode(): string;
    private _serviceName;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
