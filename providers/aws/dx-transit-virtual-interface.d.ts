import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxTransitVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#address_family DxTransitVirtualInterface#address_family}.
     */
    readonly addressFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#amazon_address DxTransitVirtualInterface#amazon_address}.
     */
    readonly amazonAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#bgp_asn DxTransitVirtualInterface#bgp_asn}.
     */
    readonly bgpAsn: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.
     */
    readonly bgpAuthKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#connection_id DxTransitVirtualInterface#connection_id}.
     */
    readonly connectionId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#customer_address DxTransitVirtualInterface#customer_address}.
     */
    readonly customerAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.
     */
    readonly dxGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#mtu DxTransitVirtualInterface#mtu}.
     */
    readonly mtu?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#name DxTransitVirtualInterface#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#tags DxTransitVirtualInterface#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#tags_all DxTransitVirtualInterface#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#vlan DxTransitVirtualInterface#vlan}.
     */
    readonly vlan: number;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#timeouts DxTransitVirtualInterface#timeouts}
     */
    readonly timeouts?: DxTransitVirtualInterfaceTimeouts;
}
export interface DxTransitVirtualInterfaceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#create DxTransitVirtualInterface#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#delete DxTransitVirtualInterface#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#update DxTransitVirtualInterface#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface}.
 */
export declare class DxTransitVirtualInterface extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxTransitVirtualInterfaceConfig);
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
    private _dxGatewayId;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string;
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
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _vlan;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number;
    private _timeouts?;
    get timeouts(): DxTransitVirtualInterfaceTimeouts;
    set timeouts(value: DxTransitVirtualInterfaceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxTransitVirtualInterfaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
