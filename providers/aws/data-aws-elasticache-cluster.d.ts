import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html#cluster_id DataAwsElasticacheCluster#cluster_id}.
     */
    readonly clusterId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html#tags DataAwsElasticacheCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsElasticacheClusterCacheNodes extends cdktf.ComplexComputedList {
    get address(): string;
    get availabilityZone(): string;
    get id(): string;
    get port(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster}.
 */
export declare class DataAwsElasticacheCluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheClusterConfig);
    get arn(): string;
    get availabilityZone(): string;
    cacheNodes(index: string): DataAwsElasticacheClusterCacheNodes;
    get clusterAddress(): string;
    private _clusterId;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get configurationEndpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    get maintenanceWindow(): string;
    get nodeType(): string;
    get notificationTopicArn(): string;
    get numCacheNodes(): number;
    get parameterGroupName(): string;
    get port(): number;
    get replicationGroupId(): string;
    get securityGroupIds(): string[];
    get securityGroupNames(): string[];
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    get subnetGroupName(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
