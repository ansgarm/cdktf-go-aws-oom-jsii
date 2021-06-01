import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#auto_import_policy FsxLustreFileSystem#auto_import_policy}.
     */
    readonly autoImportPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}.
     */
    readonly automaticBackupRetentionDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}.
     */
    readonly copyTagsToBackups?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}.
     */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#deployment_type FsxLustreFileSystem#deployment_type}.
     */
    readonly deploymentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#drive_cache_type FsxLustreFileSystem#drive_cache_type}.
     */
    readonly driveCacheType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#export_path FsxLustreFileSystem#export_path}.
     */
    readonly exportPath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#import_path FsxLustreFileSystem#import_path}.
     */
    readonly importPath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}.
     */
    readonly importedFileChunkSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#kms_key_id FsxLustreFileSystem#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}.
     */
    readonly perUnitStorageThroughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#security_group_ids FsxLustreFileSystem#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_capacity FsxLustreFileSystem#storage_capacity}.
     */
    readonly storageCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_type FsxLustreFileSystem#storage_type}.
     */
    readonly storageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#subnet_ids FsxLustreFileSystem#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags FsxLustreFileSystem#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags_all FsxLustreFileSystem#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}.
     */
    readonly weeklyMaintenanceStartTime?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#timeouts FsxLustreFileSystem#timeouts}
     */
    readonly timeouts?: FsxLustreFileSystemTimeouts;
}
export interface FsxLustreFileSystemTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#create FsxLustreFileSystem#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#delete FsxLustreFileSystem#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system}.
 */
export declare class FsxLustreFileSystem extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig);
    get arn(): string;
    private _autoImportPolicy?;
    get autoImportPolicy(): string;
    set autoImportPolicy(value: string);
    resetAutoImportPolicy(): void;
    get autoImportPolicyInput(): string | undefined;
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
    private _driveCacheType?;
    get driveCacheType(): string;
    set driveCacheType(value: string);
    resetDriveCacheType(): void;
    get driveCacheTypeInput(): string | undefined;
    private _exportPath?;
    get exportPath(): string;
    set exportPath(value: string);
    resetExportPath(): void;
    get exportPathInput(): string | undefined;
    get id(): string;
    private _importPath?;
    get importPath(): string;
    set importPath(value: string);
    resetImportPath(): void;
    get importPathInput(): string | undefined;
    private _importedFileChunkSize?;
    get importedFileChunkSize(): number;
    set importedFileChunkSize(value: number);
    resetImportedFileChunkSize(): void;
    get importedFileChunkSizeInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get mountName(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _perUnitStorageThroughput?;
    get perUnitStorageThroughput(): number;
    set perUnitStorageThroughput(value: number);
    resetPerUnitStorageThroughput(): void;
    get perUnitStorageThroughputInput(): number | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
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
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _timeouts?;
    get timeouts(): FsxLustreFileSystemTimeouts;
    set timeouts(value: FsxLustreFileSystemTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): FsxLustreFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
