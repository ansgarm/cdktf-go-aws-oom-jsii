import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_state_names DataAwsInstances#instance_state_names}.
     */
    readonly instanceStateNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_tags DataAwsInstances#instance_tags}.
     */
    readonly instanceTags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#filter DataAwsInstances#filter}
     */
    readonly filter?: DataAwsInstancesFilter[];
}
export interface DataAwsInstancesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#name DataAwsInstances#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#values DataAwsInstances#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances}.
 */
export declare class DataAwsInstances extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsInstancesConfig);
    get id(): string;
    get ids(): string[];
    private _instanceStateNames?;
    get instanceStateNames(): string[];
    set instanceStateNames(value: string[]);
    resetInstanceStateNames(): void;
    get instanceStateNamesInput(): string[] | undefined;
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    };
    set instanceTags(value: {
        [key: string]: string;
    });
    resetInstanceTags(): void;
    get instanceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get privateIps(): string[];
    get publicIps(): string[];
    private _filter?;
    get filter(): DataAwsInstancesFilter[];
    set filter(value: DataAwsInstancesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInstancesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
