import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html#vpc_id VpnGatewayAttachment#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html#vpn_gateway_id VpnGatewayAttachment#vpn_gateway_id}.
     */
    readonly vpnGatewayId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment}.
 */
export declare class VpnGatewayAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpnGatewayAttachmentConfig);
    get id(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _vpnGatewayId;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    get vpnGatewayIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
