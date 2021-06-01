import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnGatewayRoutePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#route_table_id VpnGatewayRoutePropagation#route_table_id}.
     */
    readonly routeTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}.
     */
    readonly vpnGatewayId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation}.
 */
export declare class VpnGatewayRoutePropagation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig);
    get id(): string;
    private _routeTableId;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _vpnGatewayId;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    get vpnGatewayIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
