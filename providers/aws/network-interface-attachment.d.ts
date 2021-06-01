import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkInterfaceAttachmentAConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#device_index NetworkInterfaceAttachmentA#device_index}.
     */
    readonly deviceIndex: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#instance_id NetworkInterfaceAttachmentA#instance_id}.
     */
    readonly instanceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}.
     */
    readonly networkInterfaceId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment}.
 */
export declare class NetworkInterfaceAttachmentA extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html aws_network_interface_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkInterfaceAttachmentAConfig);
    get attachmentId(): string;
    private _deviceIndex;
    get deviceIndex(): number;
    set deviceIndex(value: number);
    get deviceIndexInput(): number;
    get id(): string;
    private _instanceId;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
    private _networkInterfaceId;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
