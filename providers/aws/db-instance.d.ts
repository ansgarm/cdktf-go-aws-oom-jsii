import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allocated_storage DbInstance#allocated_storage}.
     */
    readonly allocatedStorage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.
     */
    readonly allowMajorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#apply_immediately DbInstance#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#availability_zone DbInstance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_retention_period DbInstance#backup_retention_period}.
     */
    readonly backupRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_window DbInstance#backup_window}.
     */
    readonly backupWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ca_cert_identifier DbInstance#ca_cert_identifier}.
     */
    readonly caCertIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#character_set_name DbInstance#character_set_name}.
     */
    readonly characterSetName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.
     */
    readonly copyTagsToSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#db_subnet_group_name DbInstance#db_subnet_group_name}.
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete_automated_backups DbInstance#delete_automated_backups}.
     */
    readonly deleteAutomatedBackups?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#deletion_protection DbInstance#deletion_protection}.
     */
    readonly deletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain DbInstance#domain}.
     */
    readonly domain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain_iam_role_name DbInstance#domain_iam_role_name}.
     */
    readonly domainIamRoleName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.
     */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine DbInstance#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine_version DbInstance#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#final_snapshot_identifier DbInstance#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.
     */
    readonly iamDatabaseAuthenticationEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier DbInstance#identifier}.
     */
    readonly identifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier_prefix DbInstance#identifier_prefix}.
     */
    readonly identifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#instance_class DbInstance#instance_class}.
     */
    readonly instanceClass: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iops DbInstance#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#kms_key_id DbInstance#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#license_model DbInstance#license_model}.
     */
    readonly licenseModel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#maintenance_window DbInstance#maintenance_window}.
     */
    readonly maintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#max_allocated_storage DbInstance#max_allocated_storage}.
     */
    readonly maxAllocatedStorage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_interval DbInstance#monitoring_interval}.
     */
    readonly monitoringInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_role_arn DbInstance#monitoring_role_arn}.
     */
    readonly monitoringRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#multi_az DbInstance#multi_az}.
     */
    readonly multiAz?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#name DbInstance#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#option_group_name DbInstance#option_group_name}.
     */
    readonly optionGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#parameter_group_name DbInstance#parameter_group_name}.
     */
    readonly parameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#password DbInstance#password}.
     */
    readonly password?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_enabled DbInstance#performance_insights_enabled}.
     */
    readonly performanceInsightsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.
     */
    readonly performanceInsightsKmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_retention_period DbInstance#performance_insights_retention_period}.
     */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#port DbInstance#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#publicly_accessible DbInstance#publicly_accessible}.
     */
    readonly publiclyAccessible?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replicate_source_db DbInstance#replicate_source_db}.
     */
    readonly replicateSourceDb?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#security_group_names DbInstance#security_group_names}.
     */
    readonly securityGroupNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#skip_final_snapshot DbInstance#skip_final_snapshot}.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#snapshot_identifier DbInstance#snapshot_identifier}.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_encrypted DbInstance#storage_encrypted}.
     */
    readonly storageEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_type DbInstance#storage_type}.
     */
    readonly storageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags DbInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags_all DbInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timezone DbInstance#timezone}.
     */
    readonly timezone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#username DbInstance#username}.
     */
    readonly username?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#vpc_security_group_ids DbInstance#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * restore_to_point_in_time block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_to_point_in_time DbInstance#restore_to_point_in_time}
     */
    readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime[];
    /**
     * s3_import block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#s3_import DbInstance#s3_import}
     */
    readonly s3Import?: DbInstanceS3Import[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timeouts DbInstance#timeouts}
     */
    readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceRestoreToPointInTime {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_time DbInstance#restore_time}.
     */
    readonly restoreTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_db_instance_identifier DbInstance#source_db_instance_identifier}.
     */
    readonly sourceDbInstanceIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_dbi_resource_id DbInstance#source_dbi_resource_id}.
     */
    readonly sourceDbiResourceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#use_latest_restorable_time DbInstance#use_latest_restorable_time}.
     */
    readonly useLatestRestorableTime?: boolean;
}
export interface DbInstanceS3Import {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_name DbInstance#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_prefix DbInstance#bucket_prefix}.
     */
    readonly bucketPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ingestion_role DbInstance#ingestion_role}.
     */
    readonly ingestionRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine DbInstance#source_engine}.
     */
    readonly sourceEngine: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine_version DbInstance#source_engine_version}.
     */
    readonly sourceEngineVersion: string;
}
export interface DbInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#create DbInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete DbInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#update DbInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}.
 */
export declare class DbInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbInstanceConfig);
    get address(): string;
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number | undefined;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean;
    set allowMajorVersionUpgrade(value: boolean);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | undefined;
    private _applyImmediately?;
    get applyImmediately(): boolean;
    set applyImmediately(value: boolean);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | undefined;
    get arn(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean;
    set autoMinorVersionUpgrade(value: boolean);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number | undefined;
    private _backupWindow?;
    get backupWindow(): string;
    set backupWindow(value: string);
    resetBackupWindow(): void;
    get backupWindowInput(): string | undefined;
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string | undefined;
    private _characterSetName?;
    get characterSetName(): string;
    set characterSetName(value: string);
    resetCharacterSetName(): void;
    get characterSetNameInput(): string | undefined;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean;
    set copyTagsToSnapshot(value: boolean);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    private _deleteAutomatedBackups?;
    get deleteAutomatedBackups(): boolean;
    set deleteAutomatedBackups(value: boolean);
    resetDeleteAutomatedBackups(): void;
    get deleteAutomatedBackupsInput(): boolean | undefined;
    private _deletionProtection?;
    get deletionProtection(): boolean;
    set deletionProtection(value: boolean);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _domainIamRoleName?;
    get domainIamRoleName(): string;
    set domainIamRoleName(value: string);
    resetDomainIamRoleName(): void;
    get domainIamRoleNameInput(): string | undefined;
    private _enabledCloudwatchLogsExports?;
    get enabledCloudwatchLogsExports(): string[];
    set enabledCloudwatchLogsExports(value: string[]);
    resetEnabledCloudwatchLogsExports(): void;
    get enabledCloudwatchLogsExportsInput(): string[] | undefined;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean;
    set iamDatabaseAuthenticationEnabled(value: boolean);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | undefined;
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string | undefined;
    private _instanceClass;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get latestRestorableTime(): string;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _maxAllocatedStorage?;
    get maxAllocatedStorage(): number;
    set maxAllocatedStorage(value: number);
    resetMaxAllocatedStorage(): void;
    get maxAllocatedStorageInput(): number | undefined;
    private _monitoringInterval?;
    get monitoringInterval(): number;
    set monitoringInterval(value: number);
    resetMonitoringInterval(): void;
    get monitoringIntervalInput(): number | undefined;
    private _monitoringRoleArn?;
    get monitoringRoleArn(): string;
    set monitoringRoleArn(value: string);
    resetMonitoringRoleArn(): void;
    get monitoringRoleArnInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean;
    set multiAz(value: boolean);
    resetMultiAz(): void;
    get multiAzInput(): boolean | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _optionGroupName?;
    get optionGroupName(): string;
    set optionGroupName(value: string);
    resetOptionGroupName(): void;
    get optionGroupNameInput(): string | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _performanceInsightsEnabled?;
    get performanceInsightsEnabled(): boolean;
    set performanceInsightsEnabled(value: boolean);
    resetPerformanceInsightsEnabled(): void;
    get performanceInsightsEnabledInput(): boolean | undefined;
    private _performanceInsightsKmsKeyId?;
    get performanceInsightsKmsKeyId(): string;
    set performanceInsightsKmsKeyId(value: string);
    resetPerformanceInsightsKmsKeyId(): void;
    get performanceInsightsKmsKeyIdInput(): string | undefined;
    private _performanceInsightsRetentionPeriod?;
    get performanceInsightsRetentionPeriod(): number;
    set performanceInsightsRetentionPeriod(value: number);
    resetPerformanceInsightsRetentionPeriod(): void;
    get performanceInsightsRetentionPeriodInput(): number | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean;
    set publiclyAccessible(value: boolean);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | undefined;
    get replicas(): string[];
    private _replicateSourceDb?;
    get replicateSourceDb(): string;
    set replicateSourceDb(value: string);
    resetReplicateSourceDb(): void;
    get replicateSourceDbInput(): string | undefined;
    get resourceId(): string;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[] | undefined;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean;
    set skipFinalSnapshot(value: boolean);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | undefined;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string | undefined;
    get status(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean;
    set storageEncrypted(value: boolean);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
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
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _restoreToPointInTime?;
    get restoreToPointInTime(): DbInstanceRestoreToPointInTime[];
    set restoreToPointInTime(value: DbInstanceRestoreToPointInTime[]);
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): DbInstanceRestoreToPointInTime[] | undefined;
    private _s3Import?;
    get s3Import(): DbInstanceS3Import[];
    set s3Import(value: DbInstanceS3Import[]);
    resetS3Import(): void;
    get s3ImportInput(): DbInstanceS3Import[] | undefined;
    private _timeouts?;
    get timeouts(): DbInstanceTimeouts;
    set timeouts(value: DbInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
