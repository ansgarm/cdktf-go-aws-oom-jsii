import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2CoipPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#tags DataAwsEc2CoipPools#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#filter DataAwsEc2CoipPools#filter}
     */
    readonly filter?: DataAwsEc2CoipPoolsFilter[];
}
export interface DataAwsEc2CoipPoolsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#name DataAwsEc2CoipPools#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#values DataAwsEc2CoipPools#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools}.
 */
export declare class DataAwsEc2CoipPools extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2CoipPoolsConfig);
    get id(): string;
    get poolIds(): string[];
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
    get filter(): DataAwsEc2CoipPoolsFilter[];
    set filter(value: DataAwsEc2CoipPoolsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2CoipPoolsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
