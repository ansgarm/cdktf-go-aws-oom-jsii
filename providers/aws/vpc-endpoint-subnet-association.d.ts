import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointSubnetAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#subnet_id VpcEndpointSubnetAssociation#subnet_id}.
     */
    readonly subnetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#vpc_endpoint_id VpcEndpointSubnetAssociation#vpc_endpoint_id}.
     */
    readonly vpcEndpointId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#timeouts VpcEndpointSubnetAssociation#timeouts}
     */
    readonly timeouts?: VpcEndpointSubnetAssociationTimeouts;
}
export interface VpcEndpointSubnetAssociationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#create VpcEndpointSubnetAssociation#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#delete VpcEndpointSubnetAssociation#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}.
 */
export declare class VpcEndpointSubnetAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcEndpointSubnetAssociationConfig);
    get id(): string;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    private _vpcEndpointId;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string;
    private _timeouts?;
    get timeouts(): VpcEndpointSubnetAssociationTimeouts;
    set timeouts(value: VpcEndpointSubnetAssociationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): VpcEndpointSubnetAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
