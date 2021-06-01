import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.
     */
    readonly clusterId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.
     */
    readonly clusterState?: string;
}
export declare class DataAwsCloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {
    get awsHardwareCertificate(): string;
    get clusterCertificate(): string;
    get clusterCsr(): string;
    get hsmCertificate(): string;
    get manufacturerHardwareCertificate(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}.
 */
export declare class DataAwsCloudhsmV2Cluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCloudhsmV2ClusterConfig);
    clusterCertificates(index: string): DataAwsCloudhsmV2ClusterClusterCertificates;
    private _clusterId;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    private _clusterState?;
    get clusterState(): string;
    set clusterState(value: string);
    resetClusterState(): void;
    get clusterStateInput(): string | undefined;
    get id(): string;
    get securityGroupId(): string;
    get subnetIds(): string[];
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
