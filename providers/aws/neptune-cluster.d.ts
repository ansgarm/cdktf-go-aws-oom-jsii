import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NeptuneClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#apply_immediately NeptuneCluster#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#availability_zones NeptuneCluster#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#backup_retention_period NeptuneCluster#backup_retention_period}.
     */
    readonly backupRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#cluster_identifier NeptuneCluster#cluster_identifier}.
     */
    readonly clusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.
     */
    readonly clusterIdentifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#deletion_protection NeptuneCluster#deletion_protection}.
     */
    readonly deletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.
     */
    readonly enableCloudwatchLogsExports?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#engine NeptuneCluster#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#engine_version NeptuneCluster#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.
     */
    readonly iamDatabaseAuthenticationEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#iam_roles NeptuneCluster#iam_roles}.
     */
    readonly iamRoles?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#kms_key_arn NeptuneCluster#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.
     */
    readonly neptuneClusterParameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.
     */
    readonly neptuneSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#port NeptuneCluster#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#preferred_backup_window NeptuneCluster#preferred_backup_window}.
     */
    readonly preferredBackupWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#replication_source_identifier NeptuneCluster#replication_source_identifier}.
     */
    readonly replicationSourceIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#snapshot_identifier NeptuneCluster#snapshot_identifier}.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#storage_encrypted NeptuneCluster#storage_encrypted}.
     */
    readonly storageEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#tags NeptuneCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#tags_all NeptuneCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#timeouts NeptuneCluster#timeouts}
     */
    readonly timeouts?: NeptuneClusterTimeouts;
}
export interface NeptuneClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#create NeptuneCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#delete NeptuneCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#update NeptuneCluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster}.
 */
export declare class NeptuneCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: NeptuneClusterConfig);
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
    get clusterMembers(): string[];
    get clusterResourceId(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean;
    set deletionProtection(value: boolean);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | undefined;
    private _enableCloudwatchLogsExports?;
    get enableCloudwatchLogsExports(): string[];
    set enableCloudwatchLogsExports(value: string[]);
    resetEnableCloudwatchLogsExports(): void;
    get enableCloudwatchLogsExportsInput(): string[] | undefined;
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
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[] | undefined;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _neptuneClusterParameterGroupName?;
    get neptuneClusterParameterGroupName(): string;
    set neptuneClusterParameterGroupName(value: string);
    resetNeptuneClusterParameterGroupName(): void;
    get neptuneClusterParameterGroupNameInput(): string | undefined;
    private _neptuneSubnetGroupName?;
    get neptuneSubnetGroupName(): string;
    set neptuneSubnetGroupName(value: string);
    resetNeptuneSubnetGroupName(): void;
    get neptuneSubnetGroupNameInput(): string | undefined;
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
    private _timeouts?;
    get timeouts(): NeptuneClusterTimeouts;
    set timeouts(value: NeptuneClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): NeptuneClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
