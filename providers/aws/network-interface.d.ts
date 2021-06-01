import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#description NetworkInterface#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_address_count NetworkInterface#ipv6_address_count}.
     */
    readonly ipv6AddressCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_addresses NetworkInterface#ipv6_addresses}.
     */
    readonly ipv6Addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ip NetworkInterface#private_ip}.
     */
    readonly privateIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips NetworkInterface#private_ips}.
     */
    readonly privateIps?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips_count NetworkInterface#private_ips_count}.
     */
    readonly privateIpsCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#security_groups NetworkInterface#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#source_dest_check NetworkInterface#source_dest_check}.
     */
    readonly sourceDestCheck?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#subnet_id NetworkInterface#subnet_id}.
     */
    readonly subnetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags NetworkInterface#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags_all NetworkInterface#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * attachment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#attachment NetworkInterface#attachment}
     */
    readonly attachment?: NetworkInterfaceAttachment[];
}
export interface NetworkInterfaceAttachment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#device_index NetworkInterface#device_index}.
     */
    readonly deviceIndex: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#instance NetworkInterface#instance}.
     */
    readonly instance: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}.
 */
export declare class NetworkInterface extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkInterfaceConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number | undefined;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[] | undefined;
    get macAddress(): string;
    get outpostArn(): string;
    get privateDnsName(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    private _privateIps?;
    get privateIps(): string[];
    set privateIps(value: string[]);
    resetPrivateIps(): void;
    get privateIpsInput(): string[] | undefined;
    private _privateIpsCount?;
    get privateIpsCount(): number;
    set privateIpsCount(value: number);
    resetPrivateIpsCount(): void;
    get privateIpsCountInput(): number | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean;
    set sourceDestCheck(value: boolean);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | undefined;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
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
    private _attachment?;
    get attachment(): NetworkInterfaceAttachment[];
    set attachment(value: NetworkInterfaceAttachment[]);
    resetAttachment(): void;
    get attachmentInput(): NetworkInterfaceAttachment[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
