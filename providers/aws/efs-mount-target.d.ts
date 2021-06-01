import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#file_system_id EfsMountTarget#file_system_id}.
     */
    readonly fileSystemId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#ip_address EfsMountTarget#ip_address}.
     */
    readonly ipAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#security_groups EfsMountTarget#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html#subnet_id EfsMountTarget#subnet_id}.
     */
    readonly subnetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target}.
 */
export declare class EfsMountTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EfsMountTargetConfig);
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    get dnsName(): string;
    get fileSystemArn(): string;
    private _fileSystemId;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    get mountTargetDnsName(): string;
    get networkInterfaceId(): string;
    get ownerId(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
