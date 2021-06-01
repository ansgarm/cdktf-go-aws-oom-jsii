import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxHostedTransitVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}.
     */
    readonly dxGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#tags DxHostedTransitVirtualInterfaceAccepter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}.
     */
    readonly virtualInterfaceId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}
     */
    readonly timeouts?: DxHostedTransitVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedTransitVirtualInterfaceAccepterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#create DxHostedTransitVirtualInterfaceAccepter#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#delete DxHostedTransitVirtualInterfaceAccepter#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html aws_dx_hosted_transit_virtual_interface_accepter}.
 */
export declare class DxHostedTransitVirtualInterfaceAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html aws_dx_hosted_transit_virtual_interface_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxHostedTransitVirtualInterfaceAccepterConfig);
    get arn(): string;
    private _dxGatewayId;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string;
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
    private _timeouts?;
    get timeouts(): DxHostedTransitVirtualInterfaceAccepterTimeouts;
    set timeouts(value: DxHostedTransitVirtualInterfaceAccepterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedTransitVirtualInterfaceAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
