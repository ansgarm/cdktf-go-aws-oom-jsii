import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DaxClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#availability_zones DaxCluster#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#cluster_name DaxCluster#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#description DaxCluster#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#iam_role_arn DaxCluster#iam_role_arn}.
     */
    readonly iamRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#maintenance_window DaxCluster#maintenance_window}.
     */
    readonly maintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#node_type DaxCluster#node_type}.
     */
    readonly nodeType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#notification_topic_arn DaxCluster#notification_topic_arn}.
     */
    readonly notificationTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#parameter_group_name DaxCluster#parameter_group_name}.
     */
    readonly parameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#replication_factor DaxCluster#replication_factor}.
     */
    readonly replicationFactor: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#security_group_ids DaxCluster#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#subnet_group_name DaxCluster#subnet_group_name}.
     */
    readonly subnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags DaxCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags_all DaxCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * server_side_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#server_side_encryption DaxCluster#server_side_encryption}
     */
    readonly serverSideEncryption?: DaxClusterServerSideEncryption[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#timeouts DaxCluster#timeouts}
     */
    readonly timeouts?: DaxClusterTimeouts;
}
export declare class DaxClusterNodes extends cdktf.ComplexComputedList {
    get address(): string;
    get availabilityZone(): string;
    get id(): string;
    get port(): number;
}
export interface DaxClusterServerSideEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#enabled DaxCluster#enabled}.
     */
    readonly enabled?: boolean;
}
export interface DaxClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#create DaxCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#delete DaxCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#update DaxCluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster}.
 */
export declare class DaxCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DaxClusterConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    get clusterAddress(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get configurationEndpoint(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _iamRoleArn;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string;
    get id(): string;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _nodeType;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string;
    nodes(index: string): DaxClusterNodes;
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    get port(): number;
    private _replicationFactor;
    get replicationFactor(): number;
    set replicationFactor(value: number);
    get replicationFactorInput(): number;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
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
    private _serverSideEncryption?;
    get serverSideEncryption(): DaxClusterServerSideEncryption[];
    set serverSideEncryption(value: DaxClusterServerSideEncryption[]);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DaxClusterServerSideEncryption[] | undefined;
    private _timeouts?;
    get timeouts(): DaxClusterTimeouts;
    set timeouts(value: DaxClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DaxClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
