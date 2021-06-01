import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSubnetIdsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#tags DataAwsSubnetIds#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#vpc_id DataAwsSubnetIds#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#filter DataAwsSubnetIds#filter}
     */
    readonly filter?: DataAwsSubnetIdsFilter[];
}
export interface DataAwsSubnetIdsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#name DataAwsSubnetIds#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#values DataAwsSubnetIds#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids}.
 */
export declare class DataAwsSubnetIds extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSubnetIdsConfig);
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
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsSubnetIdsFilter[];
    set filter(value: DataAwsSubnetIdsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSubnetIdsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
