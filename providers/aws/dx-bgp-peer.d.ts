import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxBgpPeerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#address_family DxBgpPeer#address_family}.
     */
    readonly addressFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#amazon_address DxBgpPeer#amazon_address}.
     */
    readonly amazonAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_asn DxBgpPeer#bgp_asn}.
     */
    readonly bgpAsn: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_auth_key DxBgpPeer#bgp_auth_key}.
     */
    readonly bgpAuthKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#customer_address DxBgpPeer#customer_address}.
     */
    readonly customerAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#virtual_interface_id DxBgpPeer#virtual_interface_id}.
     */
    readonly virtualInterfaceId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#timeouts DxBgpPeer#timeouts}
     */
    readonly timeouts?: DxBgpPeerTimeouts;
}
export interface DxBgpPeerTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#create DxBgpPeer#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#delete DxBgpPeer#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer}.
 */
export declare class DxBgpPeer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxBgpPeerConfig);
    private _addressFamily;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    private _amazonAddress?;
    get amazonAddress(): string;
    set amazonAddress(value: string);
    resetAmazonAddress(): void;
    get amazonAddressInput(): string | undefined;
    get awsDevice(): string;
    private _bgpAsn;
    get bgpAsn(): number;
    set bgpAsn(value: number);
    get bgpAsnInput(): number;
    private _bgpAuthKey?;
    get bgpAuthKey(): string;
    set bgpAuthKey(value: string);
    resetBgpAuthKey(): void;
    get bgpAuthKeyInput(): string | undefined;
    get bgpPeerId(): string;
    get bgpStatus(): string;
    private _customerAddress?;
    get customerAddress(): string;
    set customerAddress(value: string);
    resetCustomerAddress(): void;
    get customerAddressInput(): string | undefined;
    get id(): string;
    private _virtualInterfaceId;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string;
    private _timeouts?;
    get timeouts(): DxBgpPeerTimeouts;
    set timeouts(value: DxBgpPeerTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxBgpPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
