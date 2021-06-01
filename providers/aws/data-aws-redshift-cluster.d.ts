import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}.
     */
    readonly clusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html#tags DataAwsRedshiftCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster}.
 */
export declare class DataAwsRedshiftCluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster.html aws_redshift_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig);
    get allowVersionUpgrade(): boolean;
    get automatedSnapshotRetentionPeriod(): number;
    get availabilityZone(): string;
    get bucketName(): string;
    private _clusterIdentifier;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get clusterParameterGroupName(): string;
    get clusterPublicKey(): string;
    get clusterRevisionNumber(): string;
    get clusterSecurityGroups(): string[];
    get clusterSubnetGroupName(): string;
    get clusterType(): string;
    get clusterVersion(): string;
    get databaseName(): string;
    get elasticIp(): string;
    get enableLogging(): boolean;
    get encrypted(): boolean;
    get endpoint(): string;
    get enhancedVpcRouting(): boolean;
    get iamRoles(): string[];
    get id(): string;
    get kmsKeyId(): string;
    get masterUsername(): string;
    get nodeType(): string;
    get numberOfNodes(): number;
    get port(): number;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): boolean;
    get s3KeyPrefix(): string;
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
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
