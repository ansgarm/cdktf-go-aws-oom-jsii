import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#apply_immediately ElasticacheCluster#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#availability_zone ElasticacheCluster#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#az_mode ElasticacheCluster#az_mode}.
     */
    readonly azMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#cluster_id ElasticacheCluster#cluster_id}.
     */
    readonly clusterId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#engine ElasticacheCluster#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#engine_version ElasticacheCluster#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#maintenance_window ElasticacheCluster#maintenance_window}.
     */
    readonly maintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#node_type ElasticacheCluster#node_type}.
     */
    readonly nodeType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#notification_topic_arn ElasticacheCluster#notification_topic_arn}.
     */
    readonly notificationTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#num_cache_nodes ElasticacheCluster#num_cache_nodes}.
     */
    readonly numCacheNodes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#parameter_group_name ElasticacheCluster#parameter_group_name}.
     */
    readonly parameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#port ElasticacheCluster#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.
     */
    readonly preferredAvailabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#replication_group_id ElasticacheCluster#replication_group_id}.
     */
    readonly replicationGroupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#security_group_ids ElasticacheCluster#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#security_group_names ElasticacheCluster#security_group_names}.
     */
    readonly securityGroupNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_arns ElasticacheCluster#snapshot_arns}.
     */
    readonly snapshotArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_name ElasticacheCluster#snapshot_name}.
     */
    readonly snapshotName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.
     */
    readonly snapshotRetentionLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_window ElasticacheCluster#snapshot_window}.
     */
    readonly snapshotWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#subnet_group_name ElasticacheCluster#subnet_group_name}.
     */
    readonly subnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#tags ElasticacheCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#tags_all ElasticacheCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export declare class ElasticacheClusterCacheNodes extends cdktf.ComplexComputedList {
    get address(): string;
    get availabilityZone(): string;
    get id(): string;
    get port(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster}.
 */
export declare class ElasticacheCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticacheClusterConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean;
    set applyImmediately(value: boolean);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | undefined;
    get arn(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _azMode?;
    get azMode(): string;
    set azMode(value: string);
    resetAzMode(): void;
    get azModeInput(): string | undefined;
    cacheNodes(index: string): ElasticacheClusterCacheNodes;
    get clusterAddress(): string;
    private _clusterId;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get configurationEndpoint(): string;
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
    get engineVersionActual(): string;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
    get id(): string;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string | undefined;
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string | undefined;
    private _numCacheNodes?;
    get numCacheNodes(): number;
    set numCacheNodes(value: number);
    resetNumCacheNodes(): void;
    get numCacheNodesInput(): number | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preferredAvailabilityZones?;
    get preferredAvailabilityZones(): string[];
    set preferredAvailabilityZones(value: string[]);
    resetPreferredAvailabilityZones(): void;
    get preferredAvailabilityZonesInput(): string[] | undefined;
    private _replicationGroupId?;
    get replicationGroupId(): string;
    set replicationGroupId(value: string);
    resetReplicationGroupId(): void;
    get replicationGroupIdInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[] | undefined;
    private _snapshotArns?;
    get snapshotArns(): string[];
    set snapshotArns(value: string[]);
    resetSnapshotArns(): void;
    get snapshotArnsInput(): string[] | undefined;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    resetSnapshotName(): void;
    get snapshotNameInput(): string | undefined;
    private _snapshotRetentionLimit?;
    get snapshotRetentionLimit(): number;
    set snapshotRetentionLimit(value: number);
    resetSnapshotRetentionLimit(): void;
    get snapshotRetentionLimitInput(): number | undefined;
    private _snapshotWindow?;
    get snapshotWindow(): string;
    set snapshotWindow(value: string);
    resetSnapshotWindow(): void;
    get snapshotWindowInput(): string | undefined;
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    resetSubnetGroupName(): void;
    get subnetGroupNameInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
