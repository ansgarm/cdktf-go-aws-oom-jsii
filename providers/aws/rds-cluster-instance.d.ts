import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#apply_immediately RdsClusterInstance#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#auto_minor_version_upgrade RdsClusterInstance#auto_minor_version_upgrade}.
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#availability_zone RdsClusterInstance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#ca_cert_identifier RdsClusterInstance#ca_cert_identifier}.
     */
    readonly caCertIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#cluster_identifier RdsClusterInstance#cluster_identifier}.
     */
    readonly clusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#copy_tags_to_snapshot RdsClusterInstance#copy_tags_to_snapshot}.
     */
    readonly copyTagsToSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_parameter_group_name RdsClusterInstance#db_parameter_group_name}.
     */
    readonly dbParameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#db_subnet_group_name RdsClusterInstance#db_subnet_group_name}.
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine RdsClusterInstance#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#engine_version RdsClusterInstance#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier RdsClusterInstance#identifier}.
     */
    readonly identifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#identifier_prefix RdsClusterInstance#identifier_prefix}.
     */
    readonly identifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#instance_class RdsClusterInstance#instance_class}.
     */
    readonly instanceClass: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_interval RdsClusterInstance#monitoring_interval}.
     */
    readonly monitoringInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#monitoring_role_arn RdsClusterInstance#monitoring_role_arn}.
     */
    readonly monitoringRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_enabled RdsClusterInstance#performance_insights_enabled}.
     */
    readonly performanceInsightsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#performance_insights_kms_key_id RdsClusterInstance#performance_insights_kms_key_id}.
     */
    readonly performanceInsightsKmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_backup_window RdsClusterInstance#preferred_backup_window}.
     */
    readonly preferredBackupWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#preferred_maintenance_window RdsClusterInstance#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#promotion_tier RdsClusterInstance#promotion_tier}.
     */
    readonly promotionTier?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#publicly_accessible RdsClusterInstance#publicly_accessible}.
     */
    readonly publiclyAccessible?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags RdsClusterInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#tags_all RdsClusterInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#timeouts RdsClusterInstance#timeouts}
     */
    readonly timeouts?: RdsClusterInstanceTimeouts;
}
export interface RdsClusterInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#create RdsClusterInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#delete RdsClusterInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html#update RdsClusterInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance}.
 */
export declare class RdsClusterInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html aws_rds_cluster_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RdsClusterInstanceConfig);
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
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string | undefined;
    private _clusterIdentifier;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean;
    set copyTagsToSnapshot(value: boolean);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | undefined;
    private _dbParameterGroupName?;
    get dbParameterGroupName(): string;
    set dbParameterGroupName(value: string);
    resetDbParameterGroupName(): void;
    get dbParameterGroupNameInput(): string | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    get dbiResourceId(): string;
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
    get kmsKeyId(): string;
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
    get port(): number;
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
    private _promotionTier?;
    get promotionTier(): number;
    set promotionTier(value: number);
    resetPromotionTier(): void;
    get promotionTierInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean;
    set publiclyAccessible(value: boolean);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | undefined;
    get storageEncrypted(): boolean;
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
    get writer(): boolean;
    private _timeouts?;
    get timeouts(): RdsClusterInstanceTimeouts;
    set timeouts(value: RdsClusterInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): RdsClusterInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
