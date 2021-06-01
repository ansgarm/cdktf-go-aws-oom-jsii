import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxPublicVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#address_family DxPublicVirtualInterface#address_family}.
     */
    readonly addressFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#amazon_address DxPublicVirtualInterface#amazon_address}.
     */
    readonly amazonAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_asn DxPublicVirtualInterface#bgp_asn}.
     */
    readonly bgpAsn: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}.
     */
    readonly bgpAuthKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#connection_id DxPublicVirtualInterface#connection_id}.
     */
    readonly connectionId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#customer_address DxPublicVirtualInterface#customer_address}.
     */
    readonly customerAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#name DxPublicVirtualInterface#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}.
     */
    readonly routeFilterPrefixes: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags DxPublicVirtualInterface#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags_all DxPublicVirtualInterface#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#vlan DxPublicVirtualInterface#vlan}.
     */
    readonly vlan: number;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#timeouts DxPublicVirtualInterface#timeouts}
     */
    readonly timeouts?: DxPublicVirtualInterfaceTimeouts;
}
export interface DxPublicVirtualInterfaceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#create DxPublicVirtualInterface#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#delete DxPublicVirtualInterface#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface}.
 */
export declare class DxPublicVirtualInterface extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxPublicVirtualInterfaceConfig);
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
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routeFilterPrefixes;
    get routeFilterPrefixes(): string[];
    set routeFilterPrefixes(value: string[]);
    get routeFilterPrefixesInput(): string[];
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
    get timeouts(): DxPublicVirtualInterfaceTimeouts;
    set timeouts(value: DxPublicVirtualInterfaceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxPublicVirtualInterfaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
