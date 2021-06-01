import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointServiceAllowedPrincipalConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}.
     */
    readonly principalArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}.
     */
    readonly vpcEndpointServiceId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal}.
 */
export declare class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcEndpointServiceAllowedPrincipalConfig);
    get id(): string;
    private _principalArn;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string;
    private _vpcEndpointServiceId;
    get vpcEndpointServiceId(): string;
    set vpcEndpointServiceId(value: string);
    get vpcEndpointServiceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
