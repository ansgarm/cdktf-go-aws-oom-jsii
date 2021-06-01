import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAutoscalingGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#filter DataAwsAutoscalingGroups#filter}
     */
    readonly filter?: DataAwsAutoscalingGroupsFilter[];
}
export interface DataAwsAutoscalingGroupsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#name DataAwsAutoscalingGroups#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#values DataAwsAutoscalingGroups#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups}.
 */
export declare class DataAwsAutoscalingGroups extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAutoscalingGroupsConfig);
    get arns(): string[];
    get id(): string;
    get names(): string[];
    private _filter?;
    get filter(): DataAwsAutoscalingGroupsFilter[];
    set filter(value: DataAwsAutoscalingGroupsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAutoscalingGroupsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
