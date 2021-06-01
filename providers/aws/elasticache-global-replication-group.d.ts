import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.
     */
    readonly globalReplicationGroupDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.
     */
    readonly globalReplicationGroupIdSuffix: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.
     */
    readonly primaryReplicationGroupId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group}.
 */
export declare class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig);
    get actualEngineVersion(): string;
    get arn(): string;
    get atRestEncryptionEnabled(): boolean;
    get authTokenEnabled(): boolean;
    get cacheNodeType(): string;
    get clusterEnabled(): boolean;
    get engine(): string;
    get engineVersionActual(): string;
    private _globalReplicationGroupDescription?;
    get globalReplicationGroupDescription(): string;
    set globalReplicationGroupDescription(value: string);
    resetGlobalReplicationGroupDescription(): void;
    get globalReplicationGroupDescriptionInput(): string | undefined;
    get globalReplicationGroupId(): string;
    private _globalReplicationGroupIdSuffix;
    get globalReplicationGroupIdSuffix(): string;
    set globalReplicationGroupIdSuffix(value: string);
    get globalReplicationGroupIdSuffixInput(): string;
    get id(): string;
    private _primaryReplicationGroupId;
    get primaryReplicationGroupId(): string;
    set primaryReplicationGroupId(value: string);
    get primaryReplicationGroupIdInput(): string;
    get transitEncryptionEnabled(): boolean;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
