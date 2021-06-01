import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html#cluster_name DataAwsEcsCluster#cluster_name}.
     */
    readonly clusterName: string;
}
export declare class DataAwsEcsClusterSetting extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster}.
 */
export declare class DataAwsEcsCluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEcsClusterConfig);
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get id(): string;
    get pendingTasksCount(): number;
    get registeredContainerInstancesCount(): number;
    get runningTasksCount(): number;
    setting(index: string): DataAwsEcsClusterSetting;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
