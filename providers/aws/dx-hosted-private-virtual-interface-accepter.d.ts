import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxHostedPrivateVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}.
     */
    readonly dxGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags DxHostedPrivateVirtualInterfaceAccepter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}.
     */
    readonly virtualInterfaceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}.
     */
    readonly vpnGatewayId?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}
     */
    readonly timeouts?: DxHostedPrivateVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedPrivateVirtualInterfaceAccepterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#create DxHostedPrivateVirtualInterfaceAccepter#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#delete DxHostedPrivateVirtualInterfaceAccepter#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter}.
 */
export declare class DxHostedPrivateVirtualInterfaceAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceAccepterConfig);
    get arn(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    resetDxGatewayId(): void;
    get dxGatewayIdInput(): string | undefined;
    get id(): string;
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
    private _virtualInterfaceId;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string | undefined;
    private _timeouts?;
    get timeouts(): DxHostedPrivateVirtualInterfaceAccepterTimeouts;
    set timeouts(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedPrivateVirtualInterfaceAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
