import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.
     */
    readonly allowVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.
     */
    readonly automatedSnapshotRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#availability_zone RedshiftCluster#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_identifier RedshiftCluster#cluster_identifier}.
     */
    readonly clusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.
     */
    readonly clusterParameterGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_public_key RedshiftCluster#cluster_public_key}.
     */
    readonly clusterPublicKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_revision_number RedshiftCluster#cluster_revision_number}.
     */
    readonly clusterRevisionNumber?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_security_groups RedshiftCluster#cluster_security_groups}.
     */
    readonly clusterSecurityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.
     */
    readonly clusterSubnetGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_type RedshiftCluster#cluster_type}.
     */
    readonly clusterType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#cluster_version RedshiftCluster#cluster_version}.
     */
    readonly clusterVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#database_name RedshiftCluster#database_name}.
     */
    readonly databaseName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#elastic_ip RedshiftCluster#elastic_ip}.
     */
    readonly elasticIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#encrypted RedshiftCluster#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#endpoint RedshiftCluster#endpoint}.
     */
    readonly endpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.
     */
    readonly enhancedVpcRouting?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.
     */
    readonly finalSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#iam_roles RedshiftCluster#iam_roles}.
     */
    readonly iamRoles?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#kms_key_id RedshiftCluster#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_password RedshiftCluster#master_password}.
     */
    readonly masterPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#master_username RedshiftCluster#master_username}.
     */
    readonly masterUsername?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#node_type RedshiftCluster#node_type}.
     */
    readonly nodeType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#number_of_nodes RedshiftCluster#number_of_nodes}.
     */
    readonly numberOfNodes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#owner_account RedshiftCluster#owner_account}.
     */
    readonly ownerAccount?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#port RedshiftCluster#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#publicly_accessible RedshiftCluster#publicly_accessible}.
     */
    readonly publiclyAccessible?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.
     */
    readonly skipFinalSnapshot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.
     */
    readonly snapshotClusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_identifier RedshiftCluster#snapshot_identifier}.
     */
    readonly snapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags RedshiftCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#tags_all RedshiftCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * logging block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#logging RedshiftCluster#logging}
     */
    readonly logging?: RedshiftClusterLogging[];
    /**
     * snapshot_copy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#snapshot_copy RedshiftCluster#snapshot_copy}
     */
    readonly snapshotCopy?: RedshiftClusterSnapshotCopy[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#timeouts RedshiftCluster#timeouts}
     */
    readonly timeouts?: RedshiftClusterTimeouts;
}
export interface RedshiftClusterLogging {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#bucket_name RedshiftCluster#bucket_name}.
     */
    readonly bucketName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#enable RedshiftCluster#enable}.
     */
    readonly enable: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#s3_key_prefix RedshiftCluster#s3_key_prefix}.
     */
    readonly s3KeyPrefix?: string;
}
export interface RedshiftClusterSnapshotCopy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#destination_region RedshiftCluster#destination_region}.
     */
    readonly destinationRegion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#grant_name RedshiftCluster#grant_name}.
     */
    readonly grantName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#retention_period RedshiftCluster#retention_period}.
     */
    readonly retentionPeriod?: number;
}
export interface RedshiftClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#create RedshiftCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#delete RedshiftCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html#update RedshiftCluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster}.
 */
export declare class RedshiftCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html aws_redshift_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RedshiftClusterConfig);
    private _allowVersionUpgrade?;
    get allowVersionUpgrade(): boolean;
    set allowVersionUpgrade(value: boolean);
    resetAllowVersionUpgrade(): void;
    get allowVersionUpgradeInput(): boolean | undefined;
    get arn(): string;
    private _automatedSnapshotRetentionPeriod?;
    get automatedSnapshotRetentionPeriod(): number;
    set automatedSnapshotRetentionPeriod(value: number);
    resetAutomatedSnapshotRetentionPeriod(): void;
    get automatedSnapshotRetentionPeriodInput(): number | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _clusterIdentifier;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    private _clusterParameterGroupName?;
    get clusterParameterGroupName(): string;
    set clusterParameterGroupName(value: string);
    resetClusterParameterGroupName(): void;
    get clusterParameterGroupNameInput(): string | undefined;
    private _clusterPublicKey?;
    get clusterPublicKey(): string;
    set clusterPublicKey(value: string);
    resetClusterPublicKey(): void;
    get clusterPublicKeyInput(): string | undefined;
    private _clusterRevisionNumber?;
    get clusterRevisionNumber(): string;
    set clusterRevisionNumber(value: string);
    resetClusterRevisionNumber(): void;
    get clusterRevisionNumberInput(): string | undefined;
    private _clusterSecurityGroups?;
    get clusterSecurityGroups(): string[];
    set clusterSecurityGroups(value: string[]);
    resetClusterSecurityGroups(): void;
    get clusterSecurityGroupsInput(): string[] | undefined;
    private _clusterSubnetGroupName?;
    get clusterSubnetGroupName(): string;
    set clusterSubnetGroupName(value: string);
    resetClusterSubnetGroupName(): void;
    get clusterSubnetGroupNameInput(): string | undefined;
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string | undefined;
    private _clusterVersion?;
    get clusterVersion(): string;
    set clusterVersion(value: string);
    resetClusterVersion(): void;
    get clusterVersionInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    get dnsName(): string;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean;
    set encrypted(value: boolean);
    resetEncrypted(): void;
    get encryptedInput(): boolean | undefined;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string | undefined;
    private _enhancedVpcRouting?;
    get enhancedVpcRouting(): boolean;
    set enhancedVpcRouting(value: boolean);
    resetEnhancedVpcRouting(): void;
    get enhancedVpcRoutingInput(): boolean | undefined;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
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
    private _nodeType;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number | undefined;
    private _ownerAccount?;
    get ownerAccount(): string;
    set ownerAccount(value: string);
    resetOwnerAccount(): void;
    get ownerAccountInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean;
    set publiclyAccessible(value: boolean);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | undefined;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean;
    set skipFinalSnapshot(value: boolean);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | undefined;
    private _snapshotClusterIdentifier?;
    get snapshotClusterIdentifier(): string;
    set snapshotClusterIdentifier(value: string);
    resetSnapshotClusterIdentifier(): void;
    get snapshotClusterIdentifierInput(): string | undefined;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string | undefined;
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
    private _logging?;
    get logging(): RedshiftClusterLogging[];
    set logging(value: RedshiftClusterLogging[]);
    resetLogging(): void;
    get loggingInput(): RedshiftClusterLogging[] | undefined;
    private _snapshotCopy?;
    get snapshotCopy(): RedshiftClusterSnapshotCopy[];
    set snapshotCopy(value: RedshiftClusterSnapshotCopy[]);
    resetSnapshotCopy(): void;
    get snapshotCopyInput(): RedshiftClusterSnapshotCopy[] | undefined;
    private _timeouts?;
    get timeouts(): RedshiftClusterTimeouts;
    set timeouts(value: RedshiftClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): RedshiftClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
