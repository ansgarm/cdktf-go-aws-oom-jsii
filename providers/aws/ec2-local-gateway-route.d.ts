import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}.
     */
    readonly destinationCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}.
     */
    readonly localGatewayRouteTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}.
     */
    readonly localGatewayVirtualInterfaceGroupId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route}.
 */
export declare class Ec2LocalGatewayRoute extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig);
    private _destinationCidrBlock;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    private _localGatewayRouteTableId;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string;
    private _localGatewayVirtualInterfaceGroupId;
    get localGatewayVirtualInterfaceGroupId(): string;
    set localGatewayVirtualInterfaceGroupId(value: string);
    get localGatewayVirtualInterfaceGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
