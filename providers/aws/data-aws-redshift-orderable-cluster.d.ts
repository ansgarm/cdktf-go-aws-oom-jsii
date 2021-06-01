import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftOrderableClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.
     */
    readonly clusterType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.
     */
    readonly clusterVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#node_type DataAwsRedshiftOrderableCluster#node_type}.
     */
    readonly nodeType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.
     */
    readonly preferredNodeTypes?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}.
 */
export declare class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRedshiftOrderableClusterConfig);
    get availabilityZones(): string[];
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
    get id(): string;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string | undefined;
    private _preferredNodeTypes?;
    get preferredNodeTypes(): string[];
    set preferredNodeTypes(value: string[]);
    resetPreferredNodeTypes(): void;
    get preferredNodeTypesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
