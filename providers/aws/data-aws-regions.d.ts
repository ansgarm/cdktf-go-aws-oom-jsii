import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRegionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#all_regions DataAwsRegions#all_regions}.
     */
    readonly allRegions?: boolean;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#filter DataAwsRegions#filter}
     */
    readonly filter?: DataAwsRegionsFilter[];
}
export interface DataAwsRegionsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#name DataAwsRegions#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#values DataAwsRegions#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions}.
 */
export declare class DataAwsRegions extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRegionsConfig);
    private _allRegions?;
    get allRegions(): boolean;
    set allRegions(value: boolean);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | undefined;
    get id(): string;
    get names(): string[];
    private _filter?;
    get filter(): DataAwsRegionsFilter[];
    set filter(value: DataAwsRegionsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRegionsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
