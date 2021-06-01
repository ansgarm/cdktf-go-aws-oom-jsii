import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}.
     */
    readonly allowMajorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#apply_immediately RdsCluster#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#availability_zones RdsCluster#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backtrack_window RdsCluster#backtrack_window}.
     */
    readonly backtrackWindow?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#backup_retention_period RdsCluster#backup_retention_period}.
     */
    readonly backupRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier RdsCluster#cluster_identifier}.
     */
    readonly clusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}.
     */
    readonly clusterIdentifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#cluster_members RdsCluster#cluster_members}.
     */
    readonly clusterMembers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}.
     */
    readonly copyTagsToSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#database_name RdsCluster#database_name}.
     */
    readonly databaseName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}.
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#db_subnet_group_name RdsCluster#db_subnet_group_name}.
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#deletion_protection RdsCluster#deletion_protection}.
     */
    readonly deletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enable_http_endpoint RdsCluster#enable_http_endpoint}.
     */
    readonly enableHttpEndpoint?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}.
     */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine RdsCluster#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_mode RdsCluster#engine_mode}.
     */
    readonly engineMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#engine_version RdsCluster#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#final_snapshot_identifier RdsCluster#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#global_cluster_identifier RdsCluster#global_cluster_identifier}.
     */
    readonly globalClusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}.
     */
    readonly iamDatabaseAuthenticationEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#iam_roles RdsCluster#iam_roles}.
     */
    readonly iamRoles?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#kms_key_id RdsCluster#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_password RdsCluster#master_password}.
     */
    readonly masterPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#master_username RdsCluster#master_username}.
     */
    readonly masterUsername?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#port RdsCluster#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_backup_window RdsCluster#preferred_backup_window}.
     */
    readonly preferredBackupWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#preferred_maintenance_window RdsCluster#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#replication_source_identifier RdsCluster#replication_source_identifier}.
     */
    readonly replicationSourceIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#skip_final_snapshot RdsCluster#skip_final_snapshot}.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#snapshot_identifier RdsCluster#snapshot_identifier}.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_region RdsCluster#source_region}.
     */
    readonly sourceRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#storage_encrypted RdsCluster#storage_encrypted}.
     */
    readonly storageEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags RdsCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#tags_all RdsCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#vpc_security_group_ids RdsCluster#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * restore_to_point_in_time block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_point_in_time RdsCluster#restore_to_point_in_time}
     */
    readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime[];
    /**
     * s3_import block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#s3_import RdsCluster#s3_import}
     */
    readonly s3Import?: RdsClusterS3Import[];
    /**
     * scaling_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#scaling_configuration RdsCluster#scaling_configuration}
     */
    readonly scalingConfiguration?: RdsClusterScalingConfiguration[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeouts RdsCluster#timeouts}
     */
    readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterRestoreToPointInTime {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_to_time RdsCluster#restore_to_time}.
     */
    readonly restoreToTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#restore_type RdsCluster#restore_type}.
     */
    readonly restoreType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_cluster_identifier RdsCluster#source_cluster_identifier}.
     */
    readonly sourceClusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#use_latest_restorable_time RdsCluster#use_latest_restorable_time}.
     */
    readonly useLatestRestorableTime?: boolean;
}
export interface RdsClusterS3Import {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_name RdsCluster#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#bucket_prefix RdsCluster#bucket_prefix}.
     */
    readonly bucketPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#ingestion_role RdsCluster#ingestion_role}.
     */
    readonly ingestionRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine RdsCluster#source_engine}.
     */
    readonly sourceEngine: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#source_engine_version RdsCluster#source_engine_version}.
     */
    readonly sourceEngineVersion: string;
}
export interface RdsClusterScalingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#auto_pause RdsCluster#auto_pause}.
     */
    readonly autoPause?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#max_capacity RdsCluster#max_capacity}.
     */
    readonly maxCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#min_capacity RdsCluster#min_capacity}.
     */
    readonly minCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}.
     */
    readonly secondsUntilAutoPause?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#timeout_action RdsCluster#timeout_action}.
     */
    readonly timeoutAction?: string;
}
export interface RdsClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#create RdsCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#delete RdsCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html#update RdsCluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}.
 */
