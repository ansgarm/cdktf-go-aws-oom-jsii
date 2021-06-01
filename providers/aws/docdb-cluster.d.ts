import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DocdbClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#apply_immediately DocdbCluster#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#availability_zones DocdbCluster#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#backup_retention_period DocdbCluster#backup_retention_period}.
     */
    readonly backupRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier DocdbCluster#cluster_identifier}.
     */
    readonly clusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}.
     */
    readonly clusterIdentifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_members DocdbCluster#cluster_members}.
     */
    readonly clusterMembers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}.
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_subnet_group_name DocdbCluster#db_subnet_group_name}.
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#deletion_protection DocdbCluster#deletion_protection}.
     */
    readonly deletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}.
     */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine DocdbCluster#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine_version DocdbCluster#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#kms_key_id DocdbCluster#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_password DocdbCluster#master_password}.
     */
    readonly masterPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_username DocdbCluster#master_username}.
     */
    readonly masterUsername?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#port DocdbCluster#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_backup_window DocdbCluster#preferred_backup_window}.
     */
    readonly preferredBackupWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#skip_final_snapshot DocdbCluster#skip_final_snapshot}.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#snapshot_identifier DocdbCluster#snapshot_identifier}.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#storage_encrypted DocdbCluster#storage_encrypted}.
     */
    readonly storageEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags DocdbCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags_all DocdbCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#timeouts DocdbCluster#timeouts}
     */
    readonly timeouts?: DocdbClusterTimeouts;
}
export interface DocdbClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#create DocdbCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#delete DocdbCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#update DocdbCluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster}.
 */
export declare class DocdbCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DocdbClusterConfig);
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
    private _clusterMembers?;
    get clusterMembers(): string[];
    set clusterMembers(value: string[]);
    resetClusterMembers(): void;
    get clusterMembersInput(): string[] | undefined;
    get clusterResourceId(): string;
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
    get timeouts(): DocdbClusterTimeouts;
    set timeouts(value: DocdbClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DocdbClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
