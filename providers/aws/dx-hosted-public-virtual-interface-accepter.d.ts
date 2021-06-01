import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxHostedPublicVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#tags DxHostedPublicVirtualInterfaceAccepter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}.
     */
    readonly virtualInterfaceId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}
     */
    readonly timeouts?: DxHostedPublicVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedPublicVirtualInterfaceAccepterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#create DxHostedPublicVirtualInterfaceAccepter#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#delete DxHostedPublicVirtualInterfaceAccepter#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter}.
 */
export declare class DxHostedPublicVirtualInterfaceAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceAccepterConfig);
    get arn(): string;
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
    get timeouts(): DxHostedPublicVirtualInterfaceAccepterTimeouts;
    set timeouts(value: DxHostedPublicVirtualInterfaceAccepterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxHostedPublicVirtualInterfaceAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
