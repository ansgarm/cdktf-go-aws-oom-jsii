import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxHostedTransitVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#address_family DxHostedTransitVirtualInterface#address_family}.
     */
    readonly addressFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#amazon_address DxHostedTransitVirtualInterface#amazon_address}.
     */
    readonly amazonAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}.
     */
    readonly bgpAsn: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}.
     */
    readonly bgpAuthKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#connection_id DxHostedTransitVirtualInterface#connection_id}.
     */
    readonly connectionId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#customer_address DxHostedTransitVirtualInterface#customer_address}.
     */
    readonly customerAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#mtu DxHostedTransitVirtualInterface#mtu}.
     */
    readonly mtu?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#name DxHostedTransitVirtualInterface#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}.
     */
    readonly ownerAccountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#vlan DxHostedTransitVirtualInterface#vlan}.
     */
    readonly vlan: number;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#timeouts DxHostedTransitVirtualInterface#timeouts}
     */
    readonly timeouts?: DxHostedTransitVirtualInterfaceTimeouts;
}
export interface DxHostedTransitVirtualInterfaceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#create DxHostedTransitVirtualInterface#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#delete DxHostedTransitVirtualInterface#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface}.
 */
export declare class DxHostedTransitVirtualInterface extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxHostedTransitVirtualInterfaceConfig);
    private _addressFamily;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    private _amazonAddress?;
    get amazonAddress(): string;
    set amazonAddress(value: string);
    resetAmazonAddress(): void;
    get amazonAddressInput(): string | undefined;
    get amazonSideAsn(): string;
    get arn(): string;
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
    private _connectionId;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    private _customerAddress?;
    get customerAddress(): string;
    set customerAddress(value: string);
    resetCustomerAddress(): void;
    get customerAddressInput(): string | undefined;
    get id(): string;
    get jumboFrameCapable(): boolean;
    private _mtu?;
    get mtu(): number;
    set mtu(value: number);
    resetMtu(): void;
    get mtuInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ownerAccountId;
    get ownerAccountId(): string;
    set ownerAccountId(value: string);
    get ownerAccountIdInput(): string;
    private _vlan;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number;
    private _timeouts?;
    get timeouts(): DxHostedTransitVirtualInterfaceTimeouts;
    set timeouts(value: DxHostedTransitVirtualInterfaceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedTransitVirtualInterfaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
