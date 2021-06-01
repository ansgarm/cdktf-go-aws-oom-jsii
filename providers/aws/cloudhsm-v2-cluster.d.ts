import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#hsm_type CloudhsmV2Cluster#hsm_type}.
     */
    readonly hsmType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}.
     */
    readonly sourceBackupIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#subnet_ids CloudhsmV2Cluster#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags CloudhsmV2Cluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags_all CloudhsmV2Cluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#timeouts CloudhsmV2Cluster#timeouts}
     */
    readonly timeouts?: CloudhsmV2ClusterTimeouts;
}
export declare class CloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {
    get awsHardwareCertificate(): string;
    get clusterCertificate(): string;
    get clusterCsr(): string;
    get hsmCertificate(): string;
    get manufacturerHardwareCertificate(): string;
}
export interface CloudhsmV2ClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#create CloudhsmV2Cluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#delete CloudhsmV2Cluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#update CloudhsmV2Cluster#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}.
 */
export declare class CloudhsmV2Cluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudhsmV2ClusterConfig);
    clusterCertificates(index: string): CloudhsmV2ClusterClusterCertificates;
    get clusterId(): string;
    get clusterState(): string;
    private _hsmType;
    get hsmType(): string;
    set hsmType(value: string);
    get hsmTypeInput(): string;
    get id(): string;
    get securityGroupId(): string;
    private _sourceBackupIdentifier?;
    get sourceBackupIdentifier(): string;
    set sourceBackupIdentifier(value: string);
    resetSourceBackupIdentifier(): void;
    get sourceBackupIdentifierInput(): string | undefined;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    get vpcId(): string;
    private _timeouts?;
    get timeouts(): CloudhsmV2ClusterTimeouts;
    set timeouts(value: CloudhsmV2ClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): CloudhsmV2ClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