export declare class RdsCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: RdsClusterConfig);
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
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _backtrackWindow?;
    get backtrackWindow(): number;
    set backtrackWindow(value: number);
    resetBacktrackWindow(): void;
    get backtrackWindowInput(): number | undefined;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string | undefined;
    private _clusterIdentifierPrefix?;
    get clusterIdentifierPrefix(): string;
    set clusterIdentifierPrefix(value: string);
    resetClusterIdentifierPrefix(): void;
    get clusterIdentifierPrefixInput(): string | undefined;
    private _clusterMembers?;
    get clusterMembers(): string[];
    set clusterMembers(value: string[]);
    resetClusterMembers(): void;
    get clusterMembersInput(): string[] | undefined;
    get clusterResourceId(): string;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean;
    set copyTagsToSnapshot(value: boolean);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _dbClusterParameterGroupName?;
    get dbClusterParameterGroupName(): string;
    set dbClusterParameterGroupName(value: string);
    resetDbClusterParameterGroupName(): void;
    get dbClusterParameterGroupNameInput(): string | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    private _deletionProtection?;
    get deletionProtection(): boolean;
    set deletionProtection(value: boolean);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | undefined;
    private _enableHttpEndpoint?;
    get enableHttpEndpoint(): boolean;
    set enableHttpEndpoint(value: boolean);
    resetEnableHttpEndpoint(): void;
    get enableHttpEndpointInput(): boolean | undefined;
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
    private _engineMode?;
    get engineMode(): string;
    set engineMode(value: string);
    resetEngineMode(): void;
    get engineModeInput(): string | undefined;
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
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    resetGlobalClusterIdentifier(): void;
    get globalClusterIdentifierInput(): string | undefined;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean;
    set iamDatabaseAuthenticationEnabled(value: boolean);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | undefined;
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[] | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _masterPassword?;
    get masterPassword(): string;
    set masterPassword(value: string);
    resetMasterPassword(): void;
    get masterPasswordInput(): string | undefined;
    private _masterUsername?;
    get masterUsername(): string;
    set masterUsername(value: string);
    resetMasterUsername(): void;
    get masterUsernameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    get readerEndpoint(): string;
    private _replicationSourceIdentifier?;
    get replicationSourceIdentifier(): string;
    set replicationSourceIdentifier(value: string);
    resetReplicationSourceIdentifier(): void;
    get replicationSourceIdentifierInput(): string | undefined;
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
    private _sourceRegion?;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    resetSourceRegion(): void;
    get sourceRegionInput(): string | undefined;
    private _storageEncrypted?;
    get storageEncrypted(): boolean;
    set storageEncrypted(value: boolean);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | undefined;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _restoreToPointInTime?;
    get restoreToPointInTime(): RdsClusterRestoreToPointInTime[];
    set restoreToPointInTime(value: RdsClusterRestoreToPointInTime[]);
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): RdsClusterRestoreToPointInTime[] | undefined;
    private _s3Import?;
    get s3Import(): RdsClusterS3Import[];
    set s3Import(value: RdsClusterS3Import[]);
    resetS3Import(): void;
    get s3ImportInput(): RdsClusterS3Import[] | undefined;
    private _scalingConfiguration?;
    get scalingConfiguration(): RdsClusterScalingConfiguration[];
    set scalingConfiguration(value: RdsClusterScalingConfiguration[]);
    resetScalingConfiguration(): void;
    get scalingConfigurationInput(): RdsClusterScalingConfiguration[] | undefined;
    private _timeouts?;
    get timeouts(): RdsClusterTimeouts;
    set timeouts(value: RdsClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): RdsClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
