import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ClientVpnRouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#client_vpn_endpoint_id Ec2ClientVpnRoute#client_vpn_endpoint_id}.
     */
    readonly clientVpnEndpointId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#description Ec2ClientVpnRoute#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#destination_cidr_block Ec2ClientVpnRoute#destination_cidr_block}.
     */
    readonly destinationCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#target_vpc_subnet_id Ec2ClientVpnRoute#target_vpc_subnet_id}.
     */
    readonly targetVpcSubnetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route}.
 */
export declare class Ec2ClientVpnRoute extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnRouteConfig);
    private _clientVpnEndpointId;
    get clientVpnEndpointId(): string;
    set clientVpnEndpointId(value: string);
    get clientVpnEndpointIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationCidrBlock;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    get origin(): string;
    private _targetVpcSubnetId;
    get targetVpcSubnetId(): string;
    set targetVpcSubnetId(value: string);
    get targetVpcSubnetIdInput(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
