import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnConnectionRouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html#destination_cidr_block VpnConnectionRoute#destination_cidr_block}.
     */
    readonly destinationCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html#vpn_connection_id VpnConnectionRoute#vpn_connection_id}.
     */
    readonly vpnConnectionId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route}.
 */
export declare class VpnConnectionRoute extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpnConnectionRouteConfig);
    private _destinationCidrBlock;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    private _vpnConnectionId;
    get vpnConnectionId(): string;
    set vpnConnectionId(value: string);
    get vpnConnectionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
