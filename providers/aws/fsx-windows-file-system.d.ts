import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#active_directory_id FsxWindowsFileSystem#active_directory_id}.
     */
    readonly activeDirectoryId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.
     */
    readonly automaticBackupRetentionDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.
     */
    readonly copyTagsToBackups?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.
     */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#deployment_type FsxWindowsFileSystem#deployment_type}.
     */
    readonly deploymentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#kms_key_id FsxWindowsFileSystem#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.
     */
    readonly preferredSubnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#security_group_ids FsxWindowsFileSystem#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.
     */
    readonly skipFinalBackup?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_capacity FsxWindowsFileSystem#storage_capacity}.
     */
    readonly storageCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_type FsxWindowsFileSystem#storage_type}.
     */
    readonly storageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#subnet_ids FsxWindowsFileSystem#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags FsxWindowsFileSystem#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags_all FsxWindowsFileSystem#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.
     */
    readonly throughputCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.
     */
    readonly weeklyMaintenanceStartTime?: string;
    /**
     * self_managed_active_directory block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
     */
    readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#timeouts FsxWindowsFileSystem#timeouts}
     */
    readonly timeouts?: FsxWindowsFileSystemTimeouts;
}
export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#dns_ips FsxWindowsFileSystem#dns_ips}.
     */
    readonly dnsIps: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#domain_name FsxWindowsFileSystem#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.
     */
    readonly fileSystemAdministratorsGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.
     */
    readonly organizationalUnitDistinguishedName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#password FsxWindowsFileSystem#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#username FsxWindowsFileSystem#username}.
     */
    readonly username: string;
}
export interface FsxWindowsFileSystemTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#create FsxWindowsFileSystem#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#delete FsxWindowsFileSystem#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#update FsxWindowsFileSystem#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system}.
 */
export declare class FsxWindowsFileSystem extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig);
    private _activeDirectoryId?;
    get activeDirectoryId(): string;
    set activeDirectoryId(value: string);
    resetActiveDirectoryId(): void;
    get activeDirectoryIdInput(): string | undefined;
    get arn(): string;
    private _automaticBackupRetentionDays?;
    get automaticBackupRetentionDays(): number;
    set automaticBackupRetentionDays(value: number);
    resetAutomaticBackupRetentionDays(): void;
    get automaticBackupRetentionDaysInput(): number | undefined;
    private _copyTagsToBackups?;
    get copyTagsToBackups(): boolean;
    set copyTagsToBackups(value: boolean);
    resetCopyTagsToBackups(): void;
    get copyTagsToBackupsInput(): boolean | undefined;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string | undefined;
    get dnsName(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get preferredFileServerIp(): string;
    private _preferredSubnetId?;
    get preferredSubnetId(): string;
    set preferredSubnetId(value: string);
    resetPreferredSubnetId(): void;
    get preferredSubnetIdInput(): string | undefined;
    get remoteAdministrationEndpoint(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _skipFinalBackup?;
    get skipFinalBackup(): boolean;
    set skipFinalBackup(value: boolean);
    resetSkipFinalBackup(): void;
    get skipFinalBackupInput(): boolean | undefined;
    private _storageCapacity;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    get storageCapacityInput(): number;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    private _throughputCapacity;
    get throughputCapacity(): number;
    set throughputCapacity(value: number);
    get throughputCapacityInput(): number;
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _selfManagedActiveDirectory?;
    get selfManagedActiveDirectory(): FsxWindowsFileSystemSelfManagedActiveDirectory[];
    set selfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory[]);
    resetSelfManagedActiveDirectory(): void;
    get selfManagedActiveDirectoryInput(): FsxWindowsFileSystemSelfManagedActiveDirectory[] | undefined;
    private _timeouts?;
    get timeouts(): FsxWindowsFileSystemTimeouts;
    set timeouts(value: FsxWindowsFileSystemTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): FsxWindowsFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
