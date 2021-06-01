import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#tags DataAwsVpcs#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#filter DataAwsVpcs#filter}
     */
    readonly filter?: DataAwsVpcsFilter[];
}
export interface DataAwsVpcsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#name DataAwsVpcs#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#values DataAwsVpcs#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs}.
 */
export declare class DataAwsVpcs extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsVpcsConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter?;
    get filter(): DataAwsVpcsFilter[];
    set filter(value: DataAwsVpcsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
