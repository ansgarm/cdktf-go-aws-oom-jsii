import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}.
     */
    readonly replicationGroupId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group}.
 */
export declare class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheReplicationGroupConfig);
    get arn(): string;
    get authTokenEnabled(): boolean;
    get automaticFailoverEnabled(): boolean;
    get configurationEndpointAddress(): string;
    get id(): string;
    get memberClusters(): string[];
    get multiAzEnabled(): boolean;
    get nodeType(): string;
    get numberCacheClusters(): number;
    get port(): number;
    get primaryEndpointAddress(): string;
    get readerEndpointAddress(): string;
    get replicationGroupDescription(): string;
    private _replicationGroupId;
    get replicationGroupId(): string;
    set replicationGroupId(value: string);
    get replicationGroupIdInput(): string;
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
