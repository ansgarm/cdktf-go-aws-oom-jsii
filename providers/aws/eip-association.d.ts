import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#allocation_id EipAssociation#allocation_id}.
     */
    readonly allocationId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#allow_reassociation EipAssociation#allow_reassociation}.
     */
    readonly allowReassociation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#instance_id EipAssociation#instance_id}.
     */
    readonly instanceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#network_interface_id EipAssociation#network_interface_id}.
     */
    readonly networkInterfaceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#private_ip_address EipAssociation#private_ip_address}.
     */
    readonly privateIpAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html#public_ip EipAssociation#public_ip}.
     */
    readonly publicIp?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association}.
 */
export declare class EipAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: EipAssociationConfig);
    private _allocationId?;
    get allocationId(): string;
    set allocationId(value: string);
    resetAllocationId(): void;
    get allocationIdInput(): string | undefined;
    private _allowReassociation?;
    get allowReassociation(): boolean;
    set allowReassociation(value: boolean);
    resetAllowReassociation(): void;
    get allowReassociationInput(): boolean | undefined;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    private _privateIpAddress?;
    get privateIpAddress(): string;
    set privateIpAddress(value: string);
    resetPrivateIpAddress(): void;
    get privateIpAddressInput(): string | undefined;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
